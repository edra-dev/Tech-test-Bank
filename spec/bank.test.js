const printStatement = require("../lib/bank.js");

test("Client prints bank statement titles", () => {
  expect(printStatement()).toEqual("date || credit || debit || balance");
});
