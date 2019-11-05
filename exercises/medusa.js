class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
    this.stoned = true;
    this.num = 0;
  }
  stare(victim) {
    this.num += 1;
    this.statues.push(victim);
      if (this.statues.length > 3) {
        this.statues.shift();
      }
      if (this.num === 5) {
        this.stoned = false;
      }
      victim.stoned = true;
    }
  }

module.exports = Medusa;
