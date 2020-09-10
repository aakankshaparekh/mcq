var chapters = [
  //   { chapter: 1, title: "Definitions" },
  //   {
  //     chapter: 2,
  //     title:
  //       "Previous Year, Charge Of Income, Scope Of Total Income, Residential Status (Section 3 To",
  //   },
  //   {
  //     chapter: 3,
  //     title: "Income Which Do Not Form Part Of Total Income (Section 10)",
  //   },
  //   { chapter: 4, title: "Income From Salaries (Section 15 To 17)" },
  //   { chapter: 5, title: "Income From House Property (Section 22 To 27)" },
  {
    chapter: 6,
    title: "Profits And Gains From Business Or Profession (Section 28 To 44)",
  },
  { chapter: 7, title: "Income From Capital Gains (Section 45 To 55)" },
  { chapter: 8, title: "Income From Other Sources (Section 56 To 59)" },
  { chapter: 9, title: "Clubbing Of Income (Section 61 To 64)" },
  {
    chapter: 10,
    title: "Set Off Or Carry Forward And Set Off Losses (Section 70 To 80)",
  },
  { chapter: 11, title: "Deduction And Rebates" },
];

var allQuestionAnswers = [
  {
    question:
      "What is the meaning of “Business” under section 2(13) of Income Tax Act, 1961?",
    options: [
      "Business means production or manufacturing of articles",
      "Business includes any trade, commerce or manufacture or any adventure or concern in nature of trade, commerce or manufacture",
      "Business means barter system between two concerns",
      "Business means trading of goods for profit or losses",
    ],
    answer:
      "Business includes any trade, commerce or manufacture or any adventure or concern in nature of trade, commerce or manufacture",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      'The word "business" would mean some real, substantial and systematic or organized course of activity with a set purpose which would normally be –',
    options: [
      "Trading Motive",
      "Manufacturing Motive",
      "Profit Motive",
      "Loss Motive",
    ],
    answer: "Profit Motive",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "If a person purchases goods with a view to sell them at profit, it is an ordinary case of trade. If such transactions are repeated on a large scale, it is called –",
    options: [
      "Trading",
      "Commerce",
      "Manufacture",
      "Adventure in the nature of trade",
    ],
    answer: "Commerce",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "Which guiding principles would apply while deciding as to whether a transaction of purchase or sale forms an adventure in the nature of Trade or an Investment?",
    options: [
      "The commodity purchased plays an important role in deciding whether a person is indulging in an adventure in the nature of trade or is making an investment",
      "Whether the transaction is an isolated one or forms part of a series of transactions showing a tendency to indulge in trade",
      "The fact that the property bought has been sold within a short time does not by itself indicate that the transaction is in the nature of trade",
      "All of the above principles",
    ],
    answer: "All of the above principles",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "Income chargeable under the heads of “Profit and Gains from Business or Profession” or “Income from Other Sources” shall be computed in accordance with –",
    options: [
      "Cash System of Accounting",
      "Mercantile System of Accounting",
      "Either Cash System Or Mercantile System of Accounting",
      "Double Entry system of accounting",
    ],
    answer: "Either Cash System Or Mercantile System of Accounting",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "What do we mean by - “the specific accounting principles and the method of applying those principles adopted by the assessee in the preparation and presentation of financial statements”?",
    options: [
      "Accounting Policies",
      "Accounting Estimates",
      "Prior Period Items",
      "Extraordinary items",
    ],
    answer: "Accounting Policies",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "What do we mean by - “gains or losses which arise from events or transactions which are distinct from the ordinary activities of the business and which are both material and expected not to recur frequently or regularly”?",
    options: [
      "Accounting Policies",
      "Accounting Estimates",
      "Prior Period Items",
      "Extraordinary items",
    ],
    answer: "Extraordinary items",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "What do we refer by the assumption that - the assessee has neither the intention nor the necessity of liquidation or of curtailing materially the scale of the business, profession or vocation and intends to continue his business, profession or vocation for the foreseeable future?",
    options: [
      "Accounting Policies",
      "Consistency",
      "Going Concern",
      "Extraordinary items",
    ],
    answer: "Going Concern",
    chapter: 6,
    marks: 1,
  },
  {
    question: "What is the meaning of “Current Repairs”?",
    options: [
      "Expenditure of the purpose of purchase of new assets during the year",
      "Expenditure for the purpose of preserving or maintaining an already existing assets",
      "Expenditure for expansion",
      "Expenditure of new or different advantage",
    ],
    answer:
      "Expenditure for the purpose of preserving or maintaining an already existing assets",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "Which term is usually means “loss or decline in value which occurs gradually over useful life of a material thing, due to physical wear, tear and decay, and is generally limited to losses or decline in value which cannot be restored by current repairs and maintenance”?",
    options: [
      "Depreciation",
      "Current Repairs",
      "Capital Repairs",
      "Restoration",
    ],
    answer: "Depreciation",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "Where an asset is acquired by the assessee during the year and is put to use the business purposes for less than _____ days in that year, the deduction in respect of such asset shall be restricted to 50 per cent of the normal depreciation.",
    options: ["180 days", "200 days", "225 days", "240 days"],
    answer: "180 days",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "What is the rate of “additional depreciation” available for the new machinery or plant, has been acquired and installed after the 31st day of March, 2002 by an assessee engaged in the business of manufacture or production of any article or thing?",
    options: ["5 %", "10 %", "20 %", "25 %"],
    answer: "20 %",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "What is the actual cost of the asset, where such asset was previously the property of the assessee and now brought into use for the purpose of the business or profession?",
    options: [
      "Original Purchase Price",
      "Actual cost",
      "Fair Market Value on the date of transfer",
      "The actual cost of the asset, as reduced by an amount equal to the depreciation calculated at the rate in force on that date that would have been allowable had the building been used for the aforesaid purposes since the date of its acquisition by the assessee",
    ],
    answer:
      "The actual cost of the asset, as reduced by an amount equal to the depreciation calculated at the rate in force on that date that would have been allowable had the building been used for the aforesaid purposes since the date of its acquisition by the assessee",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "What is the quantum of deduction in respect of expenditure incurred (not being in the nature of capital expenditure) on scientific research shall be allowed against income from business or profession under section 35?",
    options: [
      "1.25 times of the sum paid",
      "1.50 times of the sum paid",
      "1.75 times of the sum paid",
      "2 times of the sum paid",
    ],
    answer: "1.25 times of the sum paid",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "What is the quantum of deduction available in respect of Amortization of Preliminary Expenses under section 35D?",
    options: [
      "25% per year from the commencement of business",
      "20% per year from the commencement of business",
      "15% per year from the commencement of business",
      "18% per year from the commencement of business",
    ],
    answer: "20% per year from the commencement of business",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "What is the quantum of deduction where an assessee incurs any expenditure in any previous year by way of payment of any sum to an employee at the time of his voluntary retirement, in accordance with any scheme or schemes of voluntary retirement?",
    options: [
      "20% of the amount so paid shall be deducted in 5 succeeding years",
      "10 % of the amount so paid shall be deducted in 10 succeeding years",
      "25 % of the amount so paid shall be deducted in 4 succeeding years",
      "100 % in the first year",
    ],
    answer: "20% of the amount so paid shall be deducted in 5 succeeding years",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "Where the loan is taken for purchase of fixed asset, what will be the treatment of interest paid on that loan for the period before starting of business?",
    options: [
      "Interest should be added to the cost of fixed assets and capitalized",
      "Interest is allowed as revenue expenditure",
      "Interest is allowed as deferred revenue expenditure",
      "None of the above",
    ],
    answer:
      "Interest should be added to the cost of fixed assets and capitalized",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "Where any expenditure incurred and payment is made, in excess of ___________ otherwise than by a crossed cheque drawn on a bank or by a crossed bank draft, No Deduction of such expenditure shall not be allowed as a deduction under section 40A(3).",
    options: ["Rs. 10,000/-", "Rs. 15,000/-", "Rs. 20,000/-", "Rs. 25,000/-"],
    answer: "Rs. 20,000/-",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "Every person carrying on business shall, if his total sales, turnover or gross receipts, as the case may be, in business exceed or exceeds Rs. _________ in any previous year shall be liable to get his books of account audited under section 44AB.",
    options: ["Rs. 1 crore", "Rs. 2 crore", "Rs. 5 crore", "Rs. 10 crore"],
    answer: "Rs. 1 crore",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "What will be the presumptive profits or gains from each goods carriage for claiming deduction under “special provision for computing profits and gains for the business of plying, hiring of leasing goods carriages” under section 44AE?",
    options: [
      "For heavy goods vehicle Rs. 4,000/- per month and other than that Rs. 4,500/- per month",
      "For heavy goods vehicle Rs. 5,000/- per month and other than that Rs. 4,500/- per month",
      "For heavy goods vehicle Rs. 3,000/- per month and other than that Rs. 2,500/- per month",
      "For heavy goods vehicle Rs. 4,000/- per month and other than that Rs. 3,000/- per month",
    ],
    answer:
      "For heavy goods vehicle Rs. 5,000/- per month and other than that Rs. 4,500/- per month",
    chapter: 6,
    marks: 1,
  },
  {
    question:
      "Profits or gains arising from the transfer of a capital asset effected in the previous year shall be chargeable to tax under the head “Capital Gains”. Which are very pre-requisites of a charge to income tax of capital gains?",
    options: [
      "There must be a Capital Asset and it must have been transferred",
      "The transfer must have been effected in the previous year",
      "There must be a gain arising on such transfer of a capital asset",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "What should be the “holding period” in case of shares held in a company, any other security listed in recognized stock exchange, units of a Mutual Fund or a zero coupon bond to consider them as “Short Term Capital Asset”?",
    options: [
      "For not more than 3 months",
      "For not more than 6 months",
      "For not more than 12 months",
      "For not more than 18 months",
    ],
    answer: "For not more than 12 months",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "What should be the “holding period” in case of Assets other than shares held in a company, any other security listed in recognized stock exchange, units of a Mutual Fund or a zero coupon bond to consider them as “Short Term Capital Asset”?",
    options: [
      "For not more than 12 months",
      "For not more than 18 months",
      "For not more than 24 months",
      "For not more than 36 months",
    ],
    answer: "For not more than 36 months",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "Under section 2(47), Transfer, in relation to Capital Asset, includes –",
    options: [
      "the sale, exchange or relinquishment of the asset",
      "the extinguishment of any rights therein",
      "when capital asset is converted into ( or treated as ) stock-in-trade by the owner thereof, in respect of a business carried on by him, such act of conversion or treatment",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "Who is liable to pay Capital Gain tax in case of sale of dematerialized shares?",
    options: [
      "Depository",
      "Depository Participant",
      "Beneficiary / Shareholder",
      "National Stock Exchange",
    ],
    answer: "Beneficiary / Shareholder",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "What is the formula to convert the Cost of Acquisition into “Indexed Cost of Acquisition”? [Cost inflation Index abbreviated to “CII”]",
    options: [
      "Cost of Acquisition x CII of the year of transfer",
      "Cost of Acquisition x CII of the year of transfer / CII of year of purchase OR CII for F.Y.1981-82 whichever is later",
      "Cost of Acquisition x CII of the year of Purchase",
      "Cost of Acquisition x CII of A.Y. 1981-82",
    ],
    answer:
      "Cost of Acquisition x CII of the year of transfer / CII of year of purchase OR CII for F.Y.1981-82 whichever is later",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "Where the capital asset becomes property of the assessee by the way of succession or inheritance, what will be the cost of acquisition of the asset to the assessee?",
    options: [
      "Rs. NIL",
      "Cost to Previous owner including cost of improvements",
      "Fair Market Value",
      "Municipal Valuation Value",
    ],
    answer: "Cost to Previous owner including cost of improvements",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "Where the capital asset is an asset forming part of a block of assets in respect of which depreciation has been allowed under Income Tax Act, the excess of income / consideration on transfer of asset over WDV shall be the –",
    options: [
      "Long Term Capital Gain",
      "Business Income",
      "Short Term Capital Gain",
      "Income from Other Sources",
    ],
    answer: "Short Term Capital Gain",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "Section 54 provides exemption to capital gains chargeable to tax arising from sale of Residential House Property if invested in another house property. What are the basic conditions to avail the exemption?",
    options: [
      "Original House property must be held for 3 or more years",
      "The gain must be reinvested in residential house property only",
      "The gain must be reinvested before 1 year or after 2 years from the date of transfer",
      "All of the above",
    ],
    answer: "All of the above",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "For the purpose of section 48 &amp; 49, “Cost of any Improvement” in relation to a capital asset being goodwill of a business or a right to manufacture, produces or process any article or thing or right to carry on any business shall be taken to be –",
    options: [
      "Original Value of Goodwill",
      "Rs. NIL",
      "Any Lump sum Amount",
      "Fair Market Value",
    ],
    answer: "Rs. NIL",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "Where any Short Term Capital Gain arises on transfer of Equity Shares or on unit of an equity oriented fund, what will be rate of tax for that short term capital gain?",
    options: ["5 %", "10 %", "15 %", "20 %"],
    answer: "15 %",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "Where any Long Term Capital Gain arises on transfer of Long Term Capital Asset and is chargeable to tax, what will be rate of tax for that long term capital gain?",
    options: ["5 %", "10 %", "15 %", "20 %"],
    answer: "20 %",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "Against which head of income the “long term capital loss” can be set off?",
    options: [
      "Either against Short Term Capital Gain or against Long Term Capital Gain",
      "Against Profits or Gains from Business or Profession",
      "Against Long Term Capital Gain only",
      "Against Income from other sources",
    ],
    answer: "Against Long Term Capital Gain only",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "For how many subsequent assessment years the short term capital gain or long term capital gain can be carried forward by the assessee?",
    options: [
      "For subsequent 2 assessment years",
      "For subsequent 3 assessment years",
      "For subsequent 5 assessment years",
      "For subsequent 8 assessment years",
    ],
    answer: "For subsequent 8 assessment years",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "Mr. Ram Kapoor has sold his house in November 2010 for Rs. 85,00,000/- in Mumbai. The transfer charges and brokerage and commission paid was Rs. 5,00,000/-. He has purchased the house in February 1993 for Rs. 17,00,000/-. He has incurred Rs. 7,50,000/- for cost of improvement in August 2004. Calculate the Capital Gain in this case. [Cost inflation index - for F.Y.2010-11 = 711, for F.Y.2004-05 =480 and for F.Y.  1992-93 = 223].",
    options: [
      "Rs. 19,68,883/-",
      "Rs. 14,68,883/-",
      "Rs. 55,50,000/-",
      "Rs. 63,00,000/-",
    ],
    answer: "Rs. 14,68,883/-",
    chapter: 7,
    marks: 1,
  },
  {
    question:
      "Where the liquidator realised certain amounts by way of sale of the assets of the company in liquidation and invested the amounts in interest-bearing deposits, then under which head of income the interest on those deposits are taxable?",
    options: [
      "Business Income",
      "Income from Other Sources",
      "Exempted from income tax",
      "None of the above",
    ],
    answer: "Income from Other Sources",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "Which kind of incomes has been chargeable to income tax under the head “Income from Other Sources”?",
    options: [
      "Dividends to the extent not exempted from tax",
      "Winning from Lotteries, Cross-word Puzzles, Races etc.",
      'Income from machinery, plant or furniture belonging to the assessee and let on hire, if the income is not chargeable to income-tax under the head "Profits and gains of business or profession',
      "All of the above kind of incomes",
    ],
    answer: "All of the above kind of incomes",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "Where an individual receives from any person on or after the 1st day of October, 2009, any Immovable Properly without consideration, the stamp duty value of which exceeds Rs.50,000/-, what will be the amount taxable in his hands under the head income from other sources?",
    options: [
      "Rs. 50,000/-",
      "Rs. 25,000/-",
      "Original Cost of properly to Buyer",
      "Stamp Duty Value of Such Property",
    ],
    answer: "Stamp Duty Value of Such Property",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "Where a company, invested its share capital in banks pending commencement of business, interest received was taxable under the head –",
    options: [
      "Business Income",
      "Exempted from income tax",
      "Capital Gain",
      "Income from Other Sources",
    ],
    answer: "Income from Other Sources",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "Where the assessee received composite rent from its tenant towards building as well as services/amenities, such rent should be split up and the portion of rent attributable to the services/amenities should be assessed as –",
    options: [
      "Business Income",
      "Income from Other Sources",
      "Income from House Property",
      "Exempted Income",
    ],
    answer: "Income from Other Sources",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "What is the amount of deduction available from the income in the nature of family pension under the head income from other sources?",
    options: [
      "One Third of such amount",
      "Rs. 15,000 /-",
      "Rs. 50,000/-",
      "One Third of such amount OR Rs. 15,000/- whichever is Lower",
    ],
    answer: "One Third of such amount OR Rs. 15,000/- whichever is Lower",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      'Which of the following amounts shall not be deductible in computing the income chargeable under the head "Income from other sources"?',
    options: [
      "Family Pension",
      "Any sum paid on account of Wealth Tax",
      "Composite Rent",
      "Interest received on compensation or enhanced compensation",
    ],
    answer: "Any sum paid on account of Wealth Tax",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "Bad Debts once written off (and allowed) and subsequently recovered is chargeable to tax in the year of receipt. Under which head such recovery of bad debts shall be taxed?",
    options: [
      "Business Income",
      "Income from Other Sources",
      "Exempted Income",
      "Capital Gain",
    ],
    answer: "Income from Other Sources",
    chapter: 8,
    marks: 1,
  },
  {
    question:
      "Any income arising to any person by virtue of a transfer, where there is no actual transfer of the assets from which the income arises, shall be chargeable to income-tax as the income of –",
    options: [
      "The Transferee",
      "The Transferor",
      "The Actual Owner",
      "Exempted Income",
    ],
    answer: "The Transferor",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "All income arising to any person by virtue of a “revocable transfer” of assets shall be chargeable to income-tax as the income of the _____________ and shall be included in his total income.",
    options: [
      "The Transferee",
      "The Transferor",
      "The Actual Owner",
      "Exempted Income",
    ],
    answer: "The Transferor",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "Where any income arising to any person by virtue of a transfer by way of trust which is not revocable or under any irrevocable transfer, in whose hands the income shall be taxed?",
    options: [
      "The Transferee",
      "The Transferor",
      "The Trust",
      "Exempted Income",
    ],
    answer: "The Transferee",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "Where spouse of an individual is receiving salary or commission from a concern in which the individual is having substantial interest, then in whose hands such income is taxable in the hands of spouse whose income is greater. Where this Clubbing provision is not applicable?",
    options: [
      "If the spouse possesses technical or professional qualification and the salary / commission is received only due to application of that technical or professional qualification",
      "If the spouse is Lady",
      "If the concern is Partnership Firm",
      "Clubbing provision will apply in any circumstances",
    ],
    answer:
      "If the spouse possesses technical or professional qualification and the salary / commission is received only due to application of that technical or professional qualification",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "With whose income, the income arises or accrues to the minor child whether from the assets transfer by parents or otherwise, shall be clubbed",
    options: [
      "With the income of Father",
      "With the income of Mother",
      "With the income of Grand Parents",
      "With the income of that Parent whose income is higher",
    ],
    answer: "With the income of that Parent whose income is higher",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "Any income arises or accrues to the minor child whether from the assets transfer by parents or otherwise, shall be clubbed with the income of parent having higher income. What is the exception of this provision?",
    options: [
      "Where the income arises to minor from the manual work done by him",
      "Where the income arises to minor from any activity involving application of his Skill or Talent",
      "Where the income arises to minor from any activity involving application of his Specialized Knowledge and  Experience",
      "All of the above are exceptions to clubbing provision",
    ],
    answer: "All of the above are exceptions to clubbing provision",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "For the purpose of clubbing under section 64, “income” includes “loss”. Therefore, just as the income is to be clubbed, the losses arising to the transferee are also to be clubbed in the hands of the transferor.",
    options: ["True", "False"],
    answer: "True",
    chapter: 9,
    marks: 1,
  },
  {
    question:
      "Against which head of income the “short term capital loss” can be set off?",
    options: [
      "Either against Short Term Capital Gain or against Long Term Capital Gain",
      "Against Profits or Gains from Business or Profession",
      "Against House Property Income",
      "Against Income from other sources",
    ],
    answer:
      "Either against Short Term Capital Gain or against Long Term Capital Gain",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      'Where in any assessment year, the net result of the computation under any head of income, other than "Capital gains", is a loss and the assessee has income assessable under the head "Capital gains", such loss may, subject to the provisions of this Chapter, be set off against –',
    options: [
      "Only against income under the head capital gain",
      "Only against income under of the head under which loss is occurred",
      "Against income of any other head including income from capital gain",
      "Only against Business income",
    ],
    answer:
      "Against income of any other head including income from capital gain",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "Where in any assessment year, the net result of the computation under the head “Income from Business &amp; Profession” is a Loss and the assessee has Income from “Salaries”. Whether he can set-off business loss against salary income?",
    options: ["Yes", "No"],
    answer: "No",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "Where there is loss under the head 'Income from House Property', against which head of income the loss or unabsorbed loss from house property can be set-off?",
    options: [
      "Only against “Income from House Property”",
      "Only against “Income from Salaries”",
      "Only against “Business Income”",
      "Can be set-off against any head of income",
    ],
    answer: "Only against “Income from House Property”",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "The unabsorbed Loss from house property can be carried forward to next years and be set off only against Income from House Property in that year. It shall be so carried forward to next _______ years.",
    options: ["3 years", "5 years", "8 years", "10 years"],
    answer: "8 years",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "Where in any assessment year, the net result of the computation of Speculation Business is “Loss”, then against which head of income such loss of speculation business can be set-off?",
    options: [
      "Against Income from Other Sources",
      "Against Capital Gain",
      "Against Profit of any Other Business",
      "Only against “Speculation Business Income”",
    ],
    answer: "Only against “Speculation Business Income”",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "Unabsorbed Loss from the Speculation Business can be carried forward and set-off against the Speculation Income of next year. Up to how many assessment years the unabsorbed speculation business loss can be carried forwarded?",
    options: ["5 years", "8 years", "10 years", "12 years"],
    answer: "5 years",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "Where in any assessment year, the net result of the computation of the activity of owning and maintaining Race Horses is “Loss”, then against which head of income such loss of the activity of owning and maintaining Race Horses can be set-off?",
    options: [
      "Against Speculation Business Income",
      "Against Normal Business Income",
      "Only Against Income from the activity of owning and maintaining Race Horses",
      "Against Capita Gains",
    ],
    answer:
      "Only Against Income from the activity of owning and maintaining Race Horses",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "The unabsorbed Loss from the activity of owning and maintaining Race Horses cab be carried forward to subsequent years and be set off in next _______years only against the same activity i.e. that of owning and maintaining Race Horses.",
    options: ["2 years", "4 years", "8 years", "10 years"],
    answer: "4 years",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "What is the quantum of deduction under section 80C for payment made out of taxable income to LIC, NSC, Units of UTI, Time deposit with Post office etc.?",
    options: [
      "Amount actually Invested",
      "Rs. 1,00,000/-",
      "Least of the amount actually invested OR Rs. 1,00,000/-",
      "Rs. 50,000/-",
    ],
    answer: "Least of the amount actually invested OR Rs. 1,00,000/-",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "What was the quantum of deduction available under section 80CCF for amount paid/deposited as subscription to notified long-term infrastructure bond?",
    options: [
      "Rs. 15,000/-",
      "Rs. 20,000/-",
      "Amount actually invested",
      "Least of the amount actually invested OR Rs. 20,000/-",
    ],
    answer: "Least of the amount actually invested OR Rs. 20,000/-",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "Which mode of payment is not valid for the payment of any premium by the assessee for the health of his family and parents under section 80D?",
    options: [
      "Payment through the Crossed Cheque",
      "Payment through the Credit / Debit Card",
      "Payment through Online Banking",
      "Cash Payment",
    ],
    answer: "Cash Payment",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "An assessee can avail deduction under section 80D for the premium paid for the health of his family and his parents. What is the qualifying amount of deduction under section 80D?",
    options: [
      "Rs. 15,000/- for Self & Family + Rs. 15,000/- for Parents (if parents are senior citizen Rs. 20,000)",
      "Rs. 15,000/- for self & family + Rs. 10,000/- for Parents",
      "Rs. 10,000/- for self & family + Rs. 15,000/- for Parents",
      "Rs. 20,000/- for self & family + Rs. 20,000/- for Parents",
    ],
    answer:
      "Rs. 15,000/- for Self & Family + Rs. 15,000/- for Parents (if parents are senior citizen Rs. 20,000)",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "Expenses incurred for Medical treatment (including nursing), Training and Rehabilitation of a Dependent with disability is allowable deduction under section 80DD. What is the quantum of deduction?",
    options: [
      "Rs. 20,000/- for Ordinary disability and Rs. 30,000/- for severe disability",
      "Rs. 40,000/- for Ordinary disability and Rs. 60,000/- for severe disability",
      "Rs. 50,000/- for Ordinary disability and Rs. 75,000/- for severe disability",
      "Rs. 50,000/- for Ordinary disability and Rs. 1,00,000/- for severe disability",
    ],
    answer:
      "Rs. 50,000/- for Ordinary disability and Rs. 1,00,000/- for severe disability",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "Amount actually paid by the assessee for medical treatment of such disease and ailment as specified for self or for any dependent is allowable deduction under section 80DDB. What is the quantum of deduction?",
    options: [
      "Rs. 25,000/- (Rs.50,000 for senior citizen)",
      "Rs. 40,000/- (Rs.60,000 for senior citizen)",
      "Rs. 50,000/- (Rs.60,000 for senior citizen)",
      "Rs. 50,000/- (Rs.75,000 for senior citizen)",
    ],
    answer: "Rs. 40,000/- (Rs.60,000 for senior citizen)",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "Where an assessee has obtained “Education Loan” after 01/04/2006, for what portion of loan the deduction is available under section 80E on repayment of loan?",
    options: [
      "Repayment of Principal portion",
      "Repayment of Interest portion",
      "Repayment of both principal and interest",
      "No deduction is available at all",
    ],
    answer: "Repayment of Interest portion",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "What is the ceiling amount of donation made / qualifying amount under section 80G?",
    options: [
      "5 % of Gross Total Income",
      "10 % of Gross Total Income",
      "20% of Gross Total Income",
      "50% of Gross Total Income",
    ],
    answer: "10 % of Gross Total Income",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "Where an assessee is a developer of a “Special Economic Zone”, what will be quantum of deduction for the same under section 80IAB?",
    options: [
      "25 % of profit for first 10 years",
      "50 % of profit for 10 consecutive years out of 15 years",
      "75 % of profit for first 10 years",
      "100 % of profit for 10 consecutive years out of 15 years",
    ],
    answer: "100 % of profit for 10 consecutive years out of 15 years",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "Where a Primary Co.-op. Society has been engaged in supplying Milk, Oil, Seeds, Fruits and Vegetables grown by its member to specific bodies, what will be the amount of deduction for that Co. op. Society under section 80P?",
    options: [
      "50 % of Profit and Gains of such business",
      "60 % of Profit and Gains of such business",
      "75 % of Profit and Gains of such business",
      "100 % of Profit and Gains of such business",
    ],
    answer: "100 % of Profit and Gains of such business",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "If the total income of an Individual resident in India is less than Rs.1,00,000/-, what is the “rebate” in income tax available to him/her under section 88?",
    options: [
      "10% rebate in income tax payable",
      "25% rebate in income tax payable",
      "50% rebate in income tax payable",
      "100% rebate in income tax payable",
    ],
    answer: "100% rebate in income tax payable",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "Mr. Paresh Nandekar has paid premium for the health of his family and parents. Premium paid for Self & Faimly is Rs. 13,500/-. Premium paid for Parents is Rs. 22,500/-. His parents are senior citizens. Calculate the amount of deduction available to Mr. Nandekar under section 80D?",
    options: ["Rs. 13,500/-", "Rs. 22,500/-", "Rs. 36,000/-", "Rs. 33,500/-"],
    answer: "Rs. 33,500/-",
    chapter: 11,
    marks: 1,
  },
];
