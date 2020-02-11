const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });
  
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });
});
describe("utils.getFullName", () => {
  test("returns Haruki Murakami when passed Haruki and Murakami", () => {
    expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
  });
});
describe("utils.makeHalfPrice", () => {
  test("returns price/2 ", () => {
    expect(utils.makeHalfPrice(100)).toBe(50);
  });
});
describe("utils.countBooks", () => {
  test("returns length of the array", () => {
    x = ["Mindset","Miracle","Morning"];
    expect(utils.countBooks(x)).toBe(3);
  });
});
describe("utils.isInStock", () => {
test("returns true if the title is in stock", () => {
  const book = {
    title: "The Stone Diaries",
    author: "Carol Shields",
    yearOfPublication: 1993,
    quantity: 9
  };

  expect(utils.isInStock(book)).toBe(true);
});
});
describe("utils.outOfStock", () => {
  test("returns true if the title is out of stock", () => {
    const book = {
      title: "The Stone Diaries",
      author: "Carol Shields",
      yearOfPublication: 1993,
      quantity: 0
    };
  
    expect(utils.outOfStock(book)).toBe(false);
  });
  });
  describe("utils.getTotalOrderPrice", () => {
    test("returns price of the book", () => {
      expect(utils.getTotalOrderPrice(18,2)).toBe(39.6);
    });
  });
