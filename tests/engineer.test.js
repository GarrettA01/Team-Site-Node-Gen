const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  it("should fetch engineer's github url with the getGithub method", () => {
    const newb = new Engineer("Gogeta", 67, "gogeta@gmail.com", "myGithub");
    expect(newb.getGithub()).toEqual("myGithub");
  });

  it("should read engineers role as engineer using the getRole function", () => {
    const newb2 = new Engineer(
      "Vegito",
      19,
      "vegito@gmail.com",
      "vegitoGithub"
    );
    expect(newb2.getRole()).toEqual("Engineer");
  });
});
