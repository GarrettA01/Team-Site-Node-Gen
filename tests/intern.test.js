const Intern = require("../lib/intern");

describe("Intern", () => {
  it("should fetch intern school with getSchool method", () => {
    const newb = new Intern("Broly", 66, "broly@gmail.com", "MSU");
    expect(newb.getSchool()).toEqual("MSU");
  });

  it("should return the role of intern with the getRole method", () => {
    const newb2 = new Intern("Bardock", 23, "bardock@gmail.com");
    expect(newb2.getRole()).toEqual("Intern");
  });
});
