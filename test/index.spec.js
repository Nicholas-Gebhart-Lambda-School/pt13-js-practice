if (typeof exports !== "undefined") {
  var {
    fooBarBanana,
    listCharacterNames,
    findOnlyDeadCharacters,
    mostChallengesCompleted
  } = require("../index.js");
  var chai = require("chai");
  var characters = require("../data/data");
}

const expect = chai.expect;

const isFunction = func =>
  func && {}.toString.call(func) === "[object Function]";

describe("fooBarBanana()", () => {
  it("works as specified", () => {
    expect(fooBarBanana(["bar", "baz"], str => str + str)).to.equal("barbar");
    expect(fooBarBanana(["bar", "baz"], str => str[0])).to.equal("b");
  });
});

describe("listCharacterNames()", () => {
  it("returns an array of strings", () =>
    expect(
      listCharacterNames(characters).every(c => typeof c === "string")
    ).to.equal(true));
  it("works as specified", () => {
    const result = [
      "PenDora",
      "TaylorSwiftVEVO",
      "Dear_Santa_UA",
      "VaalMulliSpark",
      "Sliqs",
      "xVisco",
      "xdukanx",
      "Gigaways",
      "SasusiaTesusia",
      "Dollarmaker"
    ];

    expect(listCharacterNames(characters)).to.eql(result);
  });
});

describe("findOnlyDeadCharacters()", () => {
  it("works as specified", () => {
    expect(findOnlyDeadCharacters(characters).length).to.equal(3);
  });
});

describe("mostChallengesCompleted()", () => {
  it("works as specified", () => {
    expect(mostChallengesCompleted(characters)).to.equal(
      "VaalMulliSpark has completed the most challenges!"
    );
  });
});
