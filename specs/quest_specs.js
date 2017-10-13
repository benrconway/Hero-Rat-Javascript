var assert = require("assert");
var Quest = require("../models/quest");

describe("Quest", function () {
  var quest;

  beforeEach(function () {
    quest = new Quest("easy", 1, "Ancient Scroll of Power");
  })

  it("should have a difficulty level", function () {
    assert.strictEqual(quest.difficulty, "easy");
  })

  it("should have an urgency level", function () {
    assert.strictEqual(quest.urgency, 1);
  })

  it("should have a reward", function () {
    assert.strictEqual(quest.reward, "Ancient Scroll of Power");
  })

  it("should have a completion indicator start as false", function () {
    assert.strictEqual(quest.completionStatus, false);
  })

  it("should be able to marked completed", function () {
    quest.completed();
    assert.strictEqual(quest.completionStatus, true);
  })
})
