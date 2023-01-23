const Employee = require("../lib/employee");

describe("Employee", () => {
  it("should fetch employee name with getName method", () => {
    const newb = new Employee("Garrett", 17, "gman.anderson2001@gmail.com");
    expect(newb.getName()).toEqual("Garrett");
  });

  it("should fetch employee id with getId method", () => {
    const newb2 = new Employee("Jack", 29, "jack@gmail.com");
    expect(newb2.getId()).toEqual(29);
  });

  it("should fetch employee email with getEmail method", () => {
    const newb3 = new Employee("Heather", 87, "heather@gmail.com");
    expect(newb3.getEmail()).toEqual("heather@gmail.com");
  });

  it("should return the role of employee with the getRole method", () => {
    const newb4 = new Employee("Ethan", 24, "ethan@gmail.com");
    expect(newb4.getRole()).toEqual("Employee");
  });
});
