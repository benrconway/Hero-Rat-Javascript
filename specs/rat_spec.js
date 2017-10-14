var assert = require("assert");
var Food = require("../models/food");
var Rat = require("../models/rat");

describe("Rat", function () {
  var rat;
  var food;

  beforeEach(function () {
    rat = new Rat();
    food = new Food("Ham and Cheese Sandwich", 20);
  })

  it("should have a health counter", function () {
    assert.strictEqual(rat.health, 10);
  })

  it("should be able to make food poisonous", function () {
    rat.touchFood(food);
    assert.strictEqual(food.poisonous, true);
  })
})
