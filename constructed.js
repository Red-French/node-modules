function Building() {}

Building.prototype.burn = function() {
  console.log('burn burn burn');
  this.isBurned = true;
};

module.exports = new Building();
