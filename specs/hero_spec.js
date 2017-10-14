var assert = require("assert");
var Hero = require("../models/hero")
var Quest = require("../models/quest")
var Food = require("../models/food")

describe("Hero", function() {
  var hero;
  var quest;
  var food;
  var favFood;

  beforeEach(function() {
    hero = new Hero("Georgio", "Kapusta")
    quest = new Quest("Eat your favourite food.", "easy", 1, "A shiny new hat");
    food = new Food("Ham and Cheese Sandwich", 20);
    favFood = new Food("Kapusta", 20);
  })

  it("should have a name", function() {
    assert.strictEqual(hero.name, "Georgio");
  })

  it("should have a starting health of 100", function() {
    assert.strictEqual(hero.health, 100);
  })

  it("should have a favourite food", function() {
    assert.strictEqual(hero.favouriteFood, "Kapusta");
  })

  it("should be able to say its name", function() {
    assert.strictEqual(hero.speak(), "Hi, my name is Georgio!");
  })

  it("should have an empty collection of quests to begin with", function(){
    assert.strictEqual(hero.questLog.length, 0);
  })

  it("can add quests to its log", function () {
    hero.takeQuest(quest);
    assert.strictEqual(hero.questLog.length, 1);
  })

  it("can place food into it's backpack", function () {
    hero.takeItem(food);
    assert.strictEqual(hero.backpack.length, 1);
  })

  it("can eat food to replenish health", function () {
    hero.takeItem(food);
    hero.eat(food);
    assert.strictEqual(hero.health, 120);
  })

  it("can regain more health by eating it's favourite food", function () {
    hero.takeItem(favFood);
    hero.eat(favFood);
    assert.strictEqual(hero.health, 130);
  })

  it("cannot eat without first having it in it's backpack", function () {
    hero.eat(food);
    assert.strictEqual(hero.health, 100);
  })

})
