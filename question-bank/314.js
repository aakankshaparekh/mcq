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
  { chapter: 11, title: "Due Diligence" },
  { chapter: 12, title: "Legal Issues in Mergers and Acquisitions" },
  { chapter: 13, title: "Valuation and Accounting Issues" },
  { chapter: 14, title: "Financing Mergers and Acquisitions" },
  { chapter: 15, title: "Post Merger Issues" },
  { chapter: 16, title: "Alternatives" },
  { chapter: 17, title: "Other Types of Joining Together" },
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
  {
    question:
      "Merger and Acquisitions involve a huge investment of financial resources. No buyer would like to lose money. To evaluate the commercial viability of a deal, the buying company undertakes a process known as –",
    options: [
      "Peer Review",
      "Assurance Audit",
      "Due Diligence",
      "Due Diligence",
    ],
    answer: "Due Diligence",
    chapter: 11,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "The term due diligence is used by different people in different context. What in general the term implies?",
    options: [
      "Performance of Investigation of a business or a person OR performance of an act with certain standard care",
      "Peer Review procedure of the target firm",
      "Preparation of Feasibility Report and Project Report",
      "Conducting Assurance Audit of the company",
    ],
    answer:
      "Performance of Investigation of a business or a person OR performance of an act with certain standard care",
    chapter: 11,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "The basic function of due diligence in any merger is to assess ________________ by inquiring into all relevant aspect of the past, present and predictable future of the business to be purchased.",
    options: [
      "Gains from the proposed Merger",
      "Return on Investment from a proposed merger",
      "The Potential Risk of  a proposed merger",
      "None of the above",
    ],
    answer: "The Potential Risk of  a proposed merger",
    chapter: 11,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "The due diligence effort in a merger transaction should include basic activities to meet diligence standards of common law and practice. Which are those basic activities?",
    options: [
      "Financial Statements’ Review",
      "Management and Operations’ Review",
      "Legal Compliance Revie",
      "All of the above activities",
    ],
    answer: "All of the above activities",
    chapter: 11,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Which due diligence activity confirms the existence of assets, liabilities and equity in the balance sheet and determine the financial health of the company based on income statement?",
    options: [
      "Financial Statements’ Review",
      "Management and Operations’ Review",
      "Legal Compliance Review",
      "Document and Transaction Review",
    ],
    answer: "Financial Statements’ Review",
    chapter: 11,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Which due diligence activity determines the quality and reliability of financial statements and helps to gain a sense of contingencies beyond the financial statements?",
    options: [
      "Financial Statements’ Review",
      "Management and Operations’ Review",
      "Legal Compliance Review",
      "Document and Transaction Review",
    ],
    answer: "Management and Operations’ Review",
    chapter: 11,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Which due diligence activity checks for potential future legal problems stemming from the target company’s past?",
    options: [
      "Financial Statements’ Review",
      "Management and Operations’ Review",
      "Legal Compliance Review",
      "Document and Transaction Review",
    ],
    answer: "Legal Compliance Review",
    chapter: 11,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "For which reasons, the company need “due diligence” in case of merger or acquisition?",
    options: [
      "It enables the investor to know the strengths and weakness of the business one is buying",
      "It gives a fair value of the investment to the potential investor",
      "It helps in identifying the hidden irregularities existing in the business one is buying",
      "All of the above reasons",
    ],
    answer: "All of the above reasons",
    chapter: 11,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Due diligence is a very lengthy process of reviewing information. The information that is reviewed include –",
    options: [
      "Historical, Current and Forecasted Financial Data",
      "Business Plans",
      "Audit Reports and Contracts with Suppliers, Customers and Staff",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 11,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Which are the core transactions of the business company that required due diligence?",
    options: [
      "Marketing and Personnel",
      "Business and Financial Operations",
      "Property and Equipments",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 11,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "__________ is a relationship between persons who come together for carrying on a business activity and decide to share the profits or bear losses arising from it.",
    options: ["Proprietary", "Joint Ventures", "Collaborations", "Partnership"],
    answer: "Partnership",
    chapter: 11,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Based on individual needs and requirements, companies undertake various kind of due diligence. Under which kind/type of due diligence company analyzes financial performance of an entity, both qualitatively and quantitatively",
    options: [
      "Financial Due Diligence",
      "Legal Due Diligence",
      "IP Due Diligence",
      "HR Due Diligence",
    ],
    answer: "Financial Due Diligence",
    chapter: 11,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Which kind/type of due diligence involves an onsite analysis of the daily process of the target company’s business and how the business operates?",
    options: [
      "Financial Due Diligence",
      "Legal Due Diligence",
      "IP Due Diligence",
      "Operational Due Diligence",
    ],
    answer: "Operational Due Diligence",
    chapter: 11,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "While conducting Intellectual Property Rights’ due diligence, what steps should be followed by the company?",
    options: [
      "Identify and Locate IP Assets and Ascertain its Nature and Scope",
      "Evaluate validity of IP Assets",
      "Evaluate any potential IP infringement claims",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 11,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "When one company sells all its assets to another, the successor is not liable for the debts and liabilities of the processor. However under which circumstances the successor may still stand liable?",
    options: [
      "If the transaction is merger or consolidation",
      "If the transaction was fraudulently designed to escape liability",
      "If the successor is a ‘mere continuation’ of the predecessor",
      "Under all the above circumstances",
    ],
    answer: "Under all the above circumstances",
    chapter: 11,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "One of the key requirements in evaluating a possible Merger and Acquisitions is a strong due diligence team capable of carrying out a quick and effective review of the assets after the confidentiality agreement has been attained.",
    options: ["True", "False"],
    answer: "True",
    chapter: 11,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "The due diligence process is critical in every M &amp; A exercise. It is the only way of ensuring t5hat the buyer is getting the best value for the money he proposes to invest in the purchase.",
    options: ["True", "False"],
    answer: "True",
    chapter: 11,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Which is the most important legislation in India which empowers the government to regulate the formation, financing, functioning and winding up of the companies?",
    options: [
      "The Companies Act, 1956",
      "The Income Tax Act, 1961",
      "SEBI (Substantial Acquisition of Shares and Takeovers) Regulations, 1997",
      "Foreign Exchange Management Act, 1999",
    ],
    answer: "The Companies Act, 1956",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Who controls tasks of incorporation of new companies and administration of running companies?",
    options: [
      "Ministry of Corporate Affairs",
      "Registrar of Companies",
      "Corporate Law Board",
      "Director of Inspection",
    ],
    answer: "Registrar of Companies",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "The term merger and amalgamation have not been defined in the Companies Act, 1956. What is the meaning of “Amalgamation” as per Concise Oxford Dictionary?",
    options: [
      "To combine or unite to form one organization or structure",
      "To come together to do business and to share profit or loss thereof",
      "To join hands to take up various ventures together",
      "None of the above",
    ],
    answer: "To combine or unite to form one organization or structure",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Which section of The Companies Act, 1956 deals with the “arrangement” that includes reorganization of the share capital of the company?",
    options: [
      "Section 390",
      "Section 391 (1)",
      "Section 391 (2)",
      "Section 393 (2)",
    ],
    answer: "Section 390",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Section 391(1) deals with ___________, which is an arrangement carried out at the behest of the court on an application made by the company, or any creditor, member or the liquidator where a company is being wound-up?",
    options: ["Arrangement", "Settlement", "Compromise", "Way out"],
    answer: "Compromise",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "As per section 391 (2)-(7), what is the ratio for approval of every scheme of arrangement and compromise from creators or members present and voting either in person or by proxy?",
    options: ["One Half", "Two Third", "Three Fourth", "One Third"],
    answer: "Three Fourth",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "The court has powers to sanction a compromise or arrangements. Once the order has been passed, the company should file a certified copy of order with ROC, failing to which is punishable with a fine up to –",
    options: ["Rs. 50", "Rs. 500", "Rs. 5000", "Rs. 50000"],
    answer: "Rs. 500",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "The court enjoys immense powers with regard to sanctioning of amalgamation scheme. Whether is it possible to approve the scheme with retrospective effect?",
    options: [
      "Yes, court can approve with retrospective effect",
      "No, court can’t approve with retrospective effect",
      "None of the above",
    ],
    answer: "Yes, court can approve with retrospective effect",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "To which companies the SEBI (Buy-back of Securities) Regulations, 1998 are applicable?",
    options: [
      "Companies wanting to issue Right Shares",
      "Companies wanting to issue Bonus Shares",
      "Companies wanting to issue New Equity Shares",
      "Companies wanting to Buy-back Shares or other specified securities",
    ],
    answer:
      "Companies wanting to Buy-back Shares or other specified securities",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Which Section of the Companies Act, 1956 prohibits a limited company from buying back its own shares?",
    options: ["Section 77", "Section 79", "Section 87", "Section 97"],
    answer: "Section 77",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Which Section of the Companies Act, 1956 expanded the scope of the company and bestowed the power to a company to purchase its own securities subject to the provisions of Section 77A(2) and Section 77B?",
    options: ["Section 70B", "Section 71A", "Section 77A", "Section 88A"],
    answer: "Section 77A",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Section 77(1) of Companies Act, 1956 clearly stipulates the sources of funds to the company can use for buy-back of shares. Which are those funds?",
    options: [
      "Free Reserves",
      "Share Premium Account",
      "Proceeds of any shares or other specified securities",
      "All of the above funds",
    ],
    answer: "All of the above funds",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Which are the permissible sources of buy back of shares under section 77A(5) of the Companies Act, 1956 read with Regulation 4 of SEBI (Buy-back of Securities) Regulation, 1998?",
    options: [
      "From Existing Security Holders on proportionate basis",
      "From Open Market through Book Building process",
      "From employees to whom securities issued as stock option or sweat equity",
      "From any or all of the above source(s)",
    ],
    answer: "From any or all of the above source(s)",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "What is the threshold limit of voting rights shares to trigger an open offer under SEBI (Substantial Acquisition of Shares and Takeovers) Regulations, 2011?",
    options: ["10 %", "15 %", "20 %", "25 %"],
    answer: "25 %",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "___________ is a process of administration of securities to trading privileges/dealings on recognized stock exchanges through a formal agreement.",
    options: ["Listing", "Registration", "Nomination", "Amalgamation"],
    answer: "Listing",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question: "Which are the two very active stock exchanges in India?",
    options: [
      "OTC and SEBI",
      "BSE and NSE",
      "CLB and SEBI",
      "OTC and Odd Lot Exchange",
    ],
    answer: "BSE and NSE",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "The ___________ date connotes the date of amalgamation – the date from which the undertaking including assets and liabilities of the transferor company vests in the transferee company.",
    options: [
      "Contract Date",
      "Appointed Date",
      "Effective Date",
      "Signed Date",
    ],
    answer: "Appointed Date",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "The ___________ date signifies the completion of all the formalities of the merger or acquisition.",
    options: [
      "Contract Date",
      "Appointed Date",
      "Effective Date",
      "Signed Date",
    ],
    answer: "Effective Date",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "BSE categorizes companies into – Large Cap Companies and Small Cap Companies. Which can be considered as Large Cap Companies?",
    options: [
      "Minimum Issue size Rs. 50 million and market capitalization not less than 200 million",
      "Minimum Issue size Rs. 100 million and market capitalization not less than 500 million",
      "Minimum Issue size Rs. 150 million and market capitalization not less than 250 million",
      "Minimum Issue size Rs. 100 million and market capitalization not less than 250 million",
    ],
    answer:
      "Minimum Issue size Rs. 100 million and market capitalization not less than 250 million",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "As per BSE norms, to enter in to the market, what will be the minimum issue size in case of “Small Cap Companies”?",
    options: [
      "Rs. 20 million",
      "Rs. 30 million",
      "Rs. 50 million",
      "Rs. 100 million",
    ],
    answer: "Rs. 30 million",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "If the company is listed with any other stock exchange and now wants to list with BSE, then what will be the minimum net worth of the company to get listed with BSE?",
    options: [
      "Rs. 100 million",
      "Rs. 150 million",
      "Rs. 200 million",
      "Rs. 250 million",
    ],
    answer: "Rs. 200 million",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "To get listed with NSE, No disciplinary actions should have been taken by any other stock exchange and regulatory authority in the past __________ years against the applicant company.",
    options: ["2 years", "3 years", "5 years", "10 years"],
    answer: "3 years",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "What is the meaning of “Compulsory Delisting” under SEBI (Delisting of Securities) Guidelines, 2003?",
    options: [
      "Delisting of Securities of a company by an exchange",
      "Delisting of Securities of a company by ROC",
      "Delisting of Securities of a company by Company itself",
      "Delisting of Securities of a company by Company Law Board",
    ],
    answer: "Delisting of Securities of a company by an exchange",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "What is the meaning of “Voluntary Delisting” under SEBI (Delisting of Securities) Guidelines, 2003?",
    options: [
      "Delisting of Securities of a company by an exchange",
      "Delisting of Securities of a company by ROC",
      "Delisting of Securities of a company by Promoters of the company themselves",
      "Delisting of Securities of a company by Company Law Board",
    ],
    answer:
      "Delisting of Securities of a company by Promoters of the company themselves",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Corporate governance is about the whole set of legal, cultural and institutional arrangements. Which clause of the Listing Agreement deals with corporate governance?",
    options: [
      "Clause 49 of Listing Agreement",
      "Clause 59 of Listing Agreement",
      "Clause 69 of Listing Agreement",
      "Clause 79 of Listing Agreement",
    ],
    answer: "Clause 49 of Listing Agreement",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "As per revised clause 49, the gap between two board meetings has been reduced to ________months from four months.",
    options: ["One month", "Two months", "Three months", "None of the above"],
    answer: "Three months",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "As per norms of clause 49, how many members of the Audit Committee should be Independent Directors?",
    options: ["One Half", "Two Third", "One Third", "One Fourth"],
    answer: "Two Third",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "____________ is the statute on income tax in India. It provides for levy, administration, collection and recovery of income tax and consider as most complex statute in India.",
    options: [
      "The Companies Act, 1956",
      "The Income Tax Act, 1961",
      "SEBI (Substantial Acquisition of Shares and Takeovers) Regulations, 1997",
      "Foreign Exchange Management Act, 1999",
    ],
    answer: "The Income Tax Act, 1961",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "The provisions of Foreign Exchange Management Act (FEMA), 1999 aims at regulating _________ deals as the deals may involve use of foreign exchange for settling of transactions.",
    options: [
      "Cross Boarder M & A",
      "Inter State M & A",
      "Intra State M & A",
      "Domestic M & A",
    ],
    answer: "Cross Boarder M & A",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "The entities merging together are required to give notice to the Competition Commission of India. What is the threshold limit for entities merging in terms of assets under the Competition Act, 2002, outside India?",
    options: [
      "Assets more than 100 million (including more than 5 billion in India)",
      "Assets more than 250 million (including more than 5 billion in India)",
      "Assets more than 500 million (including more than 5 billion in India)",
      "Assets more than 1000 million (including more than 5 billion in India)",
    ],
    answer:
      "Assets more than 500 million (including more than 5 billion in India)",
    chapter: 12,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Discounted Cash Flow method is the most preferred and acceptable method of valuation at present. The main reason behind its popularity is that it is based on –",
    options: [
      "Fundamentals of  Time Value of Money",
      "Fundamentals of  Time Value of Market Price",
      "Cash Flow Discounting Rates",
      "Past Generated Cash Inflows",
    ],
    answer: "Fundamentals of  Time Value of Money",
    chapter: 13,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Accounting Standard 14 deals with accounting for amalgamations. According to AS 14, which are the two methods of amalgamation?",
    options: [
      "Amalgamation in Nature of Merger",
      "Amalgamation in Nature of Purchase",
      "Both “A” and “B” above",
      "None of the above",
    ],
    answer: "Both “A” and “B” above",
    chapter: 13,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "The term “value” is highly subjective. Valuation of a business entity is done by fundamental concepts. Which are those concepts?",
    options: [
      "Going Concern Value",
      "Liquidation Value",
      "Market Value",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 13,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Which concept of business valuation assumes that a business entity has infinite life and shall continue to exist irrespective of the life of promoter?",
    options: [
      "Going Concern Value",
      "Liquidation Value",
      "Market Value",
      "True Value",
    ],
    answer: "Going Concern Value",
    chapter: 13,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "The business entity has an identity separate from its owner/promoters. What do we mean by “Perpetual Entity”?",
    options: [
      "Company will cease to exist on death of promoters",
      "Company will cease to exist on death of Share holders",
      "Company shall continue to exist irrespective of its shareholders",
      "None of the above",
    ],
    answer: "Company shall continue to exist irrespective of its shareholders",
    chapter: 13,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question: "What is the “Liquidation Value”?",
    options: [
      "Value realized on Sale of entire assets of the company",
      "Value realized on liquidation after incurring all incidental cost",
      "Entire assets less entire liabilities",
      "Net Worth at the time of liquidation",
    ],
    answer: "Value realized on liquidation after incurring all incidental cost",
    chapter: 13,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Valuation is very complex process. When the aim of the valuation process is to sell the business, then the process should objectively determine a –",
    options: [
      "Net Market Value",
      "Net Realizable Value",
      "Gross Market Value",
      "Fair Market Value",
    ],
    answer: "Fair Market Value",
    chapter: 13,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "There are several methods of valuation. Each method has its own merits and demerits. Which are the basic methods for valuation?",
    options: [
      "Asset – based valuation",
      "Earning – based valuation",
      "Market – based valuation",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 13,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Under Asset – based Valuation method, while valuing investment of the company, at which value the “value of Investment” should be estimated?",
    options: [
      "At Purchase Price",
      "At Discounted price",
      "At Realizable value or at its Current yield",
      "At Inflated Price",
    ],
    answer: "At Realizable value or at its Current yield",
    chapter: 13,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Which method of valuation assumes that Future Maintainable Earnings (FME) will continue to be available to the business till survival?",
    options: [
      "Asset – based valuation",
      "Earning – based valuation",
      "Market – based valuation",
      "Book Value Approach",
    ],
    answer: "Earning – based valuation",
    chapter: 13,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "One of the methods of valuation is “Book Value Approach”. On which matter the accuracy of this approach is depending on?",
    options: [
      "Whether the net book values are closer to market values or not",
      "On Accounting Treatment of Assets or Liabilities",
      "On Audit Procedures",
      "On Audit Procedures",
    ],
    answer: "Whether the net book values are closer to market values or not",
    chapter: 13,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Which is the most preferred and acceptable method of valuation at present?",
    options: [
      "Book Value Approach",
      "Asset – based Valuation",
      "Discount Cash Flow Method",
      "Market – based Valuation",
    ],
    answer: "Discount Cash Flow Method",
    chapter: 13,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "__________ is used in situations where the final price is not known on completion of the deal on account of post-completion adjustments for future claims and earn outs.",
    options: [
      "Purchase Consideration",
      "Initial Consideration",
      "Deferred Consideration",
      "Cash Consideration",
    ],
    answer: "Deferred Consideration",
    chapter: 14,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Which is the useful device to link overall purchase price to the future profitability of the target company where a greater degree of value is expected to be realized on post-completion?",
    options: ["Future Claims", "Earn – Outs", "Retention", "Security Deposits"],
    answer: "Earn – Outs",
    chapter: 14,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Which is the most common element of settling the purchase consideration for Mergers and Acquisitions?",
    options: ["Cash", "Equity Capital", "Loan Capital", "Debentures"],
    answer: "Cash",
    chapter: 14,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Cash is the most common element of settling the purchase consideration. What are the ways through which cash can be raised / generated?",
    options: [
      "Through Borrowings / Financial Assistance",
      "Through Equity Offerings",
      "Through Debts Offerings",
      "Through all of the above given ways",
    ],
    answer: "Through all of the above given ways",
    chapter: 14,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Merger &amp; Acquisition involve bringing people and organizational structure of more than one type under single control and effect their unification. Integration in M &amp; A can be summed up by the catchphrase –",
    options: [
      "Make him like me",
      "Make him like others",
      "Make him like competitors",
      "Kill the competition",
    ],
    answer: "Make him like me",
    chapter: 15,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Corporate history shows that integration is easier said than done. This fact is sustained by so many study reports. What are the outcomes of the statistics provided by KPMG (1987), Accenture (2002) and McKinsey (2006) relating to M &amp; A?",
    options: [
      "50 % drop in productivity in the first 6-8 months",
      "47 % of top management leave within the first year",
      "62 % show zero growth over three year period",
      "All of the above outcomes",
    ],
    answer: "All of the above outcomes",
    chapter: 15,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Poor communication is often to be blamed when an entity fails in achieving the desired result. The merging entities should practice ____________ communication with each other in terms of knowledge, information and technical skill.",
    options: [
      "Open and Clear  communication",
      "Fast Communication",
      "Random Communication",
      "Distinguished Communication",
    ],
    answer: "Open and Clear  communication",
    chapter: 15,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "A structural plan is required for the post-merger period. Facts and research support that _______% of the outcome of the merger depends upon the way activities handled during post-merger period.",
    options: ["30 %", "45 %", "60 %", "70 %"],
    answer: "70 %",
    chapter: 15,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Which are the crucial activities that are required to carry out during the process of post – merger integration?",
    options: [
      "Manage Exceptions",
      "Communicate decisions through the right channels in timely manner",
      "Give constant messages about strategies to stakeholders",
      "All of the above activities",
    ],
    answer: "All of the above activities",
    chapter: 15,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "It is very important that an effective, quick and crisp schedule is prepared for post merger integration. This is because a prolonged post merger growth strategy might lead to unnecessary rise in costs, which includes time, money and material cost.",
    options: ["True", "False"],
    answer: "True",
    chapter: 15,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "A purely economical approach towards mergers and acquisitions fails to consider a very key element –",
    options: [
      "The regulations",
      "The People",
      "The social responsibility",
      "The natural responsibility",
    ],
    answer: "The People",
    chapter: 15,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "A good merger can fail despite good financial or strategic sense, if human element is ignored. In most mergers, human side is treated very lightly without realizing that such a move could be –",
    options: [
      "Very beneficial",
      "Against the Law of Land",
      "Catastrophic",
      "Most unrealistic",
    ],
    answer: "Catastrophic",
    chapter: 15,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "An international survey of HR managers conducted by global consultant Mercer in 2009, revealed that only _____ % of companies involved HR at strategy and planning stage of merger.",
    options: ["21 %", "38 %", "51 %", "64 %"],
    answer: "21 %",
    chapter: 15,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "What are the strategic reasons to from or to enter into strategic alliances by the companies?",
    options: [
      "To create and exploit synergies",
      "To transfer technologies and skills",
      "To diversify and derive related benefits",
      "For all of the above given reasons",
    ],
    answer: "For all of the above given reasons",
    chapter: 16,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Under which type of strategic alliance, the partners combine their technologies to diversify their existing products / market portfolios?",
    options: [
      "Complimentary Alliance",
      "Market Alliance",
      "Concentrations Alliance",
      "Research and Development Alliance",
    ],
    answer: "Complimentary Alliance",
    chapter: 16,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Strategic alliances generally suffer from strategic issues that affect overall performance of the partners. Which are the common weaknesses of strategic alliances?",
    options: [
      "Harmony – related issues",
      "Implication issues",
      "Problems of Coherence",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 16,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Companies have many different alternatives to M &amp; A, apart from several corporate restructuring strategies on corporate restructuring. These alternatives are –",
    options: [
      "Divestitures",
      "Strategic Alliances",
      "Internal Developments",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 16,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Which alternate strategy is based on presumption that it has a positive impact on stock prices as it helps the company to get rid of divisions that are no longer adding value and are pulling down the profits of the company?",
    options: [
      "Divestitures",
      "Strategic Alliances",
      "Internal Developments",
      "Takeovers",
    ],
    answer: "Divestitures",
    chapter: 16,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question: "What is referred to “Divestiture”?",
    options: [
      "Bulk sale of Assets to another firm or company",
      "Bulk purchase of Assets from another firm or company",
      "Slump Sale",
      "Sale of a Part of a Firm to another Company",
    ],
    answer: "Sale of a Part of a Firm to another Company",
    chapter: 16,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "The sale of part of a firm to another company is referred to as a divestiture. Divestitures are simple exit routes. Whether the divestiture result into creation of new entity or not?",
    options: [
      "Yes, new entity comes into existence on divestitures",
      "No, it do not result in creation of new entity",
      "None of the above",
    ],
    answer: "No, it do not result in creation of new entity",
    chapter: 16,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "When a firm is compelled to divest itself off a particular asset as a result of a legal dispute, it is referred to as –",
    options: [
      "Voluntary Divestitures",
      "Involuntary Divestitures",
      "Legal Divestitures",
      "Forced Divestitures",
    ],
    answer: "Involuntary Divestitures",
    chapter: 16,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question: "What is “Strategic Alliances”?",
    options: [
      "Arrangement in which business entities join forces to form cooperative partnership",
      "Acquisition of units between companies",
      "Merger of two companies",
      "Amalgamation of companies",
    ],
    answer:
      "Arrangement in which business entities join forces to form cooperative partnership",
    chapter: 16,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "_______________ is a contractual arrangement between two or more parties who agree to come together to undertake a business project. The all contribute capital and share profit or loss in decided ratio.",
    options: ["Merger", "Acquisition", "Joint Venture", "Amalgamation"],
    answer: "Joint Venture",
    chapter: 17,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "Under which type of arrangement two or more companies consolidate their business to form a new firm or become subsidiary of any one of the company?",
    options: ["Merger", "Acquisition", "Joint Venture", "Amalgamation"],
    answer: "Amalgamation",
    chapter: 17,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
  {
    question:
      "The terms amalgamation and merger are normally used interchangeably. What is the key difference between the amalgamation and merger?",
    options: [
      "Merger is fusion of two companies while in Amalgamation two companies dissolves and a new company having separate legal entity is created",
      "In merger one company merges with another while in amalgamation one company amalgamates in another",
      "Merger is used while when technically high risk involved while amalgamation is used when low risk is involved",
      "No different at all between amalgamation and merger",
    ],
    answer:
      "Merger is fusion of two companies while in Amalgamation two companies dissolves and a new company having separate legal entity is created",
    chapter: 17,
    isAnswered: false,
    isFlagged: false,
    marks: 1,
    selectedAnswer: "",
  },
];
