var chapters = [
  //   { chapter: 1, title: "The project" },
  //   { chapter: 2, title: "Project appraisal" },
  //   { chapter: 3, title: "Technical appraisal" },
  //   { chapter: 4, title: "Economic appraisal" },
  //   { chapter: 5, title: "Market appraisal" },
  //   { chapter: 6, title: "Financial appraisal" },
  //   { chapter: 7, title: "Capital structure" },
  { chapter: 8, title: "Presentation of your project for financer" },
  { chapter: 9, title: "Term loans" },
  { chapter: 10, title: "Working capital finance" },
  { chapter: 11, title: "Private equity" },
  { chapter: 12, title: "Public listing of security" },
  { chapter: 13, title: "International capital" },
  { chapter: 14, title: "Crowd funding" },
  { chapter: 15, title: "Project planning risk & managment" },
  { chapter: 16, title: "Project quality assurance & audit" },
];
var allQuestionAnswers = [
  {
    question:
      "While generating Input based ideas for a new project, which of the following information is relevant?",
    options: [
      "Family budget studies",
      "Market studies",
      "Import and Export Statistics",
      "none of the above",
    ],
    answer: "none of the above",
    chapter: 1,
    marks: 1,
  },
  {
    question: "Good ideas are generated using  various methods such as:",
    options: [
      "Cost reduction",
      "Productivity improvement",
      "Improvement in contribution margin",
      "all of the above",
    ],
    answer: "all of the above",
    chapter: 1,
    marks: 1,
  },
  {
    question:
      "While screening  from the  various ideas collected, you must consider the following criteria:",
    options: [
      "reasonability of the cost",
      "availability of the raw materials",
      "risk level acceptability",
      "all of the above",
    ],
    answer: "all of the above",
    chapter: 1,
    marks: 1,
  },
  {
    question: "You can get good ideas for projects by doing the following:",
    options: [
      "Attending trade and business fairs",
      "Reviewing Import and Export data",
      "Study new technological developments",
      "all of the above",
    ],
    answer: "all of the above",
    chapter: 1,
    marks: 1,
  },
  {
    question:
      "Which of the following is / are the main features of Revenue Expenditure",
    options: [
      "It precedes benefit / utility",
      "It is incurred and benefits are available on recurring basis",
      "It is to use and maintain the assets so created",
      "all of the above",
    ],
    answer: "It is to use and maintain the assets so created",
    chapter: 1,
    marks: 1,
  },
  {
    question:
      "Which of the following is / are the main features of Capital Expenditure",
    options: [
      "It is subject to completion report of the scheme or asset",
      "It requires administrative approval from Competent Authority",
      "It precedes benefit / utility",
      "all of the above",
    ],
    answer: "all of the above",
    chapter: 1,
    marks: 1,
  },
  {
    question:
      "Which of the following are the sources of Secondary Information?",
    options: [
      "Census of India",
      "Plan Reports",
      "Economic Survey",
      "all of the above",
    ],
    answer: "all of the above",
    chapter: 1,
    marks: 1,
  },
  {
    question:
      "If a company uses 60% debt @ rate of 12%, 20% preference @ rate of 10% and balance equity @ 20%, what will it’s Weighted Average Cost of Capital will be?",
    options: ["14%", "15%", "13.20%", "none of the above"],
    answer: "13.20%",
    chapter: 1,
    marks: 1,
  },
  {
    question:
      "Harmish set-ups a new Solar Cells manufacturing unit. His company uses 65% debt @ rate of 12.50%, 25% equity @ 23.00%, at what is the maximum rate that is can issue preference shares so that its Weighted Average Cost of Capital does not exceed 15.00%:",
    options: ["12.50%", "15.00%", "15.58%", "11.25%"],
    answer: "11.25%",
    chapter: 1,
    marks: 1,
  },
  {
    question:
      "A company intends to invest Rs. 20 crores in a project which earns a rate of return of 20%. Its Weighted Average Cost of Capital of a firm is 13.00%. What is Net return from the project?",
    options: [
      "Rs. 1.30 crores",
      "Rs. 2.60 crores",
      "Rs. 2.40 crores",
      "none of the above",
    ],
    answer: "Rs. 2.60 crores",
    chapter: 1,
    marks: 1,
  },
  {
    question:
      "Project Appraisal requires carrying out appraisals under which of the following heads?",
    options: ["Technical", "Economic", "Financial", "all of the above"],
    answer: "all of the above",
    chapter: 2,
    marks: 1,
  },
  {
    question:
      "Which of the following is not a part of examination as part of Project Appraisal?",
    options: ["Financial", "Technical", "Commissioning", "none of the above"],
    answer: "Commissioning",
    chapter: 2,
    marks: 1,
  },
  {
    question: "Why is Project Appraisal important?",
    options: [
      "It gets the systems right",
      "It lays the foundation for delivery",
      "It justifies the money to be spent on the project",
      "all of the above",
    ],
    answer: "all of the above",
    chapter: 2,
    marks: 1,
  },
  {
    question: "How does Project Appraisal help managers?",
    options: [
      "It makes sure their program benefits organisation",
      "It provides documentation to meet financial and audit requirements",
      "It is consistent and objective in choosing projects",
      "all of the above",
    ],
    answer: "all of the above",
    chapter: 2,
    marks: 1,
  },
  {
    question:
      "Fill in the blank. ______________ Appraisal looks into the financial feasibility of the new capital investment proposal or expansion of existing productive facilities.",
    options: ["Financial", "Market", "Economic", "Technical"],
    answer: "Financial",
    chapter: 2,
    marks: 1,
  },
  {
    question:
      "The Project Team has worked on ideas and inputs from the production team, collected the data, and documented all the data. The project appears viable to the Project Team. What will the Project Team do next?",
    options: [
      "Finalise the contracts with various vendors",
      "Hand over the completed project to the operations",
      "Capitalise the project in the books",
      "Get the project appraised independently preferably from bankers/financers",
    ],
    answer:
      "Get the project appraised independently preferably from bankers/financers",
    chapter: 2,
    marks: 1,
  },
  {
    question:
      "State whether True or False. Project Appraisal helps Project Managers to make sure that the project benefits the organisation",
    options: ["True", "False"],
    answer: "True",
    chapter: 2,
    marks: 1,
  },
  {
    question: "Why is Appraisal an important decision making tool?",
    options: [
      "It ensures that the projects selected for funding are sustainable",
      "It presents the project in a very rosy manner to the financers",
      "It ensures that the company is in a position to borrow money",
      "It enables managers to generate theoretical knowledge to present to the financers",
    ],
    answer: "It ensures that the projects selected for funding are sustainable",
    chapter: 2,
    marks: 1,
  },
  {
    question:
      "How does a good Appraisal Report help the organisation to get the systems right?",
    options: [
      "It ascertains that the project in beneficial to the nation and the society",
      "It justifies spending money on a project",
      "It ensures that the project application, appraisal and approval functions are separate",
      "none of the above",
    ],
    answer:
      "It ensures that the project application, appraisal and approval functions are separate",
    chapter: 2,
    marks: 1,
  },
  {
    question:
      "How does a good Appraisal Report help the organisation to get the systems right?",
    options: [
      "ascertains that the project in beneficial to the nation and the society",
      "justifies spending money on a project",
      "ensures that the project application, appraisal and approval functions are separate",
      "none of the above",
    ],
    answer:
      "ensures that the project application, appraisal and approval functions are separate",
    chapter: 2,
    marks: 1,
  },
  // {"question":"While choosing a particular technology, what would an industrialist consider?","options":["Latest developments","Ease of absorption","Use by other units","all of the above"],"answer":"all of the above","chapter":3,"marks":1},{"question":"On which of the following aspects is a Technical Appraisal based upon?","options":["Environmental","Plant Capacity","Product Mix","all of the above"],"answer":"all of the above","chapter":3,"marks":1},{"question":"Which of the following does not form part of Structures and Civil Works composition?","options":["outdoor works","site preparation and developments","buildings and structures","processed industrial materials and components"],"answer":"processed industrial materials and components","chapter":3,"marks":1},{"question":"Which of the following are types of project charts and layouts?","options":["General functional layout","Material flow diagram","Utility layout","all of the above"],"answer":"all of the above","chapter":3,"marks":1},{"question":"Fill in the blank. ___________ refers to the number of units or volume that can be produced during a given period.","options":["Product Mix","Material Inputs","Plant Capacity","Technical Arrangements"],"answer":"Plant Capacity","chapter":3,"marks":1},{"question":"A unit could bankrupt due to which of the following reasons?","options":["Higher salaries for the factory workers","Very costly land & building","Undependable supply of basic inputs","All of the above"],"answer":"Undependable supply of basic inputs","chapter":3,"marks":1},{"question":"Technical appraisal is important as","options":["It facilitates the optimal project formulations in terms of capacity, technology, location, technology, size, etc on.","It ensures that all the inputs required to set up the project are available","it ensures that the project is technically feasible","All of the above"],"answer":"All of the above","chapter":3,"marks":1},{"question":"On which of the following aspects is a Technical Appraisal based upon:","options":["Environmental","Plant Capacity","Product Mix","all of the above"],"answer":"all of the above","chapter":3,"marks":1},{"question":"Fill in the blank. __________________ are some of the scheduling techniques used in the review of the Project","options":["Gantt Charts, PERT, CPM, GERT","Cost over-runs","Time over-runs","all of the above"],"answer":"Gantt Charts, PERT, CPM, GERT","chapter":3,"marks":1},{"question":"State whether True or False. General functional layouts establish the progress of production from one machine to another with description, location, space required, need for power and utilities and distance from next section.","options":["True","False"],"answer":"False","chapter":3,"marks":1},{"question":"Why is there a need nowadays for mass customization?","options":["Better profitability of the units","It increases the productivity of the unit","Customer demands are at an all time high","All of the above"],"answer":"Customer demands are at an all time high","chapter":3,"marks":1},{"question":"___________ refers to the number of units or volume that can be produced during a given period.","options":["Product Mix","Material Inputs","Plant Capacity","Technical Arrangements"],"answer":"Plant Capacity","chapter":3,"marks":1},{"question":"It is vital to have proper Technical Arrangements by way of a good consultant in relation to a manufacturing process. What are the technical inputs that the agency will consider before taking the assignment?","options":["Period of collaboration agreement","Process and performance guarantees in terms of plant capacity, product quality and consumption of raw materials and utilities","Selection of the process or technology. Design, purchase, procurement and installation of the plant and training of the manpower","all of the above"],"answer":"all of the above","chapter":3,"marks":1},{"question":"How is Technical appraisal important?","options":["It looks into the other benefits to the nation as a whole","It ensures that there is a potential market which can be met by the production capacity of the unit.","It facilitates the optimal project formulations in terms of capacity, technology, location, technology, size, etc on.","All of the above"],"answer":"It facilitates the optimal project formulations in terms of capacity, technology, location, technology, size, etc on.","chapter":3,"marks":1},{"question":"The Full form of ETP is:","options":["Enterprise Technology Plan","Enterprise Technology Plant","Effluent Taken for Purification","Effluent Treatment Plant"],"answer":"Effluent Treatment Plant","chapter":3,"marks":1},{"question":"The Full form of ETP is:","options":["True","False"],"answer":"True","chapter":3,"marks":1},{"question":"State whether True or False. It is better is Manufacturing Lead Time is as close as possible to actual machining and assembly time","options":["Performability","Quality","Cost of Production","Throughput"],"answer":"Cost of Production","chapter":3,"marks":1},{"question":"State whether True or False. It is better is Manufacturing Lead Time is as close as possible to actual machining and assembly time","options":["The ability of the system to respond effectively to change","The hourly/daily production rate which is the reciprocal of production time per unit","The total time to process the product through the manufacturing plant","The quantity of semi finished product currently lying on the factory floor Throughput"],"answer":"The quantity of semi finished product currently lying on the factory floor Throughput","chapter":3,"marks":1},{"question":"Which of the following is not one of the methods to assess the Competitive status of a unit?","options":["True","False"],"answer":"False","chapter":3,"marks":1},{"question":"What is meant by WIP?","options":["True","False"],"answer":"False","chapter":3,"marks":1},{"question":"State whether True or False. A higher Work-in-Progress preferred for an efficient manufacturing viz-a-viz, lower Work-in-Progress.","options":["The quantity of semi finished product currently lying on the factory floor Throughput","The ability of the system to respond effectively to change","The hourly/daily production rate which is the reciprocal of production time per unit","The total time to process the product through the manufacturing plant"],"answer":"The hourly/daily production rate which is the reciprocal of production time per unit","chapter":3,"marks":1},{"question":"State whether True or False. A higher Work-in-Progress preferred for an efficient manufacturing viz-a-viz, lower Work-in-Progress.","options":["Seat miles","Tonnes carried","Miles travelled","Number of Persons carried"],"answer":"Tonnes carried","chapter":3,"marks":1},{"question":"State whether True or False. It is important to recover the cost of machinery fast. Therefore, machinery must be utilized more and faster in order to produce more goods irrespective of whether the produced goods can be sold or not.","options":["Seat miles","Tonnes carried","Miles travelled","Persons carried"],"answer":"Seat miles","chapter":3,"marks":1},{"question":"What is meant by Throughput?","options":["Number of rooms","Number of faculties","Number of hospital beds","Weight bearing capacity of the building"],"answer":"Number of hospital beds","chapter":3,"marks":1},{"question":"How will a cargo airline measure its capacity?","options":["Number of rooms","Number of recreational facilities","Number of beds","All of the above"],"answer":"Number of rooms","chapter":3,"marks":1},{"question":"How will a passenger airline measure its capacity?","options":["True","False"],"answer":"False","chapter":3,"marks":1},{"question":"How will a hospital measure its capacity?","options":["True","False"],"answer":"True","chapter":3,"marks":1},{"question":"How will a hotel measure its capacity?","options":["True","False"],"answer":"True","chapter":3,"marks":1},{"question":"State whether True or False Unlike transfer lines, Job shops are less flexible and are used for manufacture of different products. Their trait is low MLT and low WIp.","options":["They measure the performance of a manufacturing line w.r.t. down time","They measure the flexibility of the system to respond effectively to change","They help produce better quality products","The apply lean production thinking to the whole company"],"answer":"The apply lean production thinking to the whole company","chapter":3,"marks":1},{"question":"State whether True or False Total Quality Control (TQC) involves control of quality at source","options":["True","False"],"answer":"False","chapter":3,"marks":1},{"question":"State whether True or False Maintenance of high quality depends on the integrity of the materials and integrity of manufacturing process.","options":["It helps the system to become flexible to change","It integrates the financial data with pay rolls, manufacturing and inventory records and purchasing","It improves the MLT of the manufacturing unit","all of the above"],"answer":"It integrates the financial data with pay rolls, manufacturing and inventory records and purchasing","chapter":3,"marks":1},
  {
    question:
      "State whether True False. When imperfections exist, market prices do not reflect social values.",
    options: ["True", "False"],
    answer: "True",
    chapter: 4,
    marks: 1,
  },
  {
    question:
      "State True or False. A blood donation camp or nutrition program for girls is very much relevant under SCBA methology.",
    options: ["True", "False"],
    answer: "True",
    chapter: 4,
    marks: 1,
  },
  {
    question:
      "State whether True or False. The primary purpose of any financial institution is to make profit.",
    options: ["True", "False"],
    answer: "False",
    chapter: 4,
    marks: 1,
  },
  {
    question:
      "Which of the following are the principal sources of discrepancy between the monetary and social benefits of the project?",
    options: [
      "Merit wants",
      "Taxes and subsidies",
      "Concern for savings",
      "all of the above",
    ],
    answer: "all of the above",
    chapter: 4,
    marks: 1,
  },
  {
    question:
      "Various financial institutions in India carry out Economic Appraisals considering which of the following three aspects?",
    options: [
      "Economic Rate of Return, Effective Rate of Production, Product Resource Cost",
      "Economic Rate of Return, Effective Rate of Production, Domestic Resource Cost",
      "Effective Rate of Return, Economic Rate of Production, Domestic Resource Cost",
      "Effective Rate of Return, Economic Rate of Production, External Resource Cost",
    ],
    answer:
      "Economic Rate of Return, Effective Rate of Production, Domestic Resource Cost",
    chapter: 4,
    marks: 1,
  },
  {
    question:
      "Which of the following is/are the common market imperfections found in developing countries?",
    options: [
      "rationing",
      "prescription of minimum wage rate",
      "foreign exchange regulation",
      "all of the above",
    ],
    answer: "all of the above",
    chapter: 4,
    marks: 1,
  },
  {
    question:
      "Which of the following are the principal sources of discrepancy between the monetary and social benefits of the project?",
    options: [
      "Market Imperfections",
      "Sales prices",
      "Profit",
      "Production costs",
    ],
    answer: "Market Imperfections",
    chapter: 4,
    marks: 1,
  },
  {
    question:
      "State whether True False. Consumers in a developing economy pay more for a commodity under rationing",
    options: ["True", "False"],
    answer: "False",
    chapter: 4,
    marks: 1,
  },
  {
    question:
      "State whether True False. Practically, Economic Appraisal done by financial institutions is not very meticulous and precise.",
    options: ["True", "False"],
    answer: "True",
    chapter: 4,
    marks: 1,
  },
  {
    question:
      "Which Method of Demand Forecasting should a steel producer use to forecast demand for his products?",
    options: ["Market Analysis", "End-Use", "Trend", "Regression"],
    answer: "End-Use",
    chapter: 5,
    marks: 1,
  },
  {
    question:
      "Identify from the following statements, one statement which is not concerning to Market analysis",
    options: [
      "Production possibilities and constraints",
      "Consumer behaviour, intentions, motivations, attitudes, preferences and requirements",
      "Extent of competition and market share",
      "Suitability of production process",
    ],
    answer: "Suitability of production process",
    chapter: 5,
    marks: 1,
  },
  {
    question: "Why is Market appraisal important?",
    options: [
      "It can sell the products at the price points such that it can service the interest on loans taken. Even after servicing the loan, there is sufficient surplus for the unit to carry out sustainable operations.",
      "It ensures that the project generates foreign exchange savings",
      "It ensures that the project generates employment",
      "All of the above",
    ],
    answer:
      "It can sell the products at the price points such that it can service the interest on loans taken. Even after servicing the loan, there is sufficient surplus for the unit to carry out sustainable operations.",
    chapter: 5,
    marks: 1,
  },
  {
    question:
      "The End Use Method is appropriate for predicting demand of products such as:",
    options: ["Pins", "Packaged food items", "White Goods", "Caustic Soda"],
    answer: "Caustic Soda",
    chapter: 5,
    marks: 1,
  },
  {
    question: "What is the purpose of Competitive Analysis?",
    options: [
      "determine the strengths and weaknesses of competitors",
      "find out where we are going wrong/right",
      "find out our own strengths and weaknesses",
      "judge our competitors in correct manner",
    ],
    answer: "determine the strengths and weaknesses of competitors",
    chapter: 5,
    marks: 1,
  },
  {
    question:
      "Fill in with appropriate words. Choice of selecting an appropriate distribution strategy is based on factors such as _______________ and internal resources.",
    options: [
      "End-use Method",
      "Regression Method",
      "Pricing Method",
      "Trend Method",
    ],
    answer: "Pricing Method",
    chapter: 5,
    marks: 1,
  },
  {
    question:
      "Fill in the blank. ___________________ deals with the study of the segmented market, product positioning, product promotion and distribution strategies and analysis of the competition.",
    options: [
      "Demand Forecasting",
      "Trend Method",
      "Regression Method",
      "Market Analysis",
    ],
    answer: "Market Analysis",
    chapter: 5,
    marks: 1,
  },
  {
    question: "Why is Financial Appraisal important?",
    options: [
      "It ensures that the project is able to get a reasonable return on the investment made to carry on sustainable operations",
      "It determines the Break-Even Point to find the exact level of sales and production when the unit can Break-even",
      "It estimates the cashflows and reasonable level of profit that the unit can make from the operations",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "The Following cashflow of a Project with cashflows as under. The company’s cost of capital is 9%. What is the NPV of the Project?\nYear\tCashflow (Rs)\n0\t-240,000\n1\t80,000\n2\t120,000\n3\t70,000\n4\t40,000\n5\t20,000",
    options: ["Rs. 90,000", "Rs. 75,000", "Rs. 29,760", "None of the above"],
    answer: "Rs. 29,760",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "Which of the following is an advantage of using the IRR technique of discounted cashflow?",
    options: [
      "It is fairly complicated to calculate",
      "it is not a measure of absolute profitability",
      "It means a firm selecting projects where the IRR exceeds the cost of capital should increase shareholders' wealth.",
      "Interpolation only provides an estimate and an accurate estimate requires the use of a spreadsheet programme",
    ],
    answer:
      "It means a firm selecting projects where the IRR exceeds the cost of capital should increase shareholders' wealth.",
    chapter: 6,
    marks: 1,
  },
  {
    question: "Why is Financial Appraisal important?",
    options: [
      "It ensures that the project is able to get a reasonable return on the investment made to carry on sustainable operations",
      "It determines the Break-Even Point to find the exact level of sales and production when the unit can Break-even",
      "It estimates the cashflows and reasonable level of profit that the unit can make from the operations",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "State whether True False. When a Project is being formulated, after the documentation of data and project Appraisal, the project which has best financial viability will be selected for implementation.",
    options: ["True", "False"],
    answer: "False",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "Which of the following does not form part of the Sources of Funds under Financial Appraisal?",
    options: [
      "Equity Share Capital",
      "Term Loans",
      "Debenture Capital\t4",
      "Cash in Bank",
    ],
    answer: "Cash in Bank",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "Find the Net Rate of Return on a new Fertilizer plant;\nTotal Investment is Rs. 7.50 crores; Project earns net profit after depreciation, interest of Rs. 2 crores; Interest Cost of Rs. 0.60 crores. Depreciation is Rs. 0.50 crores",
    options: ["26.67%", "12.00%", "18.67%", "none of the above"],
    answer: "26.67%",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "Aparna is considering setting up a teaching academy with an investment outlay of Rs. 50 lakhs. If the average annual Net Profit after taxes of the company is Rs. 7 lakhs, what is the payback period of the project?",
    options: [
      "Rs. 7.00 years",
      "Rs. 3.50 years",
      "Rs. 7.14 years",
      "None of the above",
    ],
    answer: "Rs. 7.14 years",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "Which of the following is not an advantage of using the IRR technique of discounted cashflow?",
    options: [
      "It is not a measure of absolute profitability",
      "it considers the time value of money",
      "It is based on cash flows not profits",
      "None of the abov",
    ],
    answer: "It is not a measure of absolute profitability",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "MyMusic Stores Ltd has Earnings per Share of Rs. 0.50 and its share Market Price is Rs. 20.00. What is the P/E Ratio of the Company?",
    options: ["20.50", "0.025", "10", "40"],
    answer: "40",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "Predict Projects Pvt Ltd has Current Assets of Rs. 3,53,15,500/- and Current Liabilities of Rs. 2,39,50,400/- and Inventories of Rs. 35,50,000. What is Current Ratio of the company?",
    options: ["1.33", "1.47", "1.62", "none of the above"],
    answer: "1.47",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "The cash flow in respect of two projects is given below. The cost of capital is 12%; the discount factor of 12% is also given.\nYear\tProject A\tProject B\tDiscount Factor @ 12%\tDiscount Factor @ 16%\n0\t(200)\t(300)\t1\t1\n1\t60\t100\t0.8929\t0.8620\n2\t60\t100\t0.7972\t0.7431\n3\t60\t90\t0.7118\t0.6406\n4\t60\t70\t0.6355\t0.5522\n5\t60\t70\t0.5674\t0.4761\nWhat is the NPV of Project B (in Rs.)?",
    options: ["260.28", "300", "17.27", "71"],
    answer: "17.27",
    chapter: 6,
    marks: 1,
  },
  {
    question: "What is the Profitability Index of Project A?",
    options: ["1.30", "1.08", "1", "0.91"],
    answer: "1.08",
    chapter: 6,
    marks: 1,
  },
  {
    question: "What is the Profitability Index of Project B?",
    options: ["0.86", "1.00", "1.06", "1.23"],
    answer: "1.06",
    chapter: 6,
    marks: 1,
  },
  {
    question: "What is IRR of Project A?",
    options: ["15.24%", "14.24%", "16.24%", "14.50%"],
    answer: "15.24%",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "State whether True False. Miscellaneous expenditure is written on the asset side of the Balance sheet.",
    options: ["True", "False"],
    answer: "True",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "State whether True or False. A high debt equity ratio may indicate that the financial stake of the creditors is more than that of the owners.",
    options: ["True", "False"],
    answer: "True",
    chapter: 6,
    marks: 1,
  },
  {
    question: "Which are the sources of cash for an organisation?",
    options: [
      "Savings Bank account, Current Bank account",
      "Tax not paid to Government",
      "Cash from operations, Sale of machinery, Issue of new shares",
      "all of the above",
    ],
    answer: "Cash from operations, Sale of machinery, Issue of new shares",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "Which of the following is not a valid reason for a firm to avoid creating a capital structure consisting of 100% debt?",
    options: [
      "The payments that a firm must make to service such a high debt level severely restricts the flexibility of managers to make new investments",
      "Firms may want to maintain an ‘investment grade’ level on all their debts to avoid any adverse reaction from investors in the market",
      "As a firm takes on more debt, there is an increased risk that it will not be able to pay all of its interest in a down year",
      "The debt shield is only applicable up to the level of 50% debt",
    ],
    answer:
      "The payments that a firm must make to service such a high debt level severely restricts the flexibility of managers to make new investments",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "Why did MM present their propositions in a simplified framework that did not reflect financial conditions found in the real world?",
    options: [
      "MM argued that increases in equity return balanced any impact from taxes that their propositions failed to address",
      "As professors, MM were wary of confusing their students with rigorous mathematical proofs",
      "MM did not understand the tax implications of interest payments",
      "MM wished to clarify the framework in which they presented their findings on capital structure",
    ],
    answer:
      "MM wished to clarify the framework in which they presented their findings on capital structure",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "According to MM, what happens to the residual equity when a firm increases the amount if debt it holds?",
    options: [
      "The value of the equity decreases because the residual equity has become less risky",
      "The resulting increase in the firm’s WACC decreases the risk of equity",
      "The remaining equity becomes riskier because it must support a larger portion of debt",
      "MM argue that changing the level of debt does not affect any other element of a firm’s capital structure, including equity",
    ],
    answer:
      "The remaining equity becomes riskier because it must support a larger portion of debt",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "State whether the following formula True or False. \nCapital gearing ratio = \t     Shareholders' funds____________\nDebentures+Preference share capital",
    options: ["True", "False"],
    answer: "False",
    chapter: 7,
    marks: 1,
  },
  {
    question: "What does the Pecking Order Theory state?",
    options: [
      "Pecking Order is the informal greeting to invite business visitors in the company",
      "Companies prioritize their sources of financing according to the law of the least effort",
      "There is a correct order to peck a company’s finance portfolio",
      "All of the above",
    ],
    answer:
      "Companies prioritize their sources of financing according to the law of the least effort",
    chapter: 7,
    marks: 1,
  },
  {
    question: "What is meant by Free Cashflow in relevance to Agency Costs?",
    options: [
      "Unless free cash flow is given back to investors, management has an incentive to destroy company value through empire building and perks etc. Increasing leverage imposes financial discipline on management.",
      "If debt is risky (e.g., in a growth company), the gain from the project will accrue to debt holders rather than shareholders. Thus, management has an incentive to reject positive NPV projects, even though they have the potential to increase company value",
      "As Debt-Equity Ratio increases, management can undertake risky (even negative NPV) projects as if the particular project is successful, share holders get all the upside, whereas if it is unsuccessful, debt holders get all the downside.",
      "all of the above",
    ],
    answer:
      "Unless free cash flow is given back to investors, management has an incentive to destroy company value through empire building and perks etc. Increasing leverage imposes financial discipline on management.",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "Which of the following is a reason that companies cannot hold 100% debt?",
    options: [
      "Positive views",
      "No compulsion as such",
      "Possible Bankruptcy",
      "all of the above",
    ],
    answer: "Possible Bankruptcy",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "What is meant by Asset substitution cost in relevance to Agency Costs?",
    options: [
      "Unless free cash flow is given back to investors, management has an incentive to destroy company value through empire building and perks etc. Increasing leverage imposes financial discipline on management.",
      "If debt is risky (e.g., in a growth company), the gain from the project will accrue to debt holders rather than shareholders. Thus, management has an incentive to reject positive NPV projects, even though they have the potential to increase company value",
      "As Debt-Equity Ratio increases, management can undertake risky (even negative NPV) projects as if the particular project is successful, share holders get all the upside, whereas if it is unsuccessful, debt holders get all the downside.",
      "all of the above",
    ],
    answer:
      "As Debt-Equity Ratio increases, management can undertake risky (even negative NPV) projects as if the particular project is successful, share holders get all the upside, whereas if it is unsuccessful, debt holders get all the downside.",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "Which of the Following is not a reason that companies cannot hold 100% debt?",
    options: [
      "Negative Action",
      "Additional Costs",
      "Possible Bankruptcy",
      "none of the above",
    ],
    answer: "none of the above",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "State whether True False. Project financing structure refers to the way a company finances its assets through some combination of equity, debt, or hybrid securities",
    options: ["True", "False"],
    answer: "True",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "Out of the following list, which one of the following statements, if true, would violate the theoretical assumptions of MM proposition I",
    options: [
      "A Capital market investment firm has devised a computer model that allows its members to accurately predict the future levels of interest rates",
      "In a historic agreement, all branches of the Central and State governments agree to abolish the practise of taxation in India",
      "The United Nations outlaws all tariffs and forbids countries from protecting weak industries within their borders",
      "Corporations decide to base their managers’ pay solely on the degree to which those managers’ actions raise stock prices at their firms",
    ],
    answer:
      "The United Nations outlaws all tariffs and forbids countries from protecting weak industries within their borders",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "Who among the following has proposed the Modigliani Miller Theorem",
    options: [
      "Francisca Miller",
      "Jennifer Miller",
      "Franco Modigliani",
      "Freddy Modigliani",
    ],
    answer: "Franco Modigliani",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "Ashish Gupta is having an idea for starting a new Chemical factory. He is writing a business plan for himself partners, financers, etc. Which of the following points is not relevant in his Business Plan?",
    options: [
      "Details of site location, accessibility",
      "Details of production process followed and various technical parameters",
      "Details of potential bulk purchasers and market segmentation",
      "Elaborate details of past educational qualifications of the promoter",
    ],
    answer:
      "Elaborate details of past educational qualifications of the promoter",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "Jayesh Dalal is having an idea for starting a new software development start-up catering to advanced movie animation business. He is writing a business plan for himself partners, financers, etc. Which of the following points is relevant in his Business Plan?",
    options: [
      "Details of office location, accessibility",
      "Details of government approval process",
      "Details of research and past success of alternative/similar products",
      "Details of private equity funding, cashflow statements",
    ],
    answer: "Details of private equity funding, cashflow statements",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "When an investor will be presented a business plan. He will look at some aspects of the plan in great detail. Which of the following points might he not look into in great detail?",
    options: [
      "Estimated return on investment",
      "Exit strategy for investors",
      "Milestones or conditions that company will accept",
      "Collateral offered, and a list of all existing liens against collateral",
    ],
    answer:
      "Collateral offered, and a list of all existing liens against collateral",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "Nimish Zaveri is having an idea for starting a new plant to manufacture plastic bottles. He is writing a business plan for himself partners, bankers, etc. Which of the following points is irrelevant in his Business Plan?",
    options: [
      "Details of site location",
      "Details and cost of availability of electric power",
      "Details of government approval process",
      "Details of market for end products, marketing team and potential",
    ],
    answer: "Details of government approval process",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "Bhavesh Anandpara is setting up a manufacturing company. When an investor will be presented a business plan, which among the following is irrelevant for a manufacturing company?",
    options: [
      "Planned production levels",
      "Anticipated levels of direct production costs and indirect (overhead) costs",
      "How the company protects intellectual property?",
      "Production/capacity limits of planned physical plant",
    ],
    answer: "How the company protects intellectual property?",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "Which of the following is not one of the documents required alongwith your project loan application?",
    options: [
      "Title documents of the land and building",
      "Identification proof of the borrowers & guara",
      "School Passing Certificate",
      "Duly filled application form",
    ],
    answer: "School Passing Certificate",
    chapter: 8,
    marks: 1,
  },
  {
    question: "Which of the following is not importance of a Business Plan?",
    options: [
      "To Hire new people",
      "To develop new alliances",
      "Sets specific objectives for managers",
      "Share with your friends and community",
    ],
    answer: "Share with your friends and community",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "Aakash is having an idea for starting a new restaurant. He is writing a business plan for himself partners, financers, etc. Which of the following points is not relevant in his Business Plan?",
    options: [
      "Details of location, accessibility",
      "Details of target customers",
      "Details of government approval process",
      "Details of funding and profitability",
    ],
    answer: "Details of government approval process",
    chapter: 8,
    marks: 1,
  },
  {
    question: "Debt is least costly source of long-term financing because:",
    options: [
      "equity financers are very greedy and want more return",
      "in case of default, the lender can seize the financed ass",
      "interest on debt is tax-deductible",
      "it is a universal trend since long time",
    ],
    answer: "interest on debt is tax-deductible",
    chapter: 9,
    marks: 1,
  },
  {
    question: "Which of these is not an advantage of Term Loan?",
    options: [
      "Only large scale, creditworthy firm, whose assets are good for collateral can raise capital from long-term debt.",
      "Accounting entries for term loan transactions are clear and easy",
      "The company can enjoy tax saving on interest on debt",
      "Debt financing provides sufficient flexibility in the financial/capital structure of the company",
    ],
    answer:
      "Only large scale, creditworthy firm, whose assets are good for collateral can raise capital from long-term debt.",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "Select the best answer. With reference to Term Loans, what is usually done in the ‘Monitoring’ stage?",
    options: [
      "Periodic site visits",
      "Regular reports, furnished by the company, which provide information about placement of orders, construction of buildings, procurement of plant, installation of plant and machinery trial production, etc,",
      "Audited accounts of the company",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "Anand Jewellery Manufacturing Company needs Rs. 5,00,000/- Term Loan  for manufacturing exquisite diamond jewellery. Three loans are available to it for 5 years of financing required. \nSurat bank requires annual instalments of Rs. 1,25,000/- each\nKapol bank requires annual instalments of 150000, 150000, 120000, 100000, 100000\nBaroda bank requires annual instalments of 75,000 for first four years and 3,25,000 for the last year. The Company’s after tax cost of capital is 6% and its tax bracket is 50%. Which loan is most advantageous cost-wise to the company?",
    options: ["Surat bank", "Kapol bank", "Baroda bank"],
    answer: "Surat bank",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "With reference to Term Loans, what is meant by ‘Execution of Loan Agreement’?",
    options: [
      "Counter sign by the borrower on the Sanction Letter, accepting its conditions",
      "A Creation of mortgage over the immovable properties and hypothecation of the movable properties to secure these assets",
      "Signing of the properly stamped agreement enlisting various terms and conditions of the Loan by the borrower",
      "all of the above",
    ],
    answer:
      "Signing of the properly stamped agreement enlisting various terms and conditions of the Loan by the borrower",
    chapter: 9,
    marks: 1,
  },
  {
    question: "What is meant by DSCR? What does it suggest?",
    options: [
      "Debt Service Coverage Ratio. It checks the leverage of the financial institution",
      "Debt Service Coverage Ratio. It checks the net working capital level of the project",
      "Debt Service Coverage Ratio. It checks the repayment potential of the project",
      "answers a) and b)  above",
    ],
    answer:
      "Debt Service Coverage Ratio. It checks the repayment potential of the project",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "Tulsi Shah wants to take a Term Loan from a bank for starting her Media company. Which of the following is considered before she decides to avail a Term Loan?",
    options: [
      "Idea Generation",
      "Letter of Credit",
      "Interest and Principal Repayment",
      "all of the above",
    ],
    answer: "Interest and Principal Repayment",
    chapter: 9,
    marks: 1,
  },
  {
    question: "Ratios relating to working capital are:",
    options: [
      "Net Profit Margin, Return on Total Assets, Inventory Turnover",
      "Cash turnover ratio, Current Assets Turnover Ratio, Working Capital Turnover Ratio",
      "Turnover of finished goods, Turnover of goods-in-process, Turnover of aggregate inventory",
      "Current ratio, Interval Measure, Quick ratio",
    ],
    answer: "Current ratio, Interval Measure, Quick ratio",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "Which of the following is not a type of Working Capital facility?",
    options: ["Bank Overdraft", "Cash Credit", "Term Loan", "Bank Guarantee"],
    answer: "Term Loan",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "Which of the following is not correct with respect to Letter of Credit?",
    options: [
      "Buyer would buy a Letter of Credit and send it to the seller",
      "Letter of Credit can be revoked in case of non-performance of the opposite party and money can be remitted to the seller",
      "It is also known as non-fund based working capital financing",
      "Bank will pay the opposite party as soon as the party performs as per agreed terms",
    ],
    answer:
      "Letter of Credit can be revoked in case of non-performance of the opposite party and money can be remitted to the seller",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "State whether True False. Bill Discounting is a non-fund based working capital facility",
    options: ["True", "False"],
    answer: "False",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "Fill in the appropriate word.  ________________is the ratio of Net Current Assets to the Current Liabilities",
    options: [
      "Quick Ratio",
      "Current Ratio",
      "Interval Measure",
      "Cash turnover",
    ],
    answer: "Quick Ratio",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "Fill in the appropriate word. Dividend Yield is obtained by dividing _______________ by ______________.",
    options: [
      "Dividend yield per share by Share Price",
      "Dividend by the Net Profit after tax",
      "Dividend by the Gross Sales",
      "none of the above",
    ],
    answer: "Dividend yield per share by Share Price",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "State whether True or False. High dividend yield is indicative of investors' expectation of low dividend growth or requirement of a high return.",
    options: ["True", "False"],
    answer: "True",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "Fill in the appropriate word. Price to Earnings ratio is obtained by dividing _______________ by ______________.",
    options: [
      "Inventory Price by Gross Earnings",
      "Earnings per share by Stock Price",
      "Stock Price by Earnings per share",
      "none of the above",
    ],
    answer: "Stock Price by Earnings per share",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "State whether True or False. A high Sales to Net Working Capital ratio indicates a very inefficient use of working capital in the enterprise.",
    options: ["True", "False"],
    answer: "False",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "State whether True or False. A high inventory turnover ratio indicates an over investment in inventory in relation to sales.",
    options: ["True", "False"],
    answer: "False",
    chapter: 10,
    marks: 1,
  },
  {
    question: "What is Third-Round Funding w.r.t. Venture Capital?",
    options: [
      "The initial small amount of capital used to develop a product or prove a concept.",
      "Financing for companies that is at least breaking-even and is considering expansion",
      "Additional funds for the company to begin sales and manufacturing",
      "Funds providing working capital to a company whose product in selling but is still losing money",
    ],
    answer:
      "Financing for companies that is at least breaking-even and is considering expansion",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "Which among the following is not one of the top four private equity firms in the U.S.?",
    options: [
      "TPG Capital",
      "Kohlberg Kravis Roberts",
      "Goldman Sachs Principal Investment Area",
      "J P Morgan Capital",
    ],
    answer: "J P Morgan Capital",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "State whether True or False. Venture represents financial investment in a risky proposition made in the hope of earning a low rate of return.",
    options: ["True", "False"],
    answer: "False",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "Which among the following is not one of the leading private equity firms in India?",
    options: [
      "Blackstone group",
      "Ascent Capital",
      "TPG Capital",
      "Everstone Capital",
    ],
    answer: "TPG Capital",
    chapter: 11,
    marks: 1,
  },
  {
    question: "When should a company decide to take Private Equity?",
    options: [
      "When the promoters do not want to use their own equity",
      "When the promoters are reluctant to approach banks, NBFCs",
      "When the company is young having a great project or idea but not sufficient track record",
      "When the promoters want to establish themselves as having some exposure in Private Equity",
    ],
    answer:
      "When the company is young having a great project or idea but not sufficient track record",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "Samir Choksi wants to start a new biotechnology company. He has seen the performance of the new molecule on cancer treatment and he has got a very good report from various Clinical Trials on humans. He wants to start manufacturing it. He does not have any track record. He will require Private Equity to covert his dreams to a reality. How must he present himself and his company before the Venture Capital Fund?",
    options: [
      "He must prepare a back-up plan in case they are not keen to fund his company",
      "He must convey his vision of converting his company to public limited in 3 years",
      "He must use technical and bombastic language to dominate the Venture Capital investors",
      "He must emphasis the returns that the project is likely to generate",
    ],
    answer:
      "He must convey his vision of converting his company to public limited in 3 years",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "Which amongst the following is true with respect to Private Equity Companies in India?",
    options: [
      "It is difficult from outside to judge the performance of a Private Equity firm as they do not disclose their financial statements",
      "Private Equity is the last resort for any company",
      "Many times Private Equity Investors talk sweetly and go for hostile takeovers after they have acquired the necessary shareholding",
      "Usually Private Equity Investors ask for a management seat on Board of Directors of the company",
    ],
    answer:
      "It is difficult from outside to judge the performance of a Private Equity firm as they do not disclose their financial statements",
    chapter: 11,
    marks: 1,
  },
  {
    question: "What does Turnaround Capital typically so?",
    options: [
      "It uses a mix of debt and equity to fulfil the financial needs of the project",
      "It invests in financially-troubled companies, buys inexpensively, potentially restructured and exits with a healthy profit",
      "It invests in new companies – technology, biotechnology and green energy sectors",
      "It invests in mature companies deemed to be undervalued",
    ],
    answer:
      "It invests in financially-troubled companies, buys inexpensively, potentially restructured and exits with a healthy profit",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "Mukesh Mistry, an electronics engineer has invented a new proto-type of decorative lights. He has talked to a few lighting dealers and had got a very good report. He wants to start commercial production of this product.  He has just left his job with L&amp;T to fully concentrate on his maiden venture. He estimates the Cost of the Project to be around Rs. 30 crores (US$5 million). Which of the following avenues of funding should he try for?",
    options: [
      "Ask his friends and relatives",
      "Approach a Commercial bank",
      "Approach a Venture Capital Fund",
      "None of the above",
    ],
    answer: "Approach a Venture Capital Fund",
    chapter: 11,
    marks: 1,
  },
  {
    question: "Private Equity is defined as:",
    options: [
      "Money from the general public investing mainly in shares through the secondary market",
      "Money borrowed from bank repayable usually as per terms of Sanction",
      "Money from Private Equity firms that invest by taking shares in companies they consider attractive",
      "Money collected from crowds to fund profitable and social projects",
    ],
    answer:
      "Money from Private Equity firms that invest by taking shares in companies they consider attractive",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "State whether True of False. An informal survey shows that nearly 27% of companies that are seed-funded actually raise the required angel round.",
    options: ["True", "False"],
    answer: "True",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "For a company wanting to raise money by listing his company in Singapore. He will list his company on which exchange?",
    options: ["ASX", "Bourse", "SSE", "SGX"],
    answer: "SGX",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "A company wants to raise money by listing his company in Malaysia. He will list his company on which exchange?",
    options: ["NYSE", "Bourse", "MSE", "NSE"],
    answer: "Bourse",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "State whether True False. To list its stock on an international exchange, a company must comply with any listing requirements established by the exchange and a host of laws and regulations enforced by the government regulator (True/False)",
    options: ["True", "False"],
    answer: "True",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "Which amongst these is not a type of stock which a company can offer to the public?",
    options: ["Warrants", "Debentures", "Rights", "Loans"],
    answer: "Loans",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "State True or False. Holders of Preferred Stock can get dividends every year, these shareholders are also permitted to vote on important company resolutions. (True/False)",
    options: ["True", "False"],
    answer: "True",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "State True or False. Preferred Stock holders can force a company into bankruptcy if it misses paying principal and interest payments on time. (True/False)",
    options: ["True", "False"],
    answer: "False",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "Srenik Shah, Director of Aaryaman Capital Markets Ltd is a merchant banker for various SMEs and helps in the listing of various companies in the Indian Stock Markets. Which of the following is a Stock Exchange to list a company.",
    options: ["BSESME", "ASX", "NYSE", "LSE"],
    answer: "BSESME",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "Shweta Jain is planning to raise funds to start her own chain of dance academies throughtout the country. She meets Shripal Shah, director of Aryaman Capital Markets Ltd which helps SMEs raise capital from the Capital Markets. By which of the following methods can she raise capital?",
    options: ["ESOPs", "Rights Issue", "IPO", "ESOPs"],
    answer: "IPO",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "Fill in the blank. A smaller unit into which the overall requirement of capital of a company is sub-divided is termed as _____________.",
    options: ["Term Loans", "Share", "Quasi Equity Capital", "Dividend"],
    answer: "Share",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "Girish Nulli is heading a very successful Software firm GN Software.  In the past five years, he has successfully steered his company from negligible turnover to the skies. He requires additional capital to set-up offices in various parts of the country. After studying his annual reports and other papers, his consultant’s advice him to list his company and raise money from the capital markets – local or international. Which among the following is not a benefit of a company decides to go public?",
    options: [
      "Dilution",
      "Liquidity",
      "Lower cost of capital",
      "Respectability",
    ],
    answer: "Dilution",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "State whether True False. Sweat Equity is a tool that a company by selline of additional shares to existing company shareholders only and is not meant for general public",
    options: ["True", "False"],
    answer: "False",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "State True or False. Public Listed companies enjoy more pool of capital but are bound by various regulations such as submission of quarterly shareholding patterns, quarterly and annual results and various company officials are bound by Insider trading regulations.",
    options: ["True", "False"],
    answer: "True",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "State whether True or False. According to International experts, the equity issuance to Indian companies by international investors started mainly after 2004 when the Indian economy saw a good economic growth.",
    options: ["True", "False"],
    answer: "True",
    chapter: 13,
    marks: 1,
  },
  {
    question:
      "State whether True or False. Now, Indian domestic capital market is mature to handle even “jumbo” equity offerings.",
    options: ["True", "False"],
    answer: "True",
    chapter: 13,
    marks: 1,
  },
  {
    question:
      "In 2005-06, which type of companies mainly raised capital from GDR Listings in Luxemburg?",
    options: [
      "Small deals around US$20-US$110 million issued by mid-cap firms",
      "Large deals around US$1.0 billion issued by large-cap firms",
      "Micro deals upto US$1.0 million issued by small -cap firms",
      "Ultra-Large deals issued by Government Companies",
    ],
    answer: "Small deals around US$20-US$110 million issued by mid-cap firms",
    chapter: 13,
    marks: 1,
  },
  {
    question:
      "Which of the following companies have not raised international capital in 2005-2010 period?",
    options: ["NMDC", "Reliance Ltd", "NTPC", "ONGC"],
    answer: "Reliance Ltd",
    chapter: 13,
    marks: 1,
  },
  {
    question:
      "Why did the Indian GDR issuances die in 2007 as compared to earlier years? (Number of issuances fell from 26 to 4)",
    options: [
      "That year the domestic Indian markets were at an all time hig",
      "Indian GDRs died as more investors got access to domestic market via FII licenses",
      "The American markets were very favourable that year and number of companies listed themselves on NYSE/NASDAQ",
      "None of the above",
    ],
    answer:
      "Indian GDRs died as more investors got access to domestic market via FII licenses",
    chapter: 13,
    marks: 1,
  },
  {
    question:
      "Which of the following is an attraction for Indian companies issuing GDRs?",
    options: [
      "There is no regulatory control",
      "They are issued in voting form but most international investors are generally absent during the AGMs",
      "They can be issued in non-voting form",
      "They can be issued in non-voting form",
    ],
    answer: "They can be issued in non-voting form",
    chapter: 13,
    marks: 1,
  },
  {
    question: "Which International crisis has occurred during 2008?",
    options: [
      "Agriculture Scam",
      "U.S. Real Estate",
      "Credit",
      "U.S. Credit Card Scam",
    ],
    answer: "Credit",
    chapter: 13,
    marks: 1,
  },
  {
    question: "Why are Indian Banks attracted for listing to NYSE (New York)?",
    options: [
      "There is a perception that tighter disclosure norms and greater ADR liquidity will strengthen investor confidence",
      "As the regulatory requirements are easier to fulfil viz-a-viz London and Singapore",
      "As the U.S. investors have a greater appetite towards Indian Companies",
      "All of the above",
    ],
    answer:
      "There is a perception that tighter disclosure norms and greater ADR liquidity will strengthen investor confidence",
    chapter: 13,
    marks: 1,
  },
  {
    question: "Which was the only company to be still listed on AIM?",
    options: [
      "Noida Toll Bridge",
      "Tata Steel",
      "Essar Energy",
      "Vedanta Resources",
    ],
    answer: "Noida Toll Bridge",
    chapter: 13,
    marks: 1,
  },
  {
    question: "Why did the Government launch the 25% Rule in 2010?",
    options: [
      "They wanted greater participation by Indian investors in all companies",
      "They wanted greater takeovers and arrangements as in international markets",
      "They wanted companies to raise more capital from the markets",
      "They wanted company share prices to reflect the true intrisinic value by greater public participation",
    ],
    answer:
      "They wanted greater participation by Indian investors in all companies",
    chapter: 13,
    marks: 1,
  },
  {
    question: "What is meant by Reward Crowd Funding?",
    options: [
      "Solicitation of funds for a social, artistic, philanthropic or other purpose and not in exchange of anything of tangible value",
      "Solicitation of funds wherein investors receive some existing or future tangible reward",
      "Solicitation of funds via an online platform that matches lenders with borrowers to provide unsecured loans at a decided interest rate",
      "None of the above",
    ],
    answer:
      "Solicitation of funds wherein investors receive some existing or future tangible reward",
    chapter: 14,
    marks: 1,
  },
  {
    question: "What happens in Peer-to-Peer Lending?",
    options: [
      "It is solicitation of funds for social, artistic, philanthropic or other purpose, and not in exchange for anything of tangible value",
      "Investors receive some existing or future tangible reward",
      "Lenders are matched with borrowers to provide unsecured loans",
      "Lenders take equity in borrower – normal equity or preferred or combination of both",
    ],
    answer: "Lenders are matched with borrowers to provide unsecured loans",
    chapter: 14,
    marks: 1,
  },
  {
    question: "What is Crowd Funding?",
    options: [
      "It is solicitation of funds for social, artistic, philanthropic or other purpose, and not in exchange for anything of tangible value",
      "It is loan received by Investors with fixed repayment of interest and princip",
      "It is issuance of shares of a company against money received from the investors",
      "It is solicitation of funds (small amounts) from multiple investors through a web-based platform or social networking site for a specific project, business venture or social cause",
    ],
    answer:
      "It is solicitation of funds (small amounts) from multiple investors through a web-based platform or social networking site for a specific project, business venture or social cause",
    chapter: 14,
    marks: 1,
  },
  {
    question: "Which amongst the following is not a Crowd Funding site?",
    options: ["orkut", "rockethub", "someoland", "invested.in"],
    answer: "orkut",
    chapter: 14,
    marks: 1,
  },
  {
    question:
      "Bimal Dalal has started a new firm www.charteredaccountantsonline.com to help clients with their Returns Filings. To manage inquiries from new customers and for giving proper services to existing clients, they have set-up a new call centre at the City Centre. They know that the modern Project carries number of risks. Which one from the following is not a common project risk?",
    options: [
      "Customer review and feedback cycle too slow.",
      "Abrupt and frequent changes in the project team members",
      "Time and cost estimates too optimistic.",
      "Lack of resource commitment.",
    ],
    answer: "Abrupt and frequent changes in the project team members",
    chapter: 15,
    marks: 1,
  },
  {
    question:
      "Bhoumik, a freelancer is given an independent assignment by GE Power Engines to carry out a Project Risk Management study for their new Airplane Engines Facility in California. Which one from the following is not one of the process groups in Project Risk Management?",
    options: [
      "Monitoring and Controlling risks",
      "Planning risk responses",
      "Interviewing various stakeholders",
      "Risk Identification",
    ],
    answer: "Interviewing various stakeholders",
    chapter: 15,
    marks: 1,
  },
  {
    question:
      "Suman Basu is setting up a new Training facility in Mumbai to train students on Mixed Martial Art techniques.  While going alongwith the Appraisal, she has asked her deputy to prepare a list of the common reasons why some project fail? He prepares a list and shows to her. Which of the following is/are some common reason/s for failure of a project?",
    options: [
      "Undefined objectives and goals",
      "Poorly managed",
      "Stakeholder conflict",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 15,
    marks: 1,
  },
  {
    question:
      "Ekta Jhaveri wants to start her new academy for training singing aspirants. Her advisor, Jyot Jhaveri as part of being cautious is preparing a list on some common reasons for failure of projects?",
    options: [
      "Undefined objectives and goals",
      "Poorly managed",
      "Lack of management commitment",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 15,
    marks: 1,
  },
  {
    question:
      "Ritu Nemani, an MBA wants to set-up a modern web-portal where traders and retail investors can bid, buy and sell all kinds of liquid assets. Her friend and advisor, anticipating trouble in the new venture are preparing a list of various problems which could shake up their plans. Which amongst these is not a common reasons for failure of projects?",
    options: [
      "Perfectly defined objectives and goals",
      "Team Weaknesses",
      "Unrealistic timeframes and tasks",
      "Scope creep",
    ],
    answer: "Perfectly defined objectives and goals",
    chapter: 15,
    marks: 1,
  },
  {
    question:
      "State whether True or False.  Conflict between stakeholders is not a reason for failure of a Project.",
    options: ["True", "False"],
    answer: "False",
    chapter: 15,
    marks: 1,
  },
  {
    question: "Which among the following is/are benefit/s of a WBS?",
    options: [
      "Makes sure no important deliverables are forgotten.",
      "Provides a proven and repeatable approach to planning projects.",
      "Helps project managers with resource allocation.",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 15,
    marks: 1,
  },
  {
    question:
      "State whether True or False. The best way to project success is that rather than planning on the project, one should simply get on with the work.",
    options: ["True", "False"],
    answer: "False",
    chapter: 15,
    marks: 1,
  },
  {
    question:
      "Which among the following is not a component of the Quality Management Plan?",
    options: [
      "Quality objectives",
      "Key project deliverables and processes to be reviewed for satisfactory quality level",
      "Quality standards",
      "Quantity Tools",
    ],
    answer: "Quantity Tools",
    chapter: 16,
    marks: 1,
  },
  {
    question: "How does a Quality Management Plan help a Project Manager?",
    options: [
      "He can improve the various forecasts",
      "He can ascertain whether deliverables are of an acceptable quality level and also if the project processes are effective and properly applied.",
      "He can show this around to the various Directors and can help him if something goes wrong",
      "All of the above\t\tAll of the above\t\tAll of the above\t\t\t\t\t\t\t\t\t\t [0]All of the above\t\t\t\t\tall the above\t\t\t\t\t\t\t\t\t\t\t [0]\t\t\t\t\t\t\t\t [0]",
    ],
    answer:
      "He can ascertain whether deliverables are of an acceptable quality level and also if the project processes are effective and properly applied.",
    chapter: 16,
    marks: 1,
  },
  {
    question:
      "Which of the following is not one of the outcomes of a Project Audit?",
    options: [
      "It can help Identify termination opportunities",
      "It can help Improve forecasts",
      "It can help Improve operations",
      "It can help improve in-depth research",
    ],
    answer: "It can help improve in-depth research",
    chapter: 16,
    marks: 1,
  },
  {
    question:
      "Which of the following is not a part of successful Project Audit?",
    options: [
      "Quality Standards",
      "Report Development",
      "In-Depth Research",
      "Success Criteria\t\t[0]",
    ],
    answer: "Quality Standards",
    chapter: 16,
    marks: 1,
  },
  {
    question:
      "In a Project Audit Interview, which types of questions are most effective?",
    options: [
      "Yes-No type",
      "Open-ended questions with detailed description",
      "Multiple Choice Questions",
      "Questions on a graphical user interface",
    ],
    answer: "Open-ended questions with detailed description",
    chapter: 16,
    marks: 1,
  },
  {
    question:
      "State whether True or False. A good Project Audit Report will simply tell us how we can improve current project. It cannot improve future projects within the organisation.",
    options: ["True", "False"],
    answer: "False",
    chapter: 16,
    marks: 1,
  },
  {
    question:
      "State whether True or False. A good Project Audit Report will continue the improvement of relationships between the organisation and its vendors.",
    options: ["True", "False"],
    answer: "True",
    chapter: 16,
    marks: 1,
  },
];
