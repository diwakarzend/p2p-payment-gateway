export const vendorDetails = [
  {
    id: 12,
    brandName: "BHIM",
    registerCompany: "BHIM",
    createdDate: "2022-05-29T10:12:33",
    createdBy: null,
    updatedDate: "2022-05-29T10:12:33",
    updatedBy: null,
    isDeleted: null,
    isStatus: null,
    isPublished: null,
  },
  {
    id: 7,
    brandName: "PAYTM",
    registerCompany: "PAYTM",
    createdDate: "2022-05-29T10:12:31",
    createdBy: null,
    updatedDate: "2022-05-29T10:12:31",
    updatedBy: null,
    isDeleted: null,
    isStatus: null,
    isPublished: null,
  },
  {
    id: 8,
    brandName: "PHONEPE",
    registerCompany: "PHONEPE",
    createdDate: "2022-05-29T10:12:31",
    createdBy: null,
    updatedDate: "2022-05-29T10:12:31",
    updatedBy: null,
    isDeleted: null,
    isStatus: null,
    isPublished: null,
  },
  {
    id: 9,
    brandName: "GPAY",
    registerCompany: "GPAY",
    createdDate: "2022-05-29T10:12:31",
    createdBy: null,
    updatedDate: "2022-05-29T10:12:31",
    updatedBy: null,
    isDeleted: null,
    isStatus: null,
    isPublished: null,
  },
  {
    id: 10,
    brandName: "PAY2MOBILES",
    registerCompany: "PAY2MOBILES",
    createdDate: "2022-05-29T10:12:31",
    createdBy: null,
    updatedDate: "2022-05-29T10:12:31",
    updatedBy: null,
    isDeleted: null,
    isStatus: null,
    isPublished: null,
  },
  {
    id: 11,
    brandName: "RAZORPAY",
    registerCompany: "RAZORPAY",
    createdDate: "2022-05-29T10:12:31",
    createdBy: null,
    updatedDate: "2022-05-29T10:12:31",
    updatedBy: null,
    isDeleted: null,
    isStatus: null,
    isPublished: null,
  },
  {
    id: 6,
    brandName: "BHIM",
    registerCompany: "BHIM",
    createdDate: "2022-05-26T19:11:52",
    createdBy: null,
    updatedDate: "2022-05-26T19:11:52",
    updatedBy: null,
    isDeleted: null,
    isStatus: null,
    isPublished: null,
  },
  {
    id: 1,
    brandName: "PAYTM",
    registerCompany: "PAYTM",
    createdDate: "2022-05-26T19:11:49",
    createdBy: null,
    updatedDate: "2022-05-26T19:11:49",
    updatedBy: null,
    isDeleted: null,
    isStatus: null,
    isPublished: null,
  },
  {
    id: 2,
    brandName: "PHONEPE",
    registerCompany: "PHONEPE",
    createdDate: "2022-05-26T19:11:49",
    createdBy: null,
    updatedDate: "2022-05-26T19:11:49",
    updatedBy: null,
    isDeleted: null,
    isStatus: null,
    isPublished: null,
  },
  {
    id: 3,
    brandName: "GPAY",
    registerCompany: "GPAY",
    createdDate: "2022-05-26T19:11:49",
    createdBy: null,
    updatedDate: "2022-05-26T19:11:49",
    updatedBy: null,
    isDeleted: null,
    isStatus: null,
    isPublished: null,
  },
  {
    id: 4,
    brandName: "PAY2MOBILES",
    registerCompany: "PAY2MOBILES",
    createdDate: "2022-05-26T19:11:49",
    createdBy: null,
    updatedDate: "2022-05-26T19:11:49",
    updatedBy: null,
    isDeleted: null,
    isStatus: null,
    isPublished: null,
  },
  {
    id: 5,
    brandName: "RAZORPAY",
    registerCompany: "RAZORPAY",
    createdDate: "2022-05-26T19:11:49",
    createdBy: null,
    updatedDate: "2022-05-26T19:11:49",
    updatedBy: null,
    isDeleted: null,
    isStatus: null,
    isPublished: null,
  },
];

export const numberToWords = (number) => {
  var NS = [
    { value: 10000000, str: "Crore" },
    { value: 100000, str: "Lakh" },
    { value: 1000, str: "Thousand" },
    { value: 100, str: "Hundred" },
    { value: 90, str: "Ninety" },
    { value: 80, str: "Eighty" },
    { value: 70, str: "Seventy" },
    { value: 60, str: "Sixty" },
    { value: 50, str: "Fifty" },
    { value: 40, str: "Forty" },
    { value: 30, str: "Thirty" },
    { value: 20, str: "Twenty" },
    { value: 19, str: "Nineteen" },
    { value: 18, str: "Eighteen" },
    { value: 17, str: "Seventeen" },
    { value: 16, str: "Sixteen" },
    { value: 15, str: "Fifteen" },
    { value: 14, str: "Fourteen" },
    { value: 13, str: "Thirteen" },
    { value: 12, str: "Twelve" },
    { value: 11, str: "Eleven" },
    { value: 10, str: "Ten" },
    { value: 9, str: "Nine" },
    { value: 8, str: "Eight" },
    { value: 7, str: "Seven" },
    { value: 6, str: "Six" },
    { value: 5, str: "Five" },
    { value: 4, str: "Four" },
    { value: 3, str: "Three" },
    { value: 2, str: "Two" },
    { value: 1, str: "One" },
  ];

  var result = "";
  for (var n of NS) {
    if (number >= n.value) {
      if (number <= 99) {
        result += n.str;
        number -= n.value;
        if (number > 0) result += " ";
      } else {
        var t = Math.floor(number / n.value);
        // console.log(t);
        var d = number % n.value;
        if (d > 0) {
          return numberToWords(t) + " " + n.str + " " + numberToWords(d);
        } else {
          return numberToWords(t) + " " + n.str;
        }
      }
    }
  }
  return result;
};
