var chapters = [
  //   { chapter: 1, title: "GST An Insight to Indirect Tax" },
  //   { chapter: 2, title: "Definitions" },
  //   { chapter: 3, title: "Administration" },
  //   { chapter: 4, title: "Levy Exemptions and Collection from Tax" },
  //   { chapter: 5, title: "Scope Time and Value of Supply" },
  //   { chapter: 6, title: "Place of supply of goods and services" },
  //   { chapter: 7, title: "Input Tax Credit" },
  //   { chapter: 8, title: "Transfer of Input Tax Credit" },
  //   { chapter: 9, title: "Registration" },
  { chapter: 10, title: "Tax invoice credit & debit notes" },
  { chapter: 11, title: "Returns" },
  { chapter: 12, title: "Payment of Tax" },
  { chapter: 13, title: "Refunds" },
  { chapter: 14, title: "Accounts And Records" },
  { chapter: 15, title: "Assessment" },
  { chapter: 16, title: "Appeals And Revision" },
  { chapter: 17, title: "Audit" },
  { chapter: 18, title: "Inspection Search Seizure and Arrest" },
  { chapter: 19, title: "Offences And Penalties" },
  { chapter: 20, title: "Prosecution and Compounding of Offences" },
  { chapter: 21, title: "Electronic commerce" },
  { chapter: 22, title: "Miscellaneous Provisions" },
  { chapter: 23, title: "Transitional Provisions" },
];

var allQuestionAnswers = [
  {
    question:
      "Invoice is a document which provides evidence as to existence of transaction of sale or purchase of goods.Which of the following statement relating to Tax Invoice is not corect?",
    options: [
      "A Tax invoice should have a unique consecutive serial number",
      "A Tax invoice  should contain HSN code of goods ",
      "A Tax invoice should specify  description, quantity and value of goods",
      "None of the options",
    ],
    answer: "None of the options",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "The Government may, on the recommendations of the Council, by notification, specify the categories of goods or supplies in respect of which a tax invoice shall be issued, within such time and in such manner as may be prescribed.Is the above statement corr",
    options: ["Yes", "No"],
    answer: "Yes",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "Invoice is a document which provides evidence as t the existence of transaction of sale or purchase of goods. A consolidated invoice may be issued at the end of the day if the value of each invoice is less than how much amount?",
    options: ["Rs.10 ", "Rs.100", "Rs.200", "Rs.500"],
    answer: "Rs.200",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "A registered person may, within how many months from the date of issuance of certificate of registration and in such manner as may be prescribed,issue a revised invoice against the invoice already issued during the period?",
    options: ["1", "2", "3", "4"],
    answer: "1",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "A registered person supplying exempted goods or services or both or paying tax shall issue, instead of a tax invoice",
    options: ["Duty challan", "a bill of supply ", "Credit note", "Debit note"],
    answer: "a bill of supply ",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "A registered person shall, on receipt of advance payment with respect to any supply of goods or services or both, issue which document evidencing receipt of such payment?",
    options: [
      "Duty challan",
      "a bill of supply ",
      "Receipt voucher",
      "Debit note",
    ],
    answer: "Receipt voucher",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "Where, on receipt of advance payment with respect to any supply of goods or services or both but subsequently no supply is made and no tax invoice is issued in pursuance thereof, the said registered person may issue to the person who had made the payment,",
    options: [
      "Duty challan",
      "a bill of supply ",
      "receipt voucher",
      "refund voucher",
    ],
    answer: "refund voucher",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "In case of continuous supply of goods, where successive statements of accounts or successive payments are involved, the invoice shall be issued before or at the time",
    options: [
      "each such statement is issued ",
      "each such payment is received",
      "Either of Option A or B",
      "Neither of option A and B",
    ],
    answer: "Either of Option A or B",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "Where the goods being sent or taken on approval for sale or return are removed before the supply takes place, the invoice shall be issued",
    options: [
      "before or at the time of supply ",
      "six months from the date of removal",
      "Either of Option A or B",
      "Neither of option A and B",
    ],
    answer: "Either of Option A or B",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "Credit and Debit notes are an important part of today’s business culture due to increased growth of credit sales and purchases.A document used to adjust or rectify errors made in a sales invoice which has already been processed and sent to a customer is c",
    options: [
      "debit note ",
      "credit note",
      "promissory note",
      "All of the options",
    ],
    answer: "credit note",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "When a buyer returns goods to the seller, he sends which note as an intimation to the seller of the amount and quantity being returned and requesting the return of money.",
    options: [
      "debit note ",
      "credit note",
      "promissory note",
      "All of the options",
    ],
    answer: "debit note ",
    chapter: 10,
    marks: 1,
  },
  {
    question:
      "Every registered person, other than an Input Service Distributor, a non-resident taxable person and a person paying tax shall furnish, electronically, in such form and manner as may be prescribed. What is the purpose of a return?",
    options: [
      "Mode of transfer of information to tax administrator",
      "Compliance verification program of tax administrator",
      "Providing necessary inputs for taking policy decision",
      "All of the options",
    ],
    answer: "All of the options",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "Every registered person, other than an Input Service Distributor, a non-resident taxable person and a person paying tax shall furnish, electronically, in such form and manner as may be prescribed on or before which day  of the month succeeding the said ta",
    options: ["7th", "8th", "9th", "10th"],
    answer: "10th",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "The registered person shall not be allowed to furnish the details of outward supplies during the period from the eleventh day to the",
    options: [
      "fifteenth day of the month succeeding the tax period",
      "sixteenth day of the month succeeding the tax period",
      "seventeenth day of the month succeeding the tax period",
      "eightened day of the month succeeding the tax period",
    ],
    answer: "fifteenth day of the month succeeding the tax period",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "Every registered person who has been communicated the details supplies modified, deleted or included by the recipient shall either accept or reject the details so communicated on or before the",
    options: [
      "tenth day, of the month succeeding the tax period",
      "twelth day, of the month succeeding the tax period",
      "fourtheenth day, of the month succeeding the tax period",
      "seventeenthday, of the month succeeding the tax period",
    ],
    answer: "seventeenthday, of the month succeeding the tax period",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "No rectification of error or omission in respect of the details furnished shall be allowed after furnishing of the",
    options: [
      "return for the month of September following the end of the financial year",
      "relevant annual return",
      "earlier of option A or B",
      "Neither of option A and B",
    ],
    answer: "earlier of option A or B",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "All registered taxable persons are required to furnish the details of outward supplies of goods and services effected during the tax period electronically. The expression “details of outward supplies” shall include details of",
    options: ["invoices", "debit notes", "credit notes", "All of the options"],
    answer: "All of the options",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "Every registered person, other than an Input Service Distributor or a non-resident taxable person or a person paying tax shall, for every calendar month or part thereof furnisha return, electronically, of inward and outward supplies on or before which day",
    options: ["5th", "10th", "15th ", "20th"],
    answer: "20th",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "A registered person paying tax shall, for each quarter or part thereof furnish a return, electronically, of turnover within how many days after the end of such quarter?",
    options: ["12", "14", "18", "21"],
    answer: "18",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "Every registered person required to deduct tax at source shall furnish a return, electronically for the month in which such deductions have been made within how many days after the end of such month?",
    options: ["5", "10", "15", "20"],
    answer: "10",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "Every taxable person registered as Input Service Provider shall, for every calendar month or part thereof furnisha return, electronically within how many days after the end of such month?",
    options: ["7", "13", "17", "20"],
    answer: "13",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "Every registered person who has made outward supplies in the period between the date on which he became liable to registration till the date on which registration has been granted shall declare the same in the which return furnished by him after grant of",
    options: ["first", "second", "annual ", "None of the options"],
    answer: "first",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "The details of every inward supply furnished by a registered person for a tax period shall, in such manner and within such time as may be prescribed be matched",
    options: [
      "with the corresponding details of outward supply ",
      "with the integrated goods and services tax paid ",
      "for duplication of claims of input tax credit",
      "All of the options",
    ],
    answer: "All of the options",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "Every registered person, other than an Input Service Distributor, a person paying tax, a casual taxable person and a non-resident taxable person,shall furnish an annual returnon or before",
    options: [
      "31st July following the end of such financial year",
      "30th September following the end of such financial year",
      "31st December following the end of such financial year",
      "31st March following the end of such financial year",
    ],
    answer: "31st December following the end of such financial year",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "Every registered person who is required to furnish a return and whose registration has been cancelledshall furnish a",
    options: ["first return", "final return", "annual return", "cancel return"],
    answer: "final return",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "Where a registered person fails to furnish a return a notice shall be issued requiring him to furnish such return within how many days in such form and manner as may be prescribed?",
    options: ["7", "12", "15", "20"],
    answer: "15",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "Any registered person who fails to furnish the details of outward or inward supplies by the due date shall pay a late fee of hw many rupees per day  for every day during which such failure continues?",
    options: ["100", "200", "300", "400"],
    answer: "100",
    chapter: 11,
    marks: 1,
  },
  {
    question:
      "On the common GSTN portal every registered taxpayer will have to maintain electronic register.The amount available in the electronic cash ledger may be used for making any payment towards&nbsp;",
    options: ["Tax", "Interest", "Penalties", "All of the options"],
    answer: "All of the options",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "Challan is generated electronically from GSTN common portal in all modes of payment.State whether the above statement is True or False",
    options: ["True", "False"],
    answer: "True",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "GST payment process provides facilitation for the tax payer by providing hassle free anytime, anywhere mode of payment of tax.Which of the following is liable to pay Tax?",
    options: [
      "supplier of goods ",
      "recipient on reverse charge basis",
      "Either of Option A or B",
      "Neither of option A and B",
    ],
    answer: "Either of Option A or B",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "GST payment process provides various advantages to the tax payer and registered person. Which of the following is an advantae of GST payment process?",
    options: [
      "Logical tax collection data in electronic format",
      "Speedy accounting and reporting",
      "Electronic reconciliation of all receipts",
      "All of the options",
    ],
    answer: "All of the options",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "Payment of tax by normal taxpayer is to be done on monthly basis by which day of the succeeding month?",
    options: ["5th", "10th", "15th", "20th"],
    answer: "20th",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "Cash payment will be first deposited in which ledger and the taxpayer shall debit the ledger while making payment in the monthly returns?",
    options: ["Cash", "Credit", "Liability", "Reserve"],
    answer: "Cash",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "Payment of tax by normal taxpayer is to be done on monthly basis.Payment of tax for the month of March shall be made by the",
    options: ["5th April", "10th April", "15th April", "20th April"],
    answer: "20th April",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "Payment of tax by normal taxpayer is to be done on monthly basis.Composition tax payers will have to make the tax payment on",
    options: [
      "monthly basis",
      "bi-monthly basis",
      "quarterly basis",
      "hal yearly basis",
    ],
    answer: "quarterly basis",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "Unless the supplier has paid the entire self assessed tax and filed the return and the recipient has filed his return, which of the following would not be confirmed?",
    options: [
      "Credit Note",
      "debit notes",
      "Input Tax Credit ",
      "Bill of supply",
    ],
    answer: "Input Tax Credit ",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "A taxable person who has not furnished a valid return shall not be allowed to utilize such credit till he discharges his self assessed tax liability. Is the above statement correct?",
    options: ["Yes", "No"],
    answer: "Yes",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "The input tax credit as self-assessed in the return of a registered person shall be credited to which electronic ledger?",
    options: ["Cash", "Credit", "Liability", "Reserve"],
    answer: "Credit",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "The amount available in the electronic cash ledger may be used for making any payment towards:",
    options: ["Tax", "Interest", "Penalty", "All of the options"],
    answer: "All of the options",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "The amount of input tax credit available in the electronic credit ledger of the registered person on account of integrated tax shall first be utilised towards payment of",
    options: [
      "Central tax",
      "State tax",
      "Integrated tax",
      "None of the options",
    ],
    answer: "Integrated tax",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "The amount of input tax credit available in the electronic credit ledger of the registered person on account of the central tax shall first be utilised towards payment of&nbsp;",
    options: [
      "Central tax",
      "State tax",
      "Integrated tax",
      "None of the options",
    ],
    answer: "Central tax",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "The amount of input tax credit available in the electronic credit ledger of the registered person on account of the State tax shall first be utilised towards payment of&nbsp;",
    options: [
      "Central tax",
      "State tax",
      "Integrated tax",
      "None of the options",
    ],
    answer: "State tax",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "Every taxable person shall discharge his tax and other dues under GST laws.The date of credit to the account of the Government in the authorised bank shall be deemed to be the date of",
    options: [
      "Deposit of cheque in the bank account",
      "Deposit in the electronic cash ledger",
      "Date of transfer from the bank account",
      "The due date of payment of tax",
    ],
    answer: "Deposit in the electronic cash ledger",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "Every person who is liable to pay tax, but fails to pay the tax or any part thereof to the Government within the period prescribed shall have to pay interest on upaid amount at such rate, not exceeding:",
    options: ["5%", "10%", "15%", "18%"],
    answer: "18%",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "If any deductor fails to furnish to the deductee the certificate after deducting the tax at source the deductor shall pay, by way of a late fee subject to a maximum amount of  Rupees",
    options: ["1000", "3000", "5000", "10000"],
    answer: "5000",
    chapter: 12,
    marks: 1,
  },
  {
    question:
      "A registered person I eligible to claim refund in certain cases. The term refund includes refund of tax on goods and/or services",
    options: [
      "exported out of India ",
      "input services used in the goods which are exported out of India \n",
      "regarded as deemed exports ",
      "All of the options",
    ],
    answer: "All of the options",
    chapter: 13,
    marks: 1,
  },
  {
    question:
      "If the registered taxable person is required to pay any tax, interest or penalty which has not been stayed by appellate authority/Tribunal/Court",
    options: [
      "Commissioner can withheld refund",
      "Commissioner can allow refund",
      "Commissioner can allow refund with indemnity",
      "Commissioner can allow refund with guarantee",
    ],
    answer: "Commissioner can withheld refund",
    chapter: 13,
    marks: 1,
  },
  {
    question:
      "Any person claiming refund of any tax and interest, if any, paid on such tax or any other amount paid by him may make an application before the expiry of how many years from the relevant date ?",
    options: ["1", "2", "3", "4"],
    answer: "2",
    chapter: 13,
    marks: 1,
  },
  {
    question:
      "A specialised agency of the United Nations Organisation or any Multilateral Financial Institution and Organisation notified under the United Nations (Privileges and Immunities) Act, 1947 entitled to a refund of tax may make an application for such refund",
    options: ["1", "3", "6", "12"],
    answer: "6",
    chapter: 13,
    marks: 1,
  },
  {
    question:
      "No refund of unutilised input tax credit shall be allowed in cases where the goods exported out of India are subjected to export duty.State whether the above statement is True or False.",
    options: ["True", "False"],
    answer: "True",
    chapter: 13,
    marks: 1,
  },
  {
    question:
      "The proper officer may in the case of any claim for refund on account of zero-rated supply of goods or services or both made by registered persons refund on a provisional basis how much percent of the total amount so claimed?",
    options: ["50", "75", "90", "100"],
    answer: "90",
    chapter: 13,
    marks: 1,
  },
  {
    question:
      "Where a refund is withheld the taxable person shall be entitled to interest at such rate  not exceeding how much per cent as may be notified on the recommendations of the Council?",
    options: ["3", "4", "5", "6"],
    answer: "6",
    chapter: 13,
    marks: 1,
  },
  {
    question:
      "A registered person is entitled to a tax refund . How ever no refund shall be paid to an applicant if the amount is less than Rs.",
    options: ["500", "1000", "2500", "5000"],
    answer: "1000",
    chapter: 13,
    marks: 1,
  },
  {
    question:
      "The Government or the authority specified by it shall maintain proper and separate account and other relevant records in relation to the Consumer Welfare Fund and prepare an annual statement of accounts in such form as may be prescribed in consultation wi",
    options: [
      "GST Practioner",
      "GSTN",
      "Union Finance Minister",
      "Comptroller and Auditor-General of India",
    ],
    answer: "Comptroller and Auditor-General of India",
    chapter: 13,
    marks: 1,
  },
  {
    question:
      "Every registered person shall keep and maintain a true and correct account of records as mentioned in the certificate of registration at:",
    options: [
      "principal place of business",
      "place where books and accounts are maintained",
      "place of address on record",
      "place where the registered person stays",
    ],
    answer: "principal place of business",
    chapter: 14,
    marks: 1,
  },
  {
    question:
      "Which of the following can permit  any class of taxable person who is not in a position to keep and maintain accounts in accordance with the provisions of this section,  to maintain accounts in such manner as may be prescribed?",
    options: ["Supplier ", "Recipient", "Proper Assessor", "Commissioner"],
    answer: "Commissioner",
    chapter: 14,
    marks: 1,
  },
  {
    question:
      "Every registered person shall keep and maintain at his principal place of business as mentioned in the certificate of registration, a true and correct account of:",
    options: [
      "production or manufacture of goods",
      "inward and outward supply of goods ",
      " input tax credit availed",
      "All of the options",
    ],
    answer: "All of the options",
    chapter: 14,
    marks: 1,
  },
  {
    question:
      "Where more than one place of business is specified in the certificate of registrationof registration, the accounts relating to each place of business shall be kept at such places of business. State whether the above statement is True or False.",
    options: ["True", "False"],
    answer: "True",
    chapter: 14,
    marks: 1,
  },
  {
    question:
      "•Every registered person whose turnover during a financial year exceeds the prescribed limit shall get his accounts audited by",
    options: [
      "Internal auditor",
      "Chief Financial Officer",
      "Chartered accountant ",
      "All of the options",
    ],
    answer: "Chartered accountant ",
    chapter: 14,
    marks: 1,
  },
  {
    question:
      "Every registered person required to keep and maintain books of account or other records shall retain them until the expiry of how many months from the due date of furnishing of annual return for the year pertaining to such accounts and records?",
    options: ["36", "60", "72", "120"],
    answer: "72",
    chapter: 14,
    marks: 1,
  },
  {
    question:
      "A registered person, who is a party to an appeal or revision or any other proceedings before any Appellate Authority or Revisional Authority or Appellate Tribunal or court shall retain the books of account and other records for a period of how many years",
    options: ["1", "2", "3", "4"],
    answer: "1",
    chapter: 14,
    marks: 1,
  },
  {
    question:
      "Where the taxable person is unable to determine the value of goods or services or both or determine the rate of tax applicable thereto, he may request the proper officer in writing giving reasons for payment of tax on a&nbsp;",
    options: [
      "Self assessment basis",
      "Provisional asssessment basis",
      "Scrutiny assessment basis",
      "BestJudegement basis",
    ],
    answer: "Provisional asssessment basis",
    chapter: 15,
    marks: 1,
  },
  {
    question:
      "The proper officer shall, within a period not exceeding how many months from the date of the communication of the orderpass the final assessment order after taking into account such information as may be required for finalizing the assessment.",
    options: ["3", "6", "9", "12"],
    answer: "6",
    chapter: 15,
    marks: 1,
  },
  {
    question:
      "Every registered taxable person shall himself assess the taxes payable and furnish a return for each tax paid. Such type of assessment is called",
    options: [
      "Self Assessment",
      "Provisional Assessment",
      "Best Judgement Assessment",
      "Srutiny Assessment",
    ],
    answer: "Self Assessment",
    chapter: 15,
    marks: 1,
  },
  {
    question:
      "The proper officer may scrutinize the return and related particulars furnished by the registered person to verify the correctness of the return and inform him of the discrepancies noticed. The registered person has to provide satisfactoy explanation withi",
    options: ["30", "60", "90", "120"],
    answer: "30",
    chapter: 15,
    marks: 1,
  },
  {
    question:
      "The best judgment assessment order passed by the Proper Officer shall automatically stand withdrawn if the taxable person furnishes a valid return for the default period within how many days of the receipt of the best judgement assessment order?",
    options: ["30", "60", "90", "120"],
    answer: "30",
    chapter: 15,
    marks: 1,
  },
  {
    question:
      "Where a registered person fails to furnish the return even after the service of a notice the proper officer may proceed to assess the tax liability of the said person and issue an assessment order within a period of how many years from the date for furnis",
    options: ["1", "3", "5", "7"],
    answer: "5",
    chapter: 15,
    marks: 1,
  },
  {
    question:
      "The proper officer may, on any evidence showing a tax liability of a person coming to his notice, with the previous permission of Additional Commissioner or Joint Commissioner, proceed to assess the tax liability of such person to protect the interest of",
    options: [
      "Self Assessment",
      "Summary Assessment",
      "Best Judgement Assessment",
      "None of the options",
    ],
    answer: "Summary Assessment",
    chapter: 15,
    marks: 1,
  },
  {
    question:
      "On an application made by the taxable person within thirty days from the date of receipt of order passed under GST Act or on his own motion, who may \nwithdraw such order if he considers that such order is erroneous?",
    options: [
      "Proper Officer",
      "Joint Commissioner ",
      "Appelate Tribunal",
      "High Court",
    ],
    answer: "Joint Commissioner ",
    chapter: 15,
    marks: 1,
  },
  {
    question:
      "Any person aggrieved by any decision or order passed under GST Act by an adjudicating authority may appeal to such Appellate Authority within how many months from the date on which the said decision or order is communicated to such person?",
    options: ["1", "3", "6", "12"],
    answer: "3",
    chapter: 16,
    marks: 1,
  },
  {
    question:
      "The Appellate Authority may, if sufficient cause is shown at any stage of hearing of an appeal, grant time to the parties and adjourn the hearing of the appeal. No such adjournment shall be granted more than how many times during hearing of the appeal?",
    options: ["1", "3", "5", "7"],
    answer: "3",
    chapter: 16,
    marks: 1,
  },
  {
    question:
      "The Appellate Authority shall where it is possible to do so hear and decide every appeal within a period of how many years from the date on which it is filed?",
    options: ["1", "2", "3", "4"],
    answer: "1",
    chapter: 16,
    marks: 1,
  },
  {
    question:
      "The Revisional Authority may call for and examine the record of any proceedings and he may, if necessary can have powers to do which of the following?",
    options: [
      "stay the operation of such decision",
      "order for such period as he deems fit ",
      "pass such order, as he thinks just ",
      "Either of the options",
    ],
    answer: "Either of the options",
    chapter: 16,
    marks: 1,
  },
  {
    question:
      "The Revisional Authority may pass an order on any point which has not been raised and decided in an appeal before the expiry of a period of",
    options: [
      "one year from the date of the order ",
      "expiry of a period of three years",
      "whichever is later of option A and B",
      "Neither of the bove",
    ],
    answer: "whichever is later of option A and B",
    chapter: 16,
    marks: 1,
  },
  {
    question:
      "The National Bench of the Appellate Tribunal shall be situated at New Delhi which shall be presided over by the",
    options: ["President", "Chairperson", "Commissioner", "Chief Justice"],
    answer: "President",
    chapter: 16,
    marks: 1,
  },
  {
    question:
      "On receipt of notice that an appeal has been preferred the party against whom the appeal has been preferred may within how many days of the receipt of notice file a memorandum of cross-objections?",
    options: ["15", "30", "45", "60"],
    answer: "45",
    chapter: 16,
    marks: 1,
  },
  {
    question:
      "Any person who is entitled or required to appear before an officer appointed under GST Act appear by an authorised representative.A person authorised by the person to appear on his behalf can be :",
    options: [
      "his relative or regular employee",
      "an advocate who is entitled to practice in any court in India",
      "any  company secretary, who holds a certificate of practice ",
      "All of the options",
    ],
    answer: "All of the options",
    chapter: 16,
    marks: 1,
  },
  {
    question:
      "Any person aggrieved by any order passed by the State Bench or Area Benches of the Appellate Tribunal may file an appeal to the High Court.The High Court may admit such appeal if case involves a",
    options: [
      "substantial question of law",
      "substantial question of breach of trust",
      "substantial question of revenue leakage",
      "substantial question of injustice",
    ],
    answer: "substantial question of law",
    chapter: 16,
    marks: 1,
  },
  {
    question:
      "No appeal shall lie against any decision taken or order passed by an officer of central tax if such decision taken or order passed relates to",
    options: [
      "an order of the Commissioner to direct transfer of proceedings ",
      "an order pertaining to the seizure or retention of books of account",
      "an order sanctioning prosecution under GST Act",
      "All of the options",
    ],
    answer: "All of the options",
    chapter: 16,
    marks: 1,
  },
  {
    question:
      "If the taxable person does not provide a satisfactory explanation within 30 days of being informed the Proper Officer may take recourse to",
    options: [
      "Proceed to conduct audit",
      "Direct the conduct of a special audit",
      "Undertake procedures of inspection",
      "Any of the options",
    ],
    answer: "Any of the options",
    chapter: 17,
    marks: 1,
  },
  {
    question:
      "The Commissioner or any officer authorised by him by way of a general or a specific order may undertake audit of any registered person. The registered person shall be informed by way of a notice not less than how many days prior to the conduct of audit in",
    options: ["5", "10", "15", "20"],
    answer: "15",
    chapter: 17,
    marks: 1,
  },
  {
    question:
      "The Commissioner or any officer authorised by him by way of a general or a specific order may undertake audit of any registered person.The audit shall be completed within a period of how many months from the date of commencement of the audit?",
    options: ["1", "3", "6", "12"],
    answer: "3",
    chapter: 17,
    marks: 1,
  },
  {
    question:
      "If at any stage of scrutiny, inquiry, investigation or any other proceedings any officer not below the rank of Assistant Commissioner having regard to complexity of the case and the interest of revenue may,with the prior approval of the Commissioner direc",
    options: [
      "get his records examined and audited by a chartered accountant ",
      "get a provisional assessment by a proper officer",
      "pay tax and penalty",
      "All of the options",
    ],
    answer: "get his records examined and audited by a chartered accountant ",
    chapter: 17,
    marks: 1,
  },
  {
    question:
      "Where the special audit conducted results in detection of tax not paid or short paid or erroneously refunded, or input tax credit wrongly availed or utilised who my intiate a action againt the registered person?",
    options: [
      "Proper Officer",
      "Appelate Tribunal",
      "Commisioner",
      "Appelate Authority",
    ],
    answer: "Proper Officer",
    chapter: 17,
    marks: 1,
  },
  {
    question:
      "The proper officer, not below the rank of Joint Commissioner can authorise in writing to inspect any places of business of the taxable person if he believes a taxable person has:",
    options: [
      "suppressed any transaction relating to supply",
      "claimed input tax credit in excess of his entitlement",
      "suppressed stock of goods in hand",
      "All of the options",
    ],
    answer: "All of the options",
    chapter: 18,
    marks: 1,
  },
  {
    question:
      "Proper officer, not below the rank of Joint Commissioner can either pursuant to an inspection carried out or otherwise has reasons to believe that any goods liable to confiscation or any documents or books or things, which in his opinion shall be useful f",
    options: ["inspection", "search", "search and seizure", "arrest"],
    answer: "search and seizure",
    chapter: 18,
    marks: 1,
  },
  {
    question:
      "After the completion of search, all the officers and the witness should again offer themselves for personal search. State whether the above statement is Tue or False.",
    options: ["True", "False"],
    answer: "True",
    chapter: 18,
    marks: 1,
  },
  {
    question:
      "Which is an act of taking possession of the property by an officer under legal process. It generally implies taking possession forcibly contrary to the wishes of the owner of the property",
    options: ["inspection", "search", " seizure", "arrest"],
    answer: " seizure",
    chapter: 18,
    marks: 1,
  },
  {
    question:
      "Denial of access to the owner of the property or the person who possess the property at a particular point of time by a legal order/notice is called",
    options: ["inspection", "search", " seizure", "detention"],
    answer: "detention",
    chapter: 18,
    marks: 1,
  },
  {
    question:
      "For seized goods, if a notice is not issued within how many days of seizure, goods shall be returned to the person from whose possession it was seized?",
    options: ["15", "30", "60", "120"],
    answer: "60",
    chapter: 18,
    marks: 1,
  },
  {
    question:
      "The person from whose custody any documents are seized shall be entitled to make copies thereof or take extracts therefrom in the presence of an authorised officer at such place and time as such officer may indicate . Is the above statement correct?",
    options: ["Yes", "No"],
    answer: "Yes",
    chapter: 18,
    marks: 1,
  },
  {
    question:
      "Where a taxable person who supplies any goods or services or both without issue of any invoice or issues an incorrect or false invoice with regard to any such supply, he shall be liable to pay a penalty of",
    options: ["Rs.1000", "Rs.5000", "Rs.10000", "Rs.25000"],
    answer: "Rs.10000",
    chapter: 19,
    marks: 1,
  },
  {
    question:
      "Any registered person who supplies any goods or services or both on which any tax has not been paid or short-paid or erroneously refunded, or where the input tax credit has been wrongly availed or utilised for any reason, other than the reason of fraud sh",
    options: [
      "ten thousand rupees ",
      "ten per cent. of the tax due ",
      "higher of Option A or B",
      "Neither of option A and B",
    ],
    answer: "higher of Option A or B",
    chapter: 19,
    marks: 1,
  },
  {
    question:
      "Any registered person who supplies any goods or services or both on which any tax has not been paid or short-paid or erroneously refunded, or where the input tax credit has been wrongly availed or utilised for reason of fraud shall be liable to a penalty",
    options: [
      "ten thousand rupees ",
      " tax due ",
      "higher of Option A or B",
      "Neither of option A and B",
    ],
    answer: "higher of Option A or B",
    chapter: 19,
    marks: 1,
  },
  {
    question:
      "Any person who fails to appear before the officer of central tax, when issued with a summon for appearance to give evidence or produce a document in an inquiry shall be liable to a penalty which may extend to",
    options: ["Rs.5000", "Rs.15000", "Rs.20000", "Rs.25000"],
    answer: "Rs.25000",
    chapter: 19,
    marks: 1,
  },
  {
    question:
      "Any person, who contravenes any of the provisions of GST Act or any rules made thereunder for which no penalty is separately provided for in GST Act shall be liable to a penalty which may extend to",
    options: ["Rs.5000", "Rs.15000", "Rs.20000", "Rs.25000"],
    answer: "Rs.25000",
    chapter: 19,
    marks: 1,
  },
  {
    question:
      "The penalty imposed shall depend on the facts and circumstances of each case and shall be commensurate with the degree and severity of the breach.State whether the above statement is True or False.",
    options: ["True", "False"],
    answer: "True",
    chapter: 19,
    marks: 1,
  },
  {
    question:
      "Where any person transports any goods or stores any goods while they are in transit in contravention of the provisions of GST Act all such goods and conveyance used as a means of transport for carrying the said goods and documents relating to such goods a",
    options: [
      "Seizure",
      "Detention",
      "Either of Option A or B",
      "Neither of option A and B",
    ],
    answer: "Either of Option A or B",
    chapter: 19,
    marks: 1,
  },
  {
    question:
      "After detention or seizure, the goods may be released where the owner of the goods comes forward for payment of such tax and penalty equal to",
    options: [
      "fifty per cent. of the tax payable on such goods ",
      "seventy five per cent. of the tax payable on such goods ",
      "one hundred per cent. of the tax payable on such goods ",
      "two hundred per cent. of the tax payable on such goods ",
    ],
    answer: "one hundred per cent. of the tax payable on such goods ",
    chapter: 19,
    marks: 1,
  },
  {
    question:
      "After detention or seizure, the goods may be released where the owner of the goods does not come forward for payment of such tax and penalty equal to",
    options: [
      "fifty per cent. of the tax payable on such goods ",
      "seventy five per cent. of the tax payable on such goods ",
      "one hundred per cent. of the tax payable on such goods ",
      "two hundred per cent. of the tax payable on such goods ",
    ],
    answer: "fifty per cent. of the tax payable on such goods ",
    chapter: 19,
    marks: 1,
  },
  {
    question:
      "Prosecution means institution and carrying on of the legal proceedings against a person. Which of the following are Offences which Warrant Prosecution?",
    options: [
      "supplies without issue of any invoice",
      " issues any invoice or bill without supply",
      "avails input tax credit wrongly without receiving actual supply",
      "All of the options",
    ],
    answer: "All of the options",
    chapter: 20,
    marks: 1,
  },
  {
    question:
      "Where any person convicted of an offence  is again convicted of an offence then, he shall be punishable for the second and for every subsequent offence in addition to fine with imprisonment for a term which may extend",
    options: ["1 year", "3years", "5years", "7years"],
    answer: "5years",
    chapter: 20,
    marks: 1,
  },
  {
    question:
      "The expression “culpable mental state” includes intention, motive, knowledge of a fact, and belief in, or reason to believe, a fact. In any prosecution for an offence which requires a culpable mental state the court shall",
    options: [
      "presume the existence of such mental state ",
      "not presume the existence of such mental state ",
      "not give a chance to defence to prove the fact that he had no such mental state",
      "Niether of the options",
    ],
    answer: "presume the existence of such mental state ",
    chapter: 20,
    marks: 1,
  },
  {
    question:
      "Where an offence committed by a person is a company only few  person who, at the time the offence was committed was in charge of, and was responsible to, the company shall be deemed to be guilty of the offence . State whether the above statement is True o",
    options: ["True", "False"],
    answer: "False",
    chapter: 20,
    marks: 1,
  },
  {
    question:
      "Any offence either before or after the institution of prosecution can be compounded. Compounding allowed once shall not be allowed again if in the previous compounding case, was in respect of supplies of value exceeding",
    options: ["Rs.1 crore", "Rs. 2 crore", "Rs.3 crore", "Rs.4 crore"],
    answer: "Rs.1 crore",
    chapter: 20,
    marks: 1,
  },
  {
    question:
      "Electronic commerce means the supply of goods or services or both, including digital products over digital or electronic network.A person supplying goods/services on his own account can be considered as a Electronic Commerce Operator. Is the above stateme",
    options: ["Yes", "No"],
    answer: "No",
    chapter: 21,
    marks: 1,
  },
  {
    question:
      "Which of the following means a person who owns and manages an electronic platform and by means of the application and communication device enables a potential customer to connect with the persons providing service of a particular kind ?",
    options: [
      "Finteck",
      "Aggregator",
      "Gateway",
      "Tech and Communication disrupter",
    ],
    answer: "Aggregator",
    chapter: 21,
    marks: 1,
  },
  {
    question:
      "Every electronic commerce operator not being an agent, shall collect a certain amount of net value of taxable supplies made through it by other suppliers.\nThe amount collected shall be paid to the Government within how many days after the end of the month",
    options: ["5", "10", "15", "20"],
    answer: "10",
    chapter: 21,
    marks: 1,
  },
  {
    question:
      "Every Electronic Commerce operator who collects the amount shall furnish a statement, electronically containing the details of outward supplies of goods or services  or both effected through it and the amount collected during a month within how many days",
    options: ["5", "10", "15", "20"],
    answer: "10",
    chapter: 21,
    marks: 1,
  },
  {
    question:
      "The supplier who has supplied the goods or services or both through the electronic commerce operator shall claim credit of the amount collected and reflected in the statement of the operator in his",
    options: [
      "electronic cash ledger",
      "books of account",
      "bank account",
      "input Tax receivables account",
    ],
    answer: "electronic cash ledger",
    chapter: 21,
    marks: 1,
  },
  {
    question:
      "Every registered person would be assigned a goods and services tax compliance rating score by the Central Government based on his record of compliance of the provisions of GST Act. GST compliance rating score may take into consideration which of the follo",
    options: [
      "Regulaity in payment of GST ",
      "Filing of returns",
      "Maintenance of accounts and records",
      "All of the options",
    ],
    answer: "All of the options",
    chapter: 22,
    marks: 1,
  },
  {
    question:
      "Where the Commissioner, or an officer authorised by him in this behalf considers that the information furnished in the information return is defectivehe may intimate the defect to the person and give him how many days to rectify the defect?",
    options: ["10", "20", "30", "45"],
    answer: "30",
    chapter: 22,
    marks: 1,
  },
  {
    question:
      "No information of any individual return or part thereof without the previous consent in writing of the concerned person or his authorised representative be published in such manner so as to enable such particulars to be identified as referring to a partic",
    options: ["Yes", "No"],
    answer: "Yes",
    chapter: 22,
    marks: 1,
  },
  {
    question:
      "All particulars contained in any statement made, return furnished or accounts or documents produced in accordance with GST Act shall, not be disclosed except",
    options: [
      "for the purpose of any prosecution under the Indian Penal Code ",
      "provision of particulars to the Central Government or to any person acting in the implementation of GST Act",
      "disclosure is occasioned by the lawful exercise under GST Act of any process for the service of any notice ",
      "All of the options",
    ],
    answer: "All of the options",
    chapter: 22,
    marks: 1,
  },
  {
    question:
      "Any authority, who has passed or issued any decision or order or notice or certificate or any other document may rectify any error which is apparent on the face of record  within a period of how many months from the date of issue of such decision?",
    options: ["3", "6", "9", "12"],
    answer: "3",
    chapter: 22,
    marks: 1,
  },
  {
    question:
      "Any authority, who has passed or issued any decision or order or notice or certificate or any other document may rectify any error which is apparent on the face of record. No such rectification shall be done after a period of how many months from the date",
    options: ["3", "6", "9", "12"],
    answer: "6",
    chapter: 22,
    marks: 1,
  },
  {
    question:
      "The amount of tax, interest, penalty, fine or any other sum payable, and the amount of refund or any other sum due, under the provisions of GST Act shall be rounded off to the nearest",
    options: ["Rupee", "hundred", "thousand", "lakh"],
    answer: "Rupee",
    chapter: 22,
    marks: 1,
  },
  {
    question:
      "All persons appointed by the respective Governments for discharging various functions under the Central/State laws relating to goods and services(which are being subsumed in GST)and continuing in the office on the appointed day shall be deemed to have bee",
    options: ["True", "False"],
    answer: "True",
    chapter: 23,
    marks: 1,
  },
  {
    question:
      "On and from the appointed day every person registered under any of the existing laws and having a valid Permanent Account Number shall be issued a certificate of registration on provisional basis.The certificate of registration shall be valid for a period",
    options: ["3 months", "6 months", "9 months", "12 months"],
    answer: "6 months",
    chapter: 23,
    marks: 1,
  },
  {
    question:
      "Where, in pursuance of a contract entered into prior to the appointed day, the price of any goods or services or both is revised upwards on or after the appointed day. The registered person who had removed or provided such goods or services or both shall",
    options: ["debit note ", "promissory note", "credit note", "upward note"],
    answer: "debit note ",
    chapter: 23,
    marks: 1,
  },
];
