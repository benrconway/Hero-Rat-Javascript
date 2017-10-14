var Hero = function(name, favouriteFood) {
  this.name = name;
  this.health = 100;
  this.favouriteFood = favouriteFood;
  this.questLog = [];
  this.backpack = [];

};

Hero.prototype.speak = function() {
  return "Hi, my name is " + this.name + "!"
};

Hero.prototype.takeItem = function(item) {
  this.backpack.push(item);
}

Hero.prototype.eat = function(food) {
  if(this.hasFood(food)){
  var replenishmentValue = this.checkFood(food);
  this.health += replenishmentValue;
  this.backpack.splice(this.backpack.indexOf(food), 1);
  }
};

Hero.prototype.hasFood = function(food){
  return this.backpack.includes(food);
}

Hero.prototype.checkFood = function(food) {
    var foodToCheck = food.name.toLowerCase();
    var favourite = this.favouriteFood.toLowerCase();
    if( foodToCheck === favourite){
      return food.replenishmentValue * 1.5;
    }
    return food.replenishmentValue;
};

Hero.prototype.takeQuest = function(quest) {
  this.questLog.push(quest);
};

Hero.prototype.questLogBy = function (category) {
  var byDifficulty = function (a, b) {
    return b.difficulty - a.difficulty;
  }
  var byUrgency = function(a , b) {
    return b.urgency - a.urgency;
  }
  var byReward = function(a , b) {
    return b.reward - a.reward;
  }

  if(category === "difficulty") {
    var result = this.questLog.sort(byDifficulty);
    return result;
  }
  if(category === "urgency") {
    var result = this.questLog.sort(byUrgency);
    return result;
  }
  if(category === "reward"){
    var result = this.questLog.sort(byReward);
    return result;
  }

};

Hero.prototype.completedQuests = function () {
  var completedQuests = [];

  var completed = function(quest) {
    if(quest.completionStatus !== false) {
      completedQuests.push(quest);
    }
  }

  this.questLog.filter(completed);
  return completedQuests;
};

Hero.prototype.incompleteQuests = function () {
  var incompleteQuests = [];
  var incomplete = function(quest) {
    if(quest.completionStatus === false) {
      incompleteQuests.push(quest);
    }
  }
  this.questLog.filter(incomplete);
  return incompleteQuests;
};


module.exports = Hero;
