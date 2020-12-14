var chapters = [
  { chapter: 1, title: "Mergers" },
  { chapter: 2, title: "Acquisitions" },
  { chapter: 3, title: "Distinction between Mergers and Acquisitions" },
  { chapter: 4, title: "Takeover" },
  { chapter: 5, title: "Reverse Mergers" },
  { chapter: 6, title: "Basis for Mergers and Acquisitions" },
  { chapter: 7, title: "Motives behind Mergers and Acquisitions" },
  { chapter: 8, title: "Reasons for Failure of Mergers and Acquisitions" },
  { chapter: 9, title: "Value Drivers in Mergers and Acquisitions" },
  { chapter: 10, title: "Mergers and Acquisition Process" },
  // { chapter: 11, title: "Due Diligence" },
  // { chapter: 12, title: "Legal Issues in Mergers and Acquisitions" },
  // { chapter: 13, title: "Valuation and Accounting Issues" },
  // { chapter: 14, title: "Financing Mergers and Acquisitions" },
  // { chapter: 15, title: "Post Merger Issues" },
  // { chapter: 16, title: "Alternatives" },
  // { chapter: 17, title: "Other Types of Joining Together" },
];

var allQuestionAnswers = [
  {
    question:
      "The combining of two or more companies, generally by offering the stockholders of one company securities in the acquiring company in exchange for the surrender of their stock” is called merger",
    options: ["True", "False"],
    answer: "True",
    chapter: 1,
    marks: 1,
  },
  {
    question:
      "A combination of two or more businesses into one business is merger. What are the consequences of merger?",
    options: [
      "One company survives and the other loses its identity",
      "The surviving firm takes on the assets and liabilities of the selling firm",
      "The surviving company either retains its identity or rechristened",
      "All of above *",
    ],
    answer: "All of above *",
    chapter: 1,
    marks: 1,
  },
  {
    question:
      "In which type of merger, the company is involved in providing funds to every part of operations and in exercising control? They assume financial responsibility and control and also play a major role in all operating decision.",
    options: [
      "Financial conglomerates",
      "Managerial conglomerates",
      "Concentric companies",
      "Conglomerate Merger",
    ],
    answer: "Financial conglomerates",
    chapter: 1,
    marks: 1,
  },
  {
    question: "When a Accretive Merger emerges?",
    options: [
      "When the earning per share of the acquiring company falls after the merger",
      "When the earning per share of the acquiring company rises after the merger",
      "When a company with a high price to earnings ratio purchases a company with low price to earnings ratio",
      "When a company with a low price to earnings ratio purchases a company with high price to earnings ratio",
    ],
    answer:
      "When a company with a high price to earnings ratio purchases a company with low price to earnings ratio",
    chapter: 1,
    marks: 1,
  },
  {
    question:
      "What happens to the company after entering in a Dilutive Merger?",
    options: [
      "The earnings per share of the acquiring company falls after the merger *",
      "The earnings per share of the acquiring company rises after the merger",
      "A company with a high price to earnings ratio purchases a company with low price to earnings ratio",
      "A company with a low price to earnings ratio purchases a company with high price to earnings ratio",
    ],
    answer:
      "The earnings per share of the acquiring company falls after the merger *",
    chapter: 1,
    marks: 1,
  },
  {
    question:
      "The consideration for to those equity shareholders of the transferor company who agree to become equity shareholders of the transferee company wholly by the issue of equity shares in the transferee company. What consideration paid to the shareholders having fractional shares?",
    options: [
      "Preference Shares",
      "Debentures",
      "Cash payment",
      "No consideration at all",
    ],
    answer: "Cash payment",
    chapter: 1,
    marks: 1,
  },
  {
    question: "Which are the forms of mergers?",
    options: [
      "Mergers through absorption",
      "Mergers through consolidatio",
      "Either “A” or “B”",
      "None of above",
    ],
    answer: "Either “A” or “B”",
    chapter: 1,
    marks: 1,
  },
  {
    question:
      "When merger takes place in form of “merger by consolidation”, what will be the consequences?",
    options: [
      "Only one company survives after merger",
      "All the companies are legally dissolved and a new company is formed",
      "Separate identity maintain for all the companies",
      "One company is dissolve and two or more new companies are formed",
    ],
    answer:
      "All the companies are legally dissolved and a new company is formed",
    chapter: 1,
    marks: 1,
  },
  {
    question:
      "Mergers can be classified in different types like horizontal, vertical, co-generic etc. What is the Horizontal Merger?",
    options: [
      "Where a firm or company combines with a supplier or distributor",
      "It is a corporation that is made up of different, seemingly unrelated businesses",
      "It is merging of two companies that are in direct competition with one another",
      "None of above",
    ],
    answer:
      "It is merging of two companies that are in direct competition with one another",
    chapter: 1,
    marks: 1,
  },
  {
    question:
      "The merger is based on the submission that the merger will result in synergy and permit cost efficiency. What are the other benefits of merger?",
    options: [
      "Reduction in Staff & Administrative Cost",
      "Economies of Scale",
      "Ability to become strong player in market",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 1,
    marks: 1,
  },
  {
    question:
      "Large horizontal merger would give the new company an unfair market advantage over its competitors. Large horizontal mergers result in the creation of monopolies and are therefore, anti-competitive.\n\nLarge horizontal merger would give the new company an unfair market advantage over its competitors",
    options: ["True", "False"],
    answer: "True",
    chapter: 1,
    marks: 1,
  },
  {
    question:
      "In which type of merger, the firm or company combines with a supplier or distributor?",
    options: [
      "Horizontal Mergers",
      "Vertical Mergers",
      "Co-generic Mergers",
      "Conglomerate Mergers",
    ],
    answer: "Vertical Mergers",
    chapter: 1,
    marks: 1,
  },
  {
    question:
      "In vertical merger, two or more companies in the same industry but in different fields combine together in business. From the following, which is the example of Vertical Merger?",
    options: [
      "A Bank merges with another Bank",
      "Car manifesting company buys a tyre making company",
      "A shoe company merges with another shoe company",
      "A pharma company merges with food processing company",
    ],
    answer: "Car manifesting company buys a tyre making company",
    chapter: 1,
    marks: 1,
  },
  {
    question:
      "Vertical mergers happened in variety of forms and Market Extension merger is one of that.  What do we mean by “Market Extension Mergers”?",
    options: [
      "Merger between two companies that sell different, but somewhat related products, in a common market.",
      "Merger between two companies that sell the same products in different market",
      "In this merger, the target company is involved in the next stage of production",
      "In this merger, the target company is involved in the previous stage of production",
    ],
    answer:
      "Merger between two companies that sell the same products in different market",
    chapter: 1,
    marks: 1,
  },
  {
    question:
      "Vertical mergers happened in variety of forms and Product Extension merger is one of that.  What do we mean by “Product Extension Mergers”?",
    options: [
      "Merger between two companies that sell different, but somewhat related products, in a common market",
      "Merger between two companies that sell the same products in different market",
      "In this merger, the target company is involved in the next stage of production",
      "In this merger, the target company is involved in the previous stage of production",
    ],
    answer:
      "Merger between two companies that sell different, but somewhat related products, in a common market",
    chapter: 1,
    marks: 1,
  },
  {
    question:
      "Vertical mergers may create monopolies. What are some of the threats / draw-backs of vertical mergers?",
    options: [
      "No opportunity for competition",
      "Price Rise due to monopoly",
      "Reduce the quality of product",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 1,
    marks: 1,
  },
  {
    question: "How can we define Conglomerate Merger?",
    options: [
      "Where a form or company combines with a supplier or distributor",
      "It is a corporation that is made up of different, seemingly unrelated businesses",
      "It is merging of two companies that are in direct competition with one another",
      "Where One company owns a controlling stake in a number of smaller companies which conduct business separately",
      "Both B & D",
    ],
    answer: "Both B & D",
    chapter: 1,
    marks: 1,
  },
  {
    question:
      "In which type of merger, the two companies merged that has no related products or markets and in fact, they have no common business ties.",
    options: [
      "Vertical merger",
      "Horizontal merger",
      "Co-generic merger",
      "Conglomerate merger",
    ],
    answer: "Conglomerate merger",
    chapter: 1,
    marks: 1,
  },
  {
    question: "When does Acquisition take place?",
    options: [
      "When a company buy the target company’s ownership stakes to assume control",
      "When a company sell the target company’s ownership stakes to assume control",
      "When a company merges its shares with the target company’s shares",
      "When two companies are having the same management",
    ],
    answer:
      "When a company buy the target company’s ownership stakes to assume control",
    chapter: 2,
    marks: 1,
  },
  {
    question:
      "Acquisition refers to the process of acquiring a company at a price called acquisition price. In which terms the price / consideration have been paid for acquisition?",
    options: [
      "In Cash",
      "By issuing shares of acquiring company",
      "Both – by cash and by shares",
      "Any of the above consideration *",
    ],
    answer: "Any of the above consideration *",
    chapter: 2,
    marks: 1,
  },
  {
    question:
      "What is the meaning of acquisition premium / acquisition discount?",
    options: [
      "The shares distributed to purchase the company",
      "The cash paid to purchase the company",
      "It is the difference between the actual cost / actual price paid for acquiring an entity and the estimate made of its value before its acquisitions",
      "None of above",
    ],
    answer:
      "It is the difference between the actual cost / actual price paid for acquiring an entity and the estimate made of its value before its acquisitions",
    chapter: 2,
    marks: 1,
  },
  {
    question:
      "What are the prime reasons for which the acquisitions normally take place?",
    options: [
      "Economies of scale",
      "Efficiencies",
      "Enhanced market visibility",
      "All of above",
    ],
    answer: "All of above",
    chapter: 2,
    marks: 1,
  },
  {
    question:
      "All the acquisitions have one common goal – they are all meant to create synergy that makes the value of the combined companies ___________ the sum of two parts.",
    options: ["Greater than", "Less than", "Equal to", "Any of above"],
    answer: "Greater than",
    chapter: 2,
    marks: 1,
  },
  {
    question:
      "Sometimes targeted company resists attempts to be acquired or does not wish to be acquired. In such cases the acquiring needs to purchase large amounts of shares of the target company in order to control a majority stake and then acquire it. Which type of acquisition is this?",
    options: [
      "Friendly acquisition",
      "Hostile acquisition",
      "Conglomerate Merger",
      "Finance Merger",
    ],
    answer: "Hostile acquisition",
    chapter: 2,
    marks: 1,
  },
  {
    question:
      "Acquisition is the purchase of a majority stake in another company to control the same. What are the ways in which acquisition takes place?",
    options: [
      "Asset Purchase",
      "Stock Purchase",
      "Both “A” & “B” above",
      "None of above",
    ],
    answer: "Both “A” & “B” above",
    chapter: 2,
    marks: 1,
  },
  {
    question:
      "Acquisition is the purchase of a majority stake in another company to control the same. Under Asset Purchase type of acquisition, the acquiring company buys –",
    options: [
      "Entire outstanding equity of target company",
      "Specific Identifiable Assets of target company",
      "Current Assets of target company",
      "Current Liabilities of target company",
    ],
    answer: "Specific Identifiable Assets of target company",
    chapter: 2,
    marks: 1,
  },
  {
    question:
      "Acquisition is the purchase of a majority stake in another company to control the same. Under Stock Purchase type of acquisition, the acquiring company buys –",
    options: [
      "Entire outstanding equity of target company",
      "Specific Identifiable Assets of target company",
      "Current Assets of target company",
      "Current Liabilities of target company",
    ],
    answer: "Entire outstanding equity of target company",
    chapter: 2,
    marks: 1,
  },
  {
    question:
      "Both merger and acquisitions involve one or several companies purchasing all or part of another company. The difference between a merger and acquisition is –",
    options: [
      "How it is registered with Company Law Board",
      "How it is Listed in Stock Market",
      "How it is Financed",
      "How it is declared",
    ],
    answer: "How it is Financed",
    chapter: 3,
    marks: 1,
  },
  {
    question:
      "When a business deal is unfriendly, that is, when the target company does not want to be purchased, it is always regarded as –",
    options: ["Merger", "Acquisition", "Amalgamation", "Absorption"],
    answer: "Acquisition",
    chapter: 3,
    marks: 1,
  },
  {
    question:
      "When one company takes over another and is clearly established itself as the new owner, this kind of purchase is called as –",
    options: ["Merger", "Acquisition", "Amalgamation", "Absorption"],
    answer: "Acquisition",
    chapter: 3,
    marks: 1,
  },
  {
    question:
      "________ is a process where two entities agree to move forward as a single entity as opposed to remaining separately owned and operated entities.",
    options: ["Merger", "Acquisition", "Amalgamation", "Absorption"],
    answer: "Merger",
    chapter: 3,
    marks: 1,
  },
  {
    question:
      "Merger or Acquisition is a strategic business decision. What is the general preferable way for the companies – Merger or Acquisition?",
    options: ["Merger", "Acquisition", "None of the above"],
    answer: "Merger",
    chapter: 3,
    marks: 1,
  },
  {
    question:
      "In which form of business takeover, for the purpose of diversification, one company takes over another company operating in totally different industries?",
    options: [
      "Bailout Takeover",
      "Horizontal Takeover",
      "Vertical Takeover",
      "Conglomerate Takeover",
    ],
    answer: "Conglomerate Takeover",
    chapter: 4,
    marks: 1,
  },
  {
    question: "When Reverse Takeover occurs?",
    options: [
      "When a private company acquires a public company",
      "When a public company acquires a private company",
      "When a public company acquires a partnership firm",
      "When a private company acquires a proprietary firm",
    ],
    answer: "When a private company acquires a public company",
    chapter: 4,
    marks: 1,
  },
  {
    question:
      "Managements of target company often employ several strategies to thwart takeovers. What is the strategy in “Crown Jewel Defense”?",
    options: [
      "Bank of target company refuses the takeover bids",
      "Target company sells off its most attractive assets to a friendly third party",
      "Provide flip-in rights to existing shareholders",
      "Provide employment termination benefits to senior executive",
    ],
    answer:
      "Target company sells off its most attractive assets to a friendly third party",
    chapter: 4,
    marks: 1,
  },
  {
    question:
      "In takeovers there are four types of knights – white, grey, yellow and black. Which type of knight is considered as “Friendly Investor”?",
    options: ["White Knight", "Grey Knight", "Yellow Knight", "Black Knight"],
    answer: "White Knight",
    chapter: 4,
    marks: 1,
  },
  {
    question:
      "In corporate finance, a leveraged recapitalization is a change of the capital structure of a company, like –",
    options: [
      "Substitution of Assets with Liability",
      "Substitution of Liability with Assets",
      "Substitution of Debt for Equity",
      "Substitution of Equity for Debt",
    ],
    answer: "Substitution of Equity for Debt",
    chapter: 4,
    marks: 1,
  },
  {
    question:
      "A shareholder rights plan, colloquially known as a “___________”, is a type of defensive tactic used by a corporation’s board of directors against a takeover.",
    options: [
      "Pension Parachute",
      "People Pill",
      "Poison Pill",
      "Pac-man defense",
    ],
    answer: "Poison Pill",
    chapter: 4,
    marks: 1,
  },
  {
    question: "Which are the common types of “Poison Pills”?",
    options: [
      "Preferred Stock Plan",
      "Flipover Rights Plan",
      "Ownership Flip-in Plan",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 4,
    marks: 1,
  },
  {
    question:
      "A takeover occurs when acquiring company acquire a substantial quantity of shares or voting rights of the target company. How many shares needed to be acquired to get substantial interest or voting power?",
    options: ["15 %", "25 %", "50 %", "75 %"],
    answer: "50 %",
    chapter: 4,
    marks: 1,
  },
  {
    question: "Which are the different types of Takeovers?",
    options: [
      "Legal takeovers",
      "Business takeovers",
      "Reverse and Back Flip takeovers",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 4,
    marks: 1,
  },
  {
    question: "What are the different forms of Legal Takeovers?",
    options: [
      "Enactment",
      "Friendly or Hostile",
      "Bailout",
      "All of the above *",
    ],
    answer: "All of the above *",
    chapter: 4,
    marks: 1,
  },
  {
    question: "What are the different forms of Business Takeovers?",
    options: ["Horizontal", "Vertical", "Conglomerate", "All of the above"],
    answer: "All of the above",
    chapter: 4,
    marks: 1,
  },
  {
    question:
      "In which form of Legal Takeover, the target company’s management and board of director agree to merger or acquisition by another company?",
    options: ["Enactment", "Friendly", "Hostile", "Bailout"],
    answer: "Friendly",
    chapter: 4,
    marks: 1,
  },
  {
    question:
      "In which form of legal takeover, the acquisition of one company by another is accomplished not by coming to an agreement but by going directly to the company’s shareholders or replacement of management in order to get acquisition approved?",
    options: ["Enactment", "Friendly", "Hostile", "Bailout"],
    answer: "Hostile",
    chapter: 4,
    marks: 1,
  },
  {
    question:
      "In which form of business takeover, a financially sick company takes over by a financially rich company?",
    options: [
      "Bailout Takeover",
      "Horizontal Takeover",
      "Vertical Takeover",
      "Conglomerate Takeover",
    ],
    answer: "Bailout Takeover",
    chapter: 4,
    marks: 1,
  },
  {
    question: "What is a “Reserve Takeover” or “Reserve Merger”?",
    options: [
      "Acquisition of a public company by a private company",
      "Acquisition of a private company by a public company",
      "Acquisition of private company by a partnership firm",
      "Acquisition of private company by a proprietary firm",
    ],
    answer: "Acquisition of a public company by a private company",
    chapter: 5,
    marks: 1,
  },
  {
    question: "In India, which was the first most celebrated Reverse Merger?",
    options: [
      "ICICI with ICICI Bank",
      "HDFC with HDFC Bank",
      "IDBI with IDBI Bank",
      "SIDBI with ICICI Bank",
    ],
    answer: "ICICI with ICICI Bank",
    chapter: 5,
    marks: 1,
  },
  {
    question:
      "The publically traded company is called a “________”, since all that exists of the original company is its organizational structure.",
    options: ["Merged Company", "Sick Company", "Shell", "Dwell"],
    answer: "Shell",
    chapter: 5,
    marks: 1,
  },
  {
    question:
      "Which form is to be immediately filed with Securities Exchange Commission after completion of reverse merger transaction?",
    options: ["Form 8 – A", "Form 7 – A", "Form 8 – K", "Form 7 – K"],
    answer: "Form 8 – K",
    chapter: 5,
    marks: 1,
  },
  {
    question:
      "What are the benefits of “Reverse Merger” or “Reverse Takeover”?",
    options: [
      "Lesser Cost and Lesser dilution of stock",
      "Can go public without raising additional capital",
      "Reverse takeover is less susceptible to market conditions",
      "All of the above stated benefits",
    ],
    answer: "All of the above stated benefits",
    chapter: 5,
    marks: 1,
  },
  {
    question:
      "What are the drawbacks of “Reverse Merger” or “Reverse Takeover”?",
    options: [
      "History of Shell maybe with sloppy records, pending lawsuits or any unforeseen liabilities",
      "Shareholders of Shell maybe angry or deceitful who are anxious to dump their stocks at a given chance",
      "Private company management may be naïve and inexperience to run a public company",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 5,
    marks: 1,
  },
  {
    question:
      "The greater number of financing options available to publicly held company is a primary reason to undergo a reverse takeover. Which are these financing options?",
    options: [
      "Issuance of additional stock in a secondary offering",
      "An exercise of warrants",
      "Other investors are more likely to invest",
      "All of the above financing options",
    ],
    answer: "All of the above financing options",
    chapter: 5,
    marks: 1,
  },
  {
    question: "Who developed the “GE Matrix”?",
    options: [
      "Toyota Japan",
      "Ford Motors",
      "General Electric",
      "The Oxford University",
    ],
    answer: "General Electric",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "What are the “strengths” that one looks for in a Merger or Acquisition?",
    options: [
      "Increase in Market Share",
      "Increase in profit as well as reduction in debt",
      "Opportunity to acquire end-to-end solution and competitive advantage",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "There could be weaknesses too that might occur on a merger or acquisition. What are those weaknesses?",
    options: [
      "Style of Management and Absence of Skilled Manpower",
      "Monopoly Creations",
      "Integration difficulties and Increasing Costs",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "As per Porter’s Five Forces Module, the degree and intensity of the competition in the industry determine the profit potential of the entity. The performance of an entity depends largely on external factors rather than internal.",
    options: ["True", "False"],
    answer: "True",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "Which are the different techniques with the help of that, the companies can chose for merger or acquisition and its criteria?",
    options: ["BCG Matrix", "GE Matrix", "SWOT Analysis", "All of the above"],
    answer: "All of the above",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "In 1970, Bruce Henderson of the Boston Consulting Group developed a portfolio planning model called ________ which help companies to analyze their business units or product lines.",
    options: [
      "BCG Matrix",
      "GE Matrix",
      "SWOT Analysis",
      "Porter’s Five Forces Model",
    ],
    answer: "BCG Matrix",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "Under BCG Matrix, which are the units with high market share in a slow-growing industry? They normally generated cash in excess that needed to maintain a business.",
    options: ["Stars", "Question Marks", "Cash Cows", "Dogs"],
    answer: "Cash Cows",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "Question Marks are growing rapidly and consume large amount of cash. They have low markets and do not generate much cash. What is the ultimate result of Question Marks?",
    options: [
      "Net Cash Consumption",
      "Net Cash Surplus",
      "Break-even",
      "None of the above",
    ],
    answer: "Net Cash Consumption",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "Stars are units with a high market share in a fast growing industry. The hope is that Stars become the next –",
    options: ["Diamonds", "Question Marks", "Cash Cows", "Dogs"],
    answer: "Cash Cows",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "Which can be considered as the most essential components of Mergers?",
    options: ["Integrity", "Parity", "Synergy", "Gravity"],
    answer: "Synergy",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "Synergy refers to the difference between the value of the combined firm and the value of the sum of the participants. Synergy accrues in the form of –",
    options: [
      "Revenue Enhancement and Cost Savings",
      "High liquidity and low debts",
      "High liquidity and low debts",
      "New technology",
    ],
    answer: "Revenue Enhancement and Cost Savings",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "In mergers, synergy between the participating firms determines the increase in value of the combined entity. Synergy can take form of –",
    options: [
      "Process Synergy and Technical Synergy",
      "Legal Synergy and Secretarial Synergy",
      "Operating Synergy and Finance Synergy",
      "Asset Synergy and Liability Synergy",
    ],
    answer: "Operating Synergy and Finance Synergy",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "According to International Business Owners Survey, 2004 conducted across 26 countries, how may % of mergers are mainly done to maintain or improve profitability?",
    options: ["24 %", "34 %", "44 %", "54 %"],
    answer: "34 %",
    chapter: 7,
    marks: 1,
  },
  {
    question: "What are the different motives behind mergers and acquisitions?",
    options: [
      "Improved Profitability and Tax Benefits",
      "Acquiring of New Technology and Competency",
      "Entry to New Market",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "What are the common reasons for failure of mergers and acquisitions?",
    options: [
      "Unrealistic pricing and Overstated Synergies",
      "Inadequate Due Diligence and Regulatory Issues",
      "Inconsistent Strategy and Integration Difficulties",
      "All of the above reasons",
    ],
    answer: "All of the above reasons",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "Normally under which circumstances, the acquiring company came to know that it has paid over price for takeover of the target company?",
    options: [
      "When the Assets and Liabilities of Target company revalued at current market price",
      "When it is required to write off the goodwill of target company",
      "When patented technology of target company is out of date",
      "Under all of the above circumstances",
    ],
    answer: "Under all of the above circumstances",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "Mergers and Acquisitions are looked upon as an important instrument of creating synergies through increased revenue, reduced cost, and reduction in net working capital etc. Overestimation of these can lead to failure of mergers.",
    options: ["True", "False"],
    answer: "True",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "HR issues are crucial to the success of mergers and acquisitions. A merger or acquisition is identified by the employees as –",
    options: [
      "Job Loss",
      "Restructuring of Positions",
      "Imposition of New corporate culture",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "HR issues are crucial to the success of mergers and acquisitions. What are the some of those critical HR issues?",
    options: [
      "Productivity of firm drops due to demoralization of workforce",
      "Negligence of crucial issues relating to corporate identity and communication",
      "Weaken Morale and Productivity of Employees",
      "All of the above stated HR issues",
    ],
    answer: "All of the above stated HR issues",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "What are the various “value drivers” in mergers and acquisitions?",
    options: [
      "Synergy",
      "Boosting Marginal Revenue",
      "Reducing Marginal Cost",
      "All of the above value drivers",
    ],
    answer: "All of the above value drivers",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "A merger is a game of drawing synergy. The acquiring firm attempts to increase synergy and minimize the premium. Thus the value created through merger can be equated like –",
    options: [
      "M & A = Increase in Liability – Decrease in Asset",
      "M & A = Increase in Synergy – Decrease in Premium",
      "M & A = Increase in Cash Inflow – Decrease in Cash Outflow",
      "M & A = Increase in Premium – Decrease in Synergy",
    ],
    answer: "M & A = Increase in Synergy – Decrease in Premium",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "Synergy is the result of increase in efficiency of the combined entity. The efficiency gains accrue on account of –",
    options: [
      "Improvement in operational efficiency by increasing productivity",
      "Improvement in style of management",
      "Improvement in financial structures by capital restructuring",
      "All of the above reasons",
    ],
    answer: "All of the above reasons",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "The general view is that revenue improves if total cost declines. To achieve this objective, the merged entity should reduced _________ and eliminates _________________.",
    options: [
      "Transaction Cost ; Existing Market Inefficiencies",
      "Cost of Production; Competition from Marke",
      "Cost of Production; Competition from Marke",
      "None of above",
    ],
    answer: "Transaction Cost ; Existing Market Inefficiencies",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "A merger is driven by the notion that it will result in economies of scale and bring down the marginal cost of operation. One theory says that marginal cost declines as production increases, bringing down the average cost. This results from rationalization of production and increased scale of operat",
    options: ["True", "False"],
    answer: "True",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "________ is the measure of the volatility or systematic risk of security or a portfolio in comparison to the market as a whole.",
    options: ["Alpha", "Gama", "Beta", "Delta"],
    answer: "Beta",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "Beta is the measure of the volatility or systematic risk of security or a portfolio in comparison to the market as a whole. A beta of less than 1 means that the security will be –",
    options: [
      "More volatile than Market",
      "At par with the Market",
      "Less volatile than Market",
      "None of the above",
    ],
    answer: "Less volatile than Market",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "Beta is the measure of the volatility or systematic risk of security or a portfolio in comparison to the market as a whole. A beta of more than 1 means that the security will be –",
    options: [
      "More volatile than Market",
      "At par with the Market",
      "Less volatile than Market",
      "None of the above",
    ],
    answer: "More volatile than Market",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "A company can increase its valuation by either increasing its earning or reducing risk. Risks are classified as –",
    options: [
      "Notional Risk and Actual Risk",
      "Technological Risk and Portfolio Risk",
      "Unilateral Risk and Bilateral Risk",
      "Systematic Risk and Unsystematic Risk",
    ],
    answer: "Systematic Risk and Unsystematic Risk",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "Once the merger deal is finalized, the acquirer company and the target company need consent from –",
    options: [
      "Shareholders",
      "Regulatory Authorities",
      "Third Party Consents",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "A merger involves fairly complex legal considerations. Sections ____ to ____ of the Companies Act, 1956 contains provisions for amalgamation, will apply while closing a merger deal.",
    options: ["291 to 295", "391 to 394", "272 to 277", "375 to 380"],
    answer: "391 to 394",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "The process of merger and acquisition can be broadly divided into two phases. Which are those two phases?",
    options: [
      "Searching Phase and Implementing Phase",
      "Costing Phase and Analysis Phase",
      "Review Phase and Decision Phase",
      "Planning Phase and Implementation Phase",
    ],
    answer: "Planning Phase and Implementation Phase",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "Once internal analysis is completed and the company feels that it is ready for merger, it starts preparing the acquisition plan. Which are the main elements of acquisition plan?",
    options: [
      "Key Objectives and Resource constraints",
      "Appropriate tactics for implementing the proposed transactions",
      "Schedule for completing the process of acquisition",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "What are the methods, the acquirer may use for buying a target company?",
    options: [
      "Discounted Cash Flow Method",
      "Comparable Companies’ Method",
      "Book Value and Market Value Method",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 10,
    marks: 1,
  },
  {
    question: "Which value can be considered as “Total Enterprise Value”?",
    options: [
      "Total Consideration + Market value of the target firm’s debt",
      "Total Consideration paid by acquiring company",
      "Total Assets minus Total Liabilities of target firm",
      "Net worth of target firm",
    ],
    answer: "Total Consideration + Market value of the target firm’s debt",
    chapter: 10,
    marks: 1,
  },
  {
    question: "Which value can be considered as “Total Purchaser Value”?",
    options: [
      "Total Purchase Price + other assumed liabilities",
      "Total Purchase Price + other assumed liabilities – proceeds from redundant assets",
      "Total Enterprise Value",
      "Total Enterprise Value – proceeds from redundant assets",
    ],
    answer:
      "Total Purchase Price + other assumed liabilities – proceeds from redundant assets",
    chapter: 10,
    marks: 1,
  },
];
