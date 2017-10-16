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
};

Hero.prototype.eat = function(food) {
  if(this.hasFood(food)){
  var modifier = this.checkFood(food);
  this.health += modifier;
  this.backpack.splice(this.backpack.indexOf(food), 1);
  }
};

Hero.prototype.hasFood = function(food){
  return this.backpack.includes(food);
};

Hero.prototype.checkFood = function(food) {
  var healthGain = 0;
  if(!food.poisonous && this.checkForFavouritism(food)) {
      healthGain = food.replenishmentValue * 1.5;
    }
  if(!food.poisonous && !this.checkForFavouritism(food)) {
      healthGain = food.replenishmentValue;
    }
  if(food.poisonous){
      healthGain -= food.replenishmentValue / 2;
  }
  return healthGain;
};

Hero.prototype.checkForFavouritism = function (food) {
  var foodToCheck = food.name.toLowerCase();
  var favourite = this.favouriteFood.toLowerCase();
  if(foodToCheck === favourite){
    return true;
  }
  return false;
};

Hero.prototype.takeQuest = function(quest) {
  this.questLog.push(quest);
};

Hero.prototype.questLogBy = function (category) {
    return this.questLog.sort(function(a , b) {
      return b[category] - a[category]});
};

Hero.prototype.completedQuests = function () {
   var completed = function(quest) {
    return quest.completionStatus;
  }
  return this.questLog.filter(completed);
};

Hero.prototype.incompleteQuests = function () {
  var incomplete = function(quest) {
    return !quest.completionStatus;
  }
  return this.questLog.filter(incomplete);
};


module.exports = Hero;
