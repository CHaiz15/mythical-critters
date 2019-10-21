class Pirate {
  constructor(name, job){
    this.name = name;
    this.cursed = false;
    this.heinousAct = 0;
    this.job = job;
    this.booty = 0;
    if (job === undefined) {
      this.job = 'Scallywag';
    } else {
    this.job = job;
  }
  }
    commitHeinousAct() {
      this.heinousAct += 1;
      if (this.heinousAct === 3){
        this.cursed = true;
      }
      }
      robShip() {
        this.booty = 100;
        return 'YAARRR!';
    }
  }


module.exports = Pirate;
