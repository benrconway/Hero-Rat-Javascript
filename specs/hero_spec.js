var assert = require("assert");
var Hero = require("../models/hero")
var Quest = require("../models/quest")
var Food = require("../models/food")
var Rat = require("../models/rat")

describe("Hero", function() {
  var hero;
  var quest1;
  var quest2;
  var food;
  var favFood;
  var rat;

  beforeEach(function() {
    hero = new Hero("Georgio", "Kapusta")
    quest1 = new Quest("Eat your favourite food.", 1, 1, "A shiny new hat");
    quest2 = new Quest("Kill a Rat", 3, 2, "Ancient scroll of Power");
    food = new Food("Ham and Cheese Sandwich", 20);
    favFood = new Food("Kapusta", 20);
    rat = new Rat();
  });

  it("should have a name", function() {
    assert.strictEqual(hero.name, "Georgio");
  });

  it("should have a starting health of 100", function() {
    assert.strictEqual(hero.health, 100);
  });

  it("should have a favourite food", function() {
    assert.strictEqual(hero.favouriteFood, "Kapusta");
  });

  it("should be able to say its name", function() {
    assert.strictEqual(hero.speak(), "Hi, my name is Georgio!");
  });

  it("should have an empty collection of quests to begin with", function(){
    assert.strictEqual(hero.questLog.length, 0);
  });

  it("can add quests to its log", function () {
    hero.takeQuest(quest1);
    assert.strictEqual(hero.questLog.length, 1);
  });

  it("can place food into it's backpack", function () {
    hero.takeItem(food);
    assert.strictEqual(hero.backpack.length, 1);
  });

  it("can eat food to replenish health", function () {
    hero.takeItem(food);
    hero.eat(food);
    assert.strictEqual(hero.health, 120);
  });

  it("can regain more health by eating it's favourite food", function () {
    hero.takeItem(favFood);
    hero.eat(favFood);
    assert.strictEqual(hero.health, 130);
  });

  it("cannot eat without first having it in it's backpack", function () {
    hero.eat(food);
    assert.strictEqual(hero.health, 100);
  });

  it("will lose health by eating poisonous food", function () {
    rat.touchFood(food);
    hero.takeItem(food);
    hero.eat(food);
    assert.strictEqual(hero.health, 90);
  });

  it("can display quest log by level of difficulty", function () {
    hero.takeQuest(quest1);
    hero.takeQuest(quest2);
    var resultArray = hero.questLogBy("difficulty")
    var expectedArray = [quest2, quest1];
    assert.deepEqual(resultArray, expectedArray);
  });

  it("can display quest log by level of urgency", function () {
    hero.takeQuest(quest1);
    hero.takeQuest(quest2);
    var resultArray = hero.questLogBy("urgency")
    var expectedArray = [quest2, quest1];
    assert.deepStrictEqual(resultArray, expectedArray);
  });

  it("can display quest log by level of reward", function () {
    hero.takeQuest(quest1);
    hero.takeQuest(quest2);
    var resultArray = hero.questLogBy("reward")
    var expectedArray = [quest1, quest2];
    assert.deepStrictEqual(resultArray, expectedArray);
  });

  it("can view a list of completed quests", function () {
    quest1.completed();
    hero.takeQuest(quest1);
    hero.takeQuest(quest2);
    var result = hero.completedQuests();
    assert.deepStrictEqual(result, [quest1])
  });

  it("can view a list of incomplete quests", function () {
    hero.takeQuest(quest1);
    hero.takeQuest(quest2);
    var result = hero.incompleteQuests();
    assert.deepStrictEqual(result, [quest1, quest2])
  });

});
