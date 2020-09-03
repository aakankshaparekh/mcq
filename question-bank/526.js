var chapters = [
  //   { chapter: 1, title: "Feature Of Financial Management" },
  //   { chapter: 2, title: "Relevance And Significance Of Financial Management" },
  //   { chapter: 3, title: "Goals And Objectives" },
  //   { chapter: 4, title: "Reporting Financial Results" },
  //   { chapter: 5, title: "Financial Analysis For Management Decisions" },
  //   { chapter: 6, title: "Management Of Working Capital" },
  { chapter: 7, title: "Management Of Trade Receivables" },
  { chapter: 8, title: "Management Of Inventory" },
  { chapter: 9, title: "Financial And Operating Leverage" },
  { chapter: 10, title: "Common And Preferred Stocks" },
  { chapter: 11, title: "Debentures" },
  { chapter: 12, title: "Capital Structure Equity vs Debt" },
  { chapter: 13, title: "Devidend Policy And Decisions" },
];

var allQuestionAnswers = [
  {
    question:
      "In trade receivables management the finance manager has to implement several preventive and curative measures. One of the important preventive measure is",
    options: [
      "Setting appropriate trade credit terms",
      "Ageing receivables",
      "Both above",
      "Receivables’ ABC analysis",
    ],
    answer: "Setting appropriate trade credit terms",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "In trade receivables management the finance manager has to implement several preventive and curative measures. One of the important curative measure is",
    options: [
      "Setting appropriate trade credit terms",
      "Ageing receivables",
      "Both above",
      "Customer credit index",
    ],
    answer: "Ageing receivables",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "Five C’s are considered by the CFO at the time of detrmining credit terms to be granted to any customer. Agatha could recount Character, Capital, Capacity and Conditions; but not the sixth one. Can you help her?",
    options: ["Corroboration", "Customer", "Collaterals", "Customization"],
    answer: "Collaterals",
    chapter: 7,
    marks: 1,
  },
  {
    question: "Cash discounts assist business operations as they result in",
    options: [
      "Reduction in collection efforts",
      "High levels of receivables",
      "Higher profit margin",
      "Each one of above",
    ],
    answer: "Reduction in collection efforts",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "On joining ATC Pharma as Receivables Manager, Shobha started calcualting collection days of branches. For the first year collection days of Mumbai were 35, Delhi 21, Chennai 15 and Kolkata 28. Which branch manager was most successful in receivables management?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    answer: "Chennai",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "On joining ATC Pharma as Receivables Manager, Shobha prepared ABC analysis of their receivables. Then she directed her collection team to focus their attention on clients in _______ category.",
    options: ["A", "B", "C", "Each"],
    answer: "A",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "On joining ATC Pharma as Receivables Manager, Shobha reviwed bad debts of branches as a % of their total credit sales. She found Mumbai % to be 10, Delhi 12.5, Chennai 9.6 and Kolkata 11. Which branch manager is likely to receive a scolding letter from her for worst bad debt management?",
    options: ["Delhi", "Chennai", "Mumbai", "Kolkata"],
    answer: "Delhi",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "The published accounting records of private local companies indicate that that number of day’s sales locked in trade receivables are on rise. This rise in receivables is due to",
    options: [
      "The recent changeover from seller’s market to competitive buyer’s market",
      "Laxity of management in its focus on trade receivables",
      "Both above",
      "None above",
    ],
    answer: "Both above",
    chapter: 7,
    marks: 1,
  },
  {
    question: "The 2/10, net 30 credit term indicates that",
    options: [
      "Customer isrequired to pay in thirty days",
      "Two per cent cash discount is available",
      "To avail of the cash discount customer needs to make payment within ten days",
      "All above",
    ],
    answer: "All above",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "In managing trade receivables it has to be borne in mind that prompt collection is the combined responsibility of all functions that contribute to customer satisfaction. Delighted customer takes all required efforts to arrange payments; that too on time. This is the basic philosophy behind formation of",
    options: [
      "Asset Management Committee",
      "Company’s Annual Credit Policy",
      "Total Receivables Management",
      "Total Cash Satisfaction",
    ],
    answer: "Asset Management Committee",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "For calculating Customer Credit Index for a customer A we need to examine A’s published accounts and select ________ ratio for the last three years",
    options: [
      "Current assets",
      "Debt / equity",
      "Net profit",
      "Each one above",
    ],
    answer: "Each one above",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "On joining ATC Pharma as Receivables Manager, Shobha examined the receivables turnover ratios of the five branches of the company. Then she sent a congratulatory letter to the manager with _________ ratio.",
    options: ["Lowest", "Constant", "Highest", "Each one of the above"],
    answer: "Highest",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "While controlling working capital you need to remember that invetory is the _______ liquid of business entity’s current assets.",
    options: ["Most", "Only", "Least", "Debt equity ratio"],
    answer: "Least",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "Ashok and Ravi did not agree in determining responsibility for inventory control. Ashok, appearing for M.Com, insisted that the CFO is responsible; while Ravi appearing for B.E. claimed it was the marketing manager’s responsibility so that customer orders are delivered on time. What is your decision in the matter? Who should manage inventory?",
    options: [
      "CFO",
      "Marketing Manager and Purchase Manager",
      "Supply chain managers",
      "Both marketing and finance managers",
    ],
    answer: "Supply chain managers",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "Asha claims that any firm’s ordering costs are fixed. Do you agree? If not what is the factor that influences them?",
    options: [
      "Order Quantity",
      "Number of orders issued",
      "None above",
      "Both i) and ii) above",
    ],
    answer: "Both i) and ii) above",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "Materials manager of Pune Electricals follows EOQ method while issuing purchase orders. Their class A vendor offers a quantity discount of five percent if orders are placed for 1,000 parts and above. The materials manager finds that the EOQ for that part is 750 parts. What will you advise the materials manager?",
    options: [
      "Do not change Economic Order Quantity",
      "Place order for 1,000 parts and enjoy trade discount",
      "Compare added cost of carrying inventory with trade discount to take a decision",
      "Either  i) or ii) above",
    ],
    answer:
      "Compare added cost of carrying inventory with trade discount to take a decision",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "Any business firm implementing ABC analysis for inventory management shall maintain nil or very minimum stocks for _________ class items.",
    options: ["A", "B", "C", "All Three"],
    answer: "A",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "__________ requires management to ensure i) Quality production that continuously meets customer requirements; ii) Close ties among vendors, manufacturer and customers and iii)  \tClose monitoring and reduction in lead times all over.",
    options: ["VED", "JIT", "HML", "ABC"],
    answer: "JIT",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "___________ departement, while on inventory management, sets an objective of maintaining high inventories so that orders booked are promptly fulfilled.",
    options: ["Marketing", "Production", "Finance", "Storekeeping"],
    answer: "Marketing",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "___________ departement, while on inventory management, sets an objective to manufacture only to customer order and minimze stocks on hand.",
    options: ["Marketing", "Production", "Finance", "Storekeeping"],
    answer: "Finance",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "Interest, rent, taxes, insurance, stores salaries, scrap all form part of a firm’s inventory carrying costs. Among them ________ constitutes highest expense as % of average inventory value in all large organizations.",
    options: ["Rent", "Salaries", "Interest", "Scrap"],
    answer: "Interest",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "The EOQ, or economic order quantity is so dtermined that ________ is minimum.",
    options: [
      "Ordering cost",
      "Inventory holding cost",
      "Both above together",
      "Number of orders to be issued in a year",
    ],
    answer: "Both above together",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "In the economy with inflationary conditions _______ method of pricing issues results in understatement of cost of sales.",
    options: ["LIFO", "Weighted Average", "Any one of above two", "FIFo"],
    answer: "FIFo",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "In the economy with inflationary conditions _______ method of pricing issues results in understatement of value of closing stock reflected in business units balance sheet.",
    options: ["LIFO", "Weighted Average", "Any one of above two", "FIFP"],
    answer: "LIFO",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "the study of several large business entities in Japan established the fact that by employing _________ leverage the firm is exposing itself by piling risk on risk.",
    options: ["Financial", "Combined", "Reverse", "Operating"],
    answer: "Combined",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "The operating leverage is about how much the business entity invests in",
    options: [
      "Equity capital",
      "Inventory",
      "Fixed assets",
      "Marketing efforts",
    ],
    answer: "Fixed assets",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "The financial leverage is about how the business entity’s operations are finaced",
    options: [
      "With bank loan",
      "With public deposits",
      "With debentures",
      "With equity or debt",
    ],
    answer: "With debentures",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "Ashok, Arun and Arundhati completed their MBA and instead of a career with an MNC decided to start their own business. Ashok’s investment in Plant and Machinery was ` 12.5 crores, Arun’s ` 7.5 and Arundhati’s ` 2.5. Who has employed the operating leverage most?",
    options: [
      "Ashok",
      "Arun",
      "Arundhati",
      "None. They have employed financial leverage.",
    ],
    answer: "Ashok",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "Break even analysis is valid over a limited range of sales volumes.Beyond that it tends to get invalid due to the ___________ function of cost and revenue.",
    options: [
      "Congruence of",
      "Diversion in",
      "Fallacy in linear",
      "None above.",
    ],
    answer: "Fallacy in linear",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "Firms with _________ financial leverage always have to keep their institutes that provide financial assistance in a secure position.",
    options: ["High", "Modest", "Low", "Zero"],
    answer: "High",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "Aditya was repeating that both operating and financial leverages are like a two edged sword. When Ameya questioned him why a two edged sword, his response was they",
    options: [
      "Provide liquidity but at extra-ordinary costs",
      "Assist buildup of sales volumes but at poor margins",
      "Provide above average earnings but can put equity owners into bankruptcy.",
      "There are better earnings but they do not last long",
    ],
    answer:
      "Provide above average earnings but can put equity owners into bankruptcy.",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "The analysis that is carried by business units to determine how does the volume of operations affects its costs and therefore profits is termed",
    options: [
      "Breakeven analysis",
      "Degree of operating leverage",
      "Liquidity ratio",
      "Fund flow analysis",
    ],
    answer: "Breakeven analysis",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "___________ leverage represents the relationship between the company’s earnings before interest and taxes (EBIT) or operating profit and the earning available to equity shareholders. At first Sharad knew how to fill the gap but now he is confused. Tell him which from the following he should pick to fill the gap.",
    options: ["Operating", "Combined", "Financial", "Total"],
    answer: "Financial",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "Four CFOs of  Godavari Sugars, Irawati Sugars, Narmada Sugars and Yamuna Sugars, all four firms enjoying more or less same sales volumes; were at a club in Mumbai. Each claimed that his firm employed a high financial leverage. EPS of these firms is ` 3.50, ` 2.50 ` 1.50 ` 0.50 respectively. Which of these firms is most likely to have the highest financial leverage",
    options: [
      "Yamuna Sugars",
      "Narmada Sugars",
      "Irawati Sugars",
      "Godavari Sugars",
    ],
    answer: "Godavari Sugars",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "Henry had accumulated enough savings to purchase 100 shares of a leading automobile company and he asked his share broker to buy them on January 20th. How will this transaction affect company’s equity share capital as of Jan 31st ?",
    options: [
      "Equity capital will increase",
      "Equity capital will decrease",
      "Preference capital will decrease",
      "The transaction will have no effect",
    ],
    answer: "The transaction will have no effect",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "Unlike in the case of sole proprietor or partnerships, equity holders liability is limited to the amount",
    options: [
      "They paid for the shares",
      "Determined by the market of the share",
      "Equal to face value of the share",
      "Average of the two above",
    ],
    answer: "They paid for the shares",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "When you divide the sum of company’s paid up capital and free reserves and surplus by the number of outstanding shares, you arrive at _______ value of the equity.",
    options: ["Par", "Book", "Market", "issue"],
    answer: "Book",
    chapter: 10,
    marks: 1,
  },
  {
    question: "Each equity shreholder of a company has the unique right to",
    options: [
      "Company’s income",
      "Vote at the AGM",
      "Acquire new shares as and when issued",
      "Each one of the above",
    ],
    answer: "Each one of the above",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "As a matter of fact after bonus issue and stock split, number of shares owned by a shareholder increases. But in case of _______ face value of the share remains the same.",
    options: ["Stock split", "Bonus issue", "None of the above"],
    answer: "Bonus issue",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "If you measure risk /return parameters of common stock, preference stock and debt instruments you will observe that common stock has",
    options: [
      "Lowest risk and fixed return",
      "Moderate risk and fixed return",
      "Highest risk and hence highest return",
      "Identical risk profile as debt instruments",
    ],
    answer: "Highest risk and hence highest return",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "Geeta was little uncertain as to which group among the follwing three has the first claim on company’s assets in case of company getting bankrupt. Can you guide her?",
    options: [
      "Common stock holders",
      "Debt providers",
      "Preference stock holders",
      "Each one of above three",
    ],
    answer: "Debt providers",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "Bharat Ceramics Ltd. announced a rights issue at 1:1 basis. Anil owned 1,000 equity shares in this company and wanted to participate in this rights issue. How many shares can he apply for?",
    options: ["1000", "500", "250", "Any one of above"],
    answer: "Any one of above",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "Ashok Industries Ltd. started business operations a decade ago. It has completed all its expansion plans and has built up significant financial reserves. The management feels it should reward stockholders. What would you recommend? Arrange\t____ issue?",
    options: ["Rights", "Preference", "Bonus", "Debenture"],
    answer: "Bonus",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "Charusheela was reading a balance sheet of Sunrise Power Ltd. Under capital she could read a) ` 10 crores, b) ` 5 crores, c) ` 4.5 crores and d) ` 4.25 crores. Because of an ink blot she could not read other details on that page. Can you correctly guess for her to which capital type the amounts belonged?",
    options: [
      "a) issued, b) subscribed, c) authorized  d) paid up",
      "a) authorized, b) issued, c) subscribed  d) paid up",
      "a) issued, b) authorized, c) subscribed  d) paid up",
      "a) issued, b) paid up, c) authorized  d) subscribed",
    ],
    answer: "a) authorized, b) issued, c) subscribed  d) paid up",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "Which of the following long term finance instrument has maximum risk?",
    options: [
      "Common stock",
      "Preference stock",
      "Debenture",
      "Each one above",
    ],
    answer: "Common stock",
    chapter: 10,
    marks: 1,
  },
  {
    question: "Common stock is treated as a costly long term finance option as",
    options: [
      "Rate of dividends are high",
      "Dividends have to be declared each year",
      "Dividend on common stock  can be paid after dividend is paid on preference stock",
      "Dividend has to be paid from after tax earnings",
    ],
    answer: "Dividend has to be paid from after tax earnings",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "Debentures are considered as very safe debt instrument by most investors in view of the fact that they",
    options: [
      "Fetch fixed income",
      "Are backed by assets of the company",
      "Enjoy variable maturity",
      "Are available in smaller denominations",
    ],
    answer: "Are backed by assets of the company",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "Convertibility clause in the indenture of debenture provide flexibility to the issuing company as it can now",
    options: [
      "Pay interest when profits are earned",
      "Retire them prior to maturity",
      "Issue common stock and liquidate them",
      "Reduce interest rates when profits are down",
    ],
    answer: "Issue common stock and liquidate them",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "A legal document that records the the obligations of the debenture issuer and benefits owed to debenture holder is known as debenture",
    options: ["Contract", "Issue document", "Bond", "Indenture"],
    answer: "Indenture",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "Debentures are often classified as cumulative and noncumulative based on their characteristic that covers",
    options: [
      "Interest rate",
      "Interest frequency",
      "Redemption period",
      "Redemption amount",
    ],
    answer: "Interest rate",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "The main benefit that accrues to a company which  issues a bonus debenture to shareholders is",
    options: [
      "There is no redemption involved",
      "Redemption can be delayed",
      "Interest is to paid from after tax income",
      "Interest has to be paid for a limited period",
    ],
    answer: "Interest has to be paid for a limited period",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "Ashok, a retired professor, was interested in investing in debentures that would provide him with regular interest at higher rates to meet his expenses. Which from the following options you should recommend to Ashok?",
    options: [
      "Zero coupon debenture",
      "Cumulative debenture",
      "Non-cumulative secured debenture",
      "Non-cumulative unsecured debenture",
    ],
    answer: "Non-cumulative unsecured debenture",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "_________ provision that allows the company to retire the debenture before its date of maturity. If this provision is included in the indenture of the debenture, the company usually offers a premium over par value of five to ten percent.",
    options: ["Call option", "Put option", "Pull option", "Zero coupon"],
    answer: "Call option",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "To make debentures more attractive to regular investors it is common for companies to add feature of _______ into the indenture at the time of issue.",
    options: ["Call option", "Put option", "Pull option", "Zero coupon"],
    answer: "Pull option",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "Maximum advantage companies derive from issue of debentures as a long term source of finance is that",
    options: [
      "The instrument has long maturity period",
      "Interest along with redemption is a contractual obligation",
      "Interest is a tax deductible expense",
      "Cumulative as well as non-cumulative options are available",
    ],
    answer: "Interest is a tax deductible expense",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "_________ issue has a unique characteristic. It does not result in dilution of control.",
    options: ["Rights", "Bonus share", "Fraction", "Bonus debenture"],
    answer: "Bonus debenture",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "Modigliani and Miller theorized that whether th new projects of a company are financed through debt or equity makes no difference if",
    options: [
      "There are no taxes",
      "All can borrow at the same interest rates",
      "Perfect information is available",
      "All three together",
    ],
    answer: "All three together",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "Meena, a MBA student argued that the cost for the debt to the user and yield to the financial lender is the same. She was challenged by Leena who insisted that in this case cost is less than the yield. Who you think is on the right track?",
    options: ["Meena", "Leena", "Both", "No one"],
    answer: "Leena",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "Weighted average cost of capital for any company is bound to increase with the rise in",
    options: ["Interest rate", "Dividends", "Both", "None above"],
    answer: "Both",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "The cost of preferred stock is similar to the cost of debt as earnings per year are constsnt. But dissimilar",
    options: [
      "Because of absence of maturity date for repayment",
      "Income tax effect",
      "Both",
      "No one",
    ],
    answer: "Both",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "Accurate assessment of weighted average cost of capital is of great importance when the business entity needs funds for",
    options: [
      "A new long term project",
      "Repay an old debt",
      "Add to the inventory",
      "Determine credit terms with a major customer",
    ],
    answer: "A new long term project",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "Jumbo Developers Ltd. recently launched Blue Ridge project in Vadodara that provided return of 11%. This project was approved earlier by the management unanimously as debt funds were available to Jumbo at 8%. Next year their business development manager Ms. Chaaya proposed more attractive Cool Himalayas project that assured higher 13% returns. This was however not approved as their Finance Director Bhargav, stated that the cost of issuing new equity was around 14.5%. If you were Finance Director how would you have assisted for correct decision?",
    options: [
      "Confirmed Bhargav’s submission",
      "Rechecked that Bhargav had considered floatation cost",
      "Recalculated WACC considering both debt, retained earnings and equity",
      "Asked Chaaya to recheck her numbers",
    ],
    answer:
      "Recalculated WACC considering both debt, retained earnings and equity",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "Financial managers often make a simple error while determining the cost of preference capital.  Managers often",
    options: [
      "Do not consider market price of the preference share",
      "Consider after tax yield",
      "Ignore floating costs",
      "Each one of above",
    ],
    answer: "Each one of above",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "Temptation to increase debt equity ratio has to be controlled otherwise you can lead the firm to",
    options: [
      "Increase its WACC",
      "Decrease its WACC",
      "Loss of positive credit rating and perhaps bankruptcy",
      "Suboptimal capital structure",
    ],
    answer: "Loss of positive credit rating and perhaps bankruptcy",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "Four management students Asha, Alaka, Anupama and Additi wrote following statements in their weekly tests under the subject WACC. Can you identify the one that is correct?",
    options: [
      "Retained earnings are undistributed dividends but this source has its cost",
      "Dividend rate does not reflect cost of equity",
      "Present pre-tax rate of current debt is cost of debt",
      "WACC is not uniform to all projects to be undertaken by a firm",
    ],
    answer: "Present pre-tax rate of current debt is cost of debt",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "Suresh, Ramesh and Harish all agreed that while calculating cost of debt income tax rate plays a significant role to make debt an attractive source. The relevant rate per Suresh was corporate tax rate, per Ramesh it was the rate on capital gains and Harish insisted it was personal income tax rate. Who was right among the group?",
    options: ["Suresh", "Ramesh", "Harish", "All three"],
    answer: "Suresh",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "Rational expectations model of _________ states that what matters for share holders is not the quantum of dividends declared, but the difference between what they expected and what they received.",
    options: ["John F Muth", "Myron Gordon", "Merton Miller"],
    answer: "John F Muth",
    chapter: 13,
    marks: 1,
  },
  {
    question:
      "Manda and Kunda, MBA students were discussing Marginal Principle of Retained Earnings related to dividend policies of MNCs. They agreed that the principle called for determining rate of returns if net earnings are reinvested in in the business activity conducted by MNCs. But they failed to recognize how this rate of return is used in the principle. What is your advice to them? Compare this rate",
    options: [
      "With what investors earn on term deposits",
      "With what investors earn on public provident fund",
      "With what investors would earn on their next investment",
      "With the firm’s rate of return in the previous year",
    ],
    answer: "With what investors would earn on their next investment",
    chapter: 13,
    marks: 1,
  },
  {
    question:
      "Whether to distribute larger part of net earnings as dividends now or later mainly depends upon",
    options: [
      "Creditors’ terms in loan agreements",
      "Advice of the bankers to the equity issue",
      "Board of directors’ preferences",
      "Stockholders’ preferences",
    ],
    answer: "Stockholders’ preferences",
    chapter: 13,
    marks: 1,
  },
  {
    question:
      "Availability of _______________ is one of the major considerations in deciding the volume of net earnings to be distributed as dividends in a particular year.",
    options: [
      "Liquid assets",
      "Funds in the general reserve",
      "Credit manager’s approval",
      "Stock dividends",
    ],
    answer: "Liquid assets",
    chapter: 13,
    marks: 1,
  },
  {
    question:
      "If a company fails to earn net earnings / profits in a particular year, the rules published under Companies Act, 2013",
    options: [
      "Do not permit declaration of dividend in that year",
      "Permit declaration of dividends up to 50% of the previous year",
      "Permit declaration of dividends from reserves on complying with a few stipulations",
      "Permit only stock dividends as cash is not involved",
    ],
    answer:
      "Permit declaration of dividends from reserves on complying with a few stipulations",
    chapter: 13,
    marks: 1,
  },
  {
    question:
      "While determining a successful dividend policy for a business entity, you have to ensure that",
    options: [
      "Dividend payout ratio is consistent",
      "Dividend amount must vary with business fluctuations",
      "What matters is profit and not shareholder preference",
      "Each one of above",
    ],
    answer: "Dividend payout ratio is consistent",
    chapter: 13,
    marks: 1,
  },
  {
    question:
      "Marginal principle of retained earnings calls for comparison of rate of returns on a new project in the organization with",
    options: [
      "The one which equity holders can achieve",
      "The rate achieved in the previous investment",
      "Prevailing market rate of return",
      "All industry rate of return",
    ],
    answer: "The one which equity holders can achieve",
    chapter: 13,
    marks: 1,
  },
  {
    question:
      "Marginal principle of retained earnings does not satisfy stock holders",
    options: [
      "With large share holdings",
      "With small share holdings",
      "Wanting immediate/regular return on their investment",
      "Wanting long term returns",
    ],
    answer: "Wanting immediate/regular return on their investment",
    chapter: 13,
    marks: 1,
  },
  {
    question:
      "Business unit’s net retained earnings are not always available for declaring dividends as they are often employed in",
    options: [
      "Plant and machinery",
      "Buildings",
      "Financing trade losses",
      "Inventory and receivables",
    ],
    answer: "Inventory and receivables",
    chapter: 13,
    marks: 1,
  },
  {
    question:
      "Two economists Miller and Modigliani have propogated that market value of a business entity depends on its",
    options: [
      "Capital structure",
      "Earning capacity",
      "Dividend amount distributed to shareholders",
      "Inventory and receivables",
    ],
    answer: "Earning capacity",
    chapter: 13,
    marks: 1,
  },
];
