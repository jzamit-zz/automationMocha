const assert = require("assert");
const describe = require("mocha").describe;
const it = require("mocha").it;

describe("Be welcome to Mocha", () => {
  it("with a failing test", () => {
    assert(false, "Hello World");
  });
});
