class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.laying = 0;
    this.up = 0;
    this.bottomsUp = 0;
  }
  shoot(){
    this.bottomsUp += 1;
    var upset = 'NO!';
    if (!this.cranky) {
      this.cranky = !this.cranky;
      upset = 'Twang!!!';
    }
    if (this.laying === 1) {
      upset = 'NO!';
    }
    if (this.up === 1) {
      upset = 'Twang!!!';
    }
    return upset;
  }
  run(){
    var slow = 'Clop clop clop clop!!!';
    if (this.laying === 1) {
      slow = 'NO!';
    }
    return slow;
  }
  sleep(){
    var sleepy = 'NO!';
    if (this.laying === 1) {
      sleepy = 'ZZZZ';
    }
    return sleepy;
  }
  layDown(){
    this.standing = false;
    this.layingDown = true;
    this.laying += 1;
    this.cranky = false;
  }
  standUp(){
    this.standing = true;
    this.layingDown = false
    this.up += 1;
  }
  drinkPotion(){
    if (this.laying === 1) {
      return 'Not while I\'m laying down!';
    }
    if (this.bottomsUp === 3) {
      this.cranky = false;
    } else {
      this.cranky = true;
    }
  }
}

module.exports = Centaur;
