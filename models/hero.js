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



module.exports = Hero;
