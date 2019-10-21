class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  stare(victim) {
    this.statues.push(victim);
      if (this.statues.length > 3) {
        this.statues.shift();
      }
    }
  }

module.exports = Medusa;
