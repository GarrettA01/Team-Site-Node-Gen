const Manager = require("../lib/manager");

describe("Manager", () => {
  it("should fetch manager office number with getOfficeNumber method", () => {
    const newb = new Manager("Shrek", 90, "shrek@gmail.com", 2);
    expect(newb.getOfficeNumber()).toEqual(2);
  });

  it("should return the role of manager with the getRole method", () => {
    const newb2 = new Manager("Donkey", 93, "donkey@gmail.com");
    expect(newb2.getRole()).toEqual("Manager");
  });
});
