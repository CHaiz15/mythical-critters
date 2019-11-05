class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.counter = 0;
    this.hungry = false;
  }
  change() {
    this.wolf = true;
    this.human = false;
    this.hungry = true;
    this.counter++;
    if(this.counter === 2){
      this.wolf = false;
      this.human = true;
      this.hungry = false;
    } else if (this.counter === 3){
      this.wolf = true;
      this.human = false;
    }
    if (this.human === true) {
      this.hungry = false;
    } else if (this.human === false) {
    this.hungry = true;
  }
}
  eat(victim) {
    this.hungry = false;
    this.human = true;
    victim.alive = false;
  }
}

module.exports = Werewolf;
