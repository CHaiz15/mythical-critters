class Wizard {
  constructor(wizard) {
    this.name = wizard.name;
    this.isRested = true;
    this.castSpell = 0;
    if (wizard.bearded === undefined){
      this.bearded = true;
    } else {
      this.bearded = wizard.bearded;
    }
  }
  incantation(string){
    return string.toUpperCase();
  }
  cast() {
    this.castSpell += 1;
    if (this.castSpell >= 3){
      this.isRested = false;
      return 'I SHALL NOT CAST!';
    } else {
      return 'MAGIC BULLET';
    }
  }
}


module.exports = Wizard;    
