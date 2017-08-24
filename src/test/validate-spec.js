const expect = require("chai").expect;
const describe = require("mocha").describe;
const it = require("mocha").it;

describe("Be welcome to Mocha", function () {
  it("with a failing test", function () {
    expect(false).to.be.equal(false);
  });
});
