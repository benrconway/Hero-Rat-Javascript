var Quest = function (task, difficulty, urgency, reward) {
  this.task = task;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completionStatus = false;
}

Quest.prototype.completed = function () {
  this.completionStatus = true;
}

module.exports = Quest;
