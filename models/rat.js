var Rat = function() {
  this.health = 10;
}

Rat.prototype.touchFood = function (food) {
  food.touched();
};

module.exports = Rat;
