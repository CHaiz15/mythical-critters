class Wizard {
  constructor(wizard) {
      this.name = wizard.name;
      this.isRested = true;
      this.castSpell = 0;
      if (wizard.bearded === false){
      this.bearded = false;
      } else {
      this.bearded = true;
    }
  }
    incantation(spell) {
      return spell.toUpperCase();
  }
  cast() {
    this.castSpell++;
    if (this.castSpell >= 3) {
      this.isRested = false;
      return "I SHALL NOT CAST!";
    } else {
    return "MAGIC BULLET";
  }
  }
}




module.exports = Wizard;
