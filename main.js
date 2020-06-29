var currentQuestionIndex = 0;
var questionsInSelectedChapters = allQuestionAnswers.filter((questionAnswer) =>
  chaptersSelected.includes(questionAnswer.chapter)
);
var questionAnswers = getRandom(questionsInSelectedChapters, numberOfQuestions);
var totalQuestions = questionAnswers.length;
var totalTime = totalQuestions * 60 * 1000;
var timeRemaining = totalTime;
var countdownTimer;

const correctAnswer = `<img src="data:image/svg+xml,%3Csvg class='bi bi-check2' width='1em' height='1em' viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z'/%3E%3C/svg%3E" />`;
const wrongAnswer = `<img src="data:image/svg+xml,%3Csvg class='bi bi-x' width='1em' height='1em' viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z'/%3E%3Cpath fill-rule='evenodd' d='M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z'/%3E%3C/svg%3E" />`;

var isExamFinished = false;

window.onload = function () {
  renderQuestionAnswers();
};

function getRandom(arr, n) {
  let result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    let x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

function renderQuestionStatusTable() {
  const questionStatusTable = [];
  questionAnswers.forEach((questionAnswer, questionIndex) => {
    console.log(`isExamFinished`, isExamFinished);
    let questionStatus =
      `<div>` +
      `<button type="button" class="btn question-status-button ${
        questionAnswer.isAnswered ? "btn-success" : "btn-info"
      } ${
        questionAnswer.isFlagged ? "flagged-question" : ""
      }" onClick="gotoQuestion(${questionIndex})">` +
      // isExamFinished === true
      // ? `<img src="${
      //     questionAnswer.selectedAnswer === questionAnswer.answer
      //       ? correctAnswer
      //       : wrongAnswer
      //   }" />`
      // :
      `${
        isExamFinished
          ? questionAnswer.selectedAnswer === questionAnswer.answer
            ? correctAnswer
            : wrongAnswer
          : questionIndex + 1
      }` +
      `</button></div>`;
    questionStatusTable.push(questionStatus);
  });

  document.getElementById(
    "questionStatusTable"
  ).innerHTML = questionStatusTable.join("");
}

function renderQuestion() {
  const questionAnswer = questionAnswers[currentQuestionIndex];
  let queAns = `<div class="question-answer" data-qid="${currentQuestionIndex}">`;
  queAns += `<div class="question-header">Question ${
    currentQuestionIndex + 1
  } of ${totalQuestions} <span class="chapter-number" style="display: ${
    isExamFinished ? "inline-block" : "none"
  }">${
    "Chapter " + questionAnswer.chapter
  } </span> <span class="question-marks">Marks: ${
    questionAnswer.marks
  }</span></div>`;
  queAns += `<div class="question">` + questionAnswer.question + "</div>";
  queAns +=
    `<div class="options" data-qid="${currentQuestionIndex}">` +
    questionAnswer.options
      .map(
        (option, optionIndex) =>
          `<div class="option ${
            isExamFinished &&
            questionAnswer.isAnswered &&
            questionAnswer.selectedAnswer === option &&
            questionAnswer.selectedAnswer !== questionAnswer.answer
              ? "incorrect-answer"
              : ""
          } ${
            isExamFinished && questionAnswer.answer === option
              ? "correct-answer"
              : ""
          }"><input type="radio" name="q-${currentQuestionIndex}" value="o-${optionIndex}" data-oid="${optionIndex}" ${
            questionAnswer.selectedAnswer === option ? "checked" : ""
          } onClick="setAnswer(${currentQuestionIndex}, '${option}')">${option}</input></div>`
      )
      .join("") +
    "</div>";
  queAns += `</div>`;
  document.getElementById("questionsHolder").innerHTML = queAns;

  renderButtons();
}

function setAnswer(questionIndex, answerText) {
  const questionAnswer = questionAnswers[questionIndex];
  questionAnswer.isAnswered = true;
  questionAnswer.selectedAnswer = answerText;
  renderQuestionStatusTable();
}

function renderButtons() {
  document.getElementById("prevQuestion").disabled = false;
  document.getElementById("nextQuestion").disabled = false;
  if (currentQuestionIndex === 0) {
    document.getElementById("prevQuestion").disabled = true;
  } else if (currentQuestionIndex === totalQuestions - 1) {
    document.getElementById("nextQuestion").disabled = true;
  }
  renderFlagButtonText();
  if (isExamFinished) {
    console.log("isExamFinished", isExamFinished);
    disableInputs();
  }
}

function renderFlagButtonText() {
  const isFlagged = questionAnswers[currentQuestionIndex].isFlagged;
  const flagQuestionButton = document.getElementById("flagQuestion");
  if (isFlagged) {
    flagQuestionButton.innerText = "Unflag question";
  } else {
    flagQuestionButton.innerText = "Flag question";
  }
}

function manageTime() {
  countdownTimer = setInterval(() => {
    timeRemaining -= 1000;
    if (timeRemaining <= 0) {
      clearInterval(countdownTimer);
      if (!isExamFinished) {
        finishExam();
      }
    }
    let seconds = timeRemaining / 1000;
    const minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    document.getElementById(
      "actualTimeRemaining"
    ).innerText = `${minutes}:${seconds}`;
  }, 1000);
}

function renderQuestionAnswers() {
  document.getElementById("syllabus").innerText =
    "Chapters: " + chaptersSelected.join(", ");
  renderQuestion();
  renderQuestionStatusTable();
  renderButtons();
  manageTime();
}

function gotoQuestion(questionIndex) {
  currentQuestionIndex = questionIndex;
  renderQuestion();
}

function nextQuestion() {
  if (currentQuestionIndex === totalQuestions - 1) {
    document.getElementById("nextQuestion").disabled = true;
  } else {
    currentQuestionIndex++;
    renderQuestion();
  }
}

function previousQuestion() {
  if (currentQuestionIndex === 0) {
    document.getElementById("prevQuestion").disabled = true;
  } else {
    currentQuestionIndex--;
    renderQuestion();
  }
}

function finishExam() {}

function flagQuestion() {
  questionAnswers[currentQuestionIndex].isFlagged = !questionAnswers[
    currentQuestionIndex
  ].isFlagged;
  renderQuestionStatusTable();
  renderFlagButtonText();
}

function finishExam() {
  isExamFinished = true;
  let marksObtained = 0;
  let totalMarks = 0;
  questionAnswers.forEach((questionAnswer) => {
    totalMarks += questionAnswer.marks;
    if (questionAnswer.selectedAnswer === questionAnswer.answer) {
      marksObtained += questionAnswer.marks;
    }
  });
  disableInputs();
  renderQuestion();
  renderQuestionStatusTable();
  setTimeout(() => {
    alert(`Marks obtained: ${marksObtained} out of ${totalMarks}`);
  }, 100);
}

function disableInputs() {
  document.getElementById("flagQuestion").disabled = true;
  document.getElementById("finishExam").disabled = true;
  Array.from(document.querySelectorAll('input[type="radio"]')).forEach(
    (option) => (option.disabled = true)
  );
}
