var assert = require("assert");
var Hero = require("../models/hero")
var Quest = require("../models/quest")

describe("Hero", function() {
  var hero;
  var quest;

  beforeEach(function() {
    hero = new Hero("Georgio", "Kapusta")
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
})
