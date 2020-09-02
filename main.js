const BASE_HREF = "/mcq/";
// const BASE_HREF = "";
var numberOfQuestionsAvailable = 0;
var selected = {
  subjectCode: -1,
  chapters: [],
  questionCount: -1,
};

window.onload = function () {
  renderSubjects();
};

function renderSubjects() {
  let subjectsRow = [];
  //   console.log(subjects);
  subjects.forEach((sub, index) => {
    let row = `<tr><td>${sub.code}</td><td>${sub.name}</td><td class="button-container"><button type="button" class="btn btn-primary btn-sm" onClick="selectSubject(${sub.code})" data-toggle="modal" data-target="#configureTopics">Select</button></td></tr>`;
    subjectsRow.push(row);
  });
  const tableBody = document.querySelector("#subjects > tbody");
  tableBody.innerHTML = subjectsRow.join("");
}

function selectSubject(subCode) {
  console.log(`Selected subject code: ${subCode}`);
  document.getElementById("chaptersContainer").innerHTML = "";
  document.getElementById("numberOfQuestions").style.display = "none";

  // Set global value
  selected.subjectCode = subCode;

  // Set subject name
  const selectedSubject = subjects.find((sub) => sub.code === subCode);
  const title = document.getElementById("configureTopicsLabel");
  title.setAttribute("data-subCode", subCode);
  title.innerText = selectedSubject.name;

  // Display checkboxes for chapters
  jQuery.getScript(
    `question-bank/${subCode}.js`,
    () => {
      console.log("File loaded", chapters);
      const checkboxes = chapters.map(
        (chapter) =>
          `<div class="checkbox-container"><input type="checkbox" name="allChapters" value="${chapter.chapter}" onChange="calculateQuestionsAvailable(${chapter.chapter})">${chapter.chapter}. ${chapter.title}</input></div>`
      );
      const checkboxesToRender = checkboxes.join("");
      console.log(checkboxesToRender);
      const chaptersContainer = document.getElementById("chaptersContainer");
      console.log(chaptersContainer);
      chaptersContainer.innerHTML = checkboxesToRender;
    },
    () => {
      console.log(`Error occurred while getting file!`);
      document.getElementById("chaptersContainer").innerHTML = "";
      document.getElementById("numberOfQuestions").style.display = "none";
    }
  );
}

function calculateQuestionsAvailable(chapterNumber) {
  const selectedChapters = Array.from(
    document.querySelectorAll(
      '#chaptersContainer input[type="checkbox"]:checked'
    )
  ).map((checkbox) => Number.parseInt(checkbox.value));
  //   console.log(selectedChapters);

  // Set global value
  selected.chapters = selectedChapters;

  if (selectedChapters.length === 0) {
    document.getElementById("numberOfQuestions").style.display = "none";
  } else {
    document.getElementById("numberOfQuestions").style.display = "block";
    numberOfQuestionsAvailable = 0;
    selectedChapters.forEach((selectedChpt) => {
      numberOfQuestionsAvailable += allQuestionAnswers.filter(
        (qa) => qa.chapter === selectedChpt
      ).length;
    });
    console.log(`numberOfQuestionsAvailable: ${numberOfQuestionsAvailable}`);
    document.getElementById(
      "maxQuestionCount"
    ).innerText = numberOfQuestionsAvailable;
    document
      .getElementById("questionsForExam")
      .setAttribute("max", numberOfQuestionsAvailable);
  }
}

function setQuestionsCount() {
  const numberOfQuestions = Number.parseInt(
    document.getElementById("questionsForExam").value
  );
  console.log(numberOfQuestions);
  if (
    numberOfQuestions >= 1 &&
    numberOfQuestions <= numberOfQuestionsAvailable
  ) {
    // Set global value
    selected.questionCount = numberOfQuestions;
    document.getElementById("startExam").removeAttribute("disabled");
  } else {
    // Set global value
    selected.questionCount = -1;
    document.getElementById("startExam").setAttribute("disabled", true);
  }
}

function startExam() {
  const subjectCode = document
    .getElementById("configureTopicsLabel")
    .attributes.getNamedItem("data-subCode");
  const questionCount = document.getElementById("questionsForExam").value;
  const selectedChapters = Array.from(
    document.querySelectorAll(
      '#chaptersContainer input[type="checkbox"]:checked'
    )
  ).map((checkbox) => Number.parseInt(checkbox.value));
  console.log(subjectCode, questionCount, selectedChapters);

  const urlToVisit = `${BASE_HREF}exam.html?sc=${
    selected.subjectCode
  }&cs=${selected.chapters.join()}&qc=${selected.questionCount}`;
  window.location = urlToVisit;
}
