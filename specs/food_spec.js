var assert = require("assert");
var Food = require("../models/food");

describe("Food", function () {
  var food;

  beforeEach(function () {
    food = new Food("Kapusta", 20);
  })

  it("should have a name", function () {
    assert.strictEqual(food.name, "Kapusta");
  })

  it("should have a replenishment value", function () {
    assert.strictEqual(food.replenishmentValue, 20);
  })

})
