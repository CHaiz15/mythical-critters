class Hobbit {
  constructor(name, disposition, age){
    this.name = name;
    this.disposition = 'homebody';
    this.age = 0;
    this.isShort = true;
    this.old = false;
    this.hasRing = false;
    if (this.name === 'Frodo') {
      this.hasRing = true;
    }
  }
  celebrateBirthday(){
    this.age += 1;
    if (this.age <= 32){
      this.adult = false;
   } else if (this.age >= 33) {
     this.adult = true;
   } if (this.age >= 101) {
     this.old = true;
   }
}
}



module.exports = Hobbit;
