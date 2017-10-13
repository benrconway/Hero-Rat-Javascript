var Quest = function (difficulty, urgency, reward) {
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completionStatus = false;
}

Quest.prototype.completed = function () {
  this.completionStatus = true;
}

module.exports = Quest;
