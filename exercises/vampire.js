class Vampire {
  constructor(name, pet) {
    this.name = name;
    if (pet === undefined) {
      this.pet = 'bat';
    } else {
    this.pet = pet;
  }
  this.thirsty = true;
}
    drink(){
      if (this.thirsty = false) {
        return true;
    }
  }
}


module.exports = Vampire;



















//
// class Vampire {
//   constructor(name, pet){
//     this.name = name;
//     if (pet === undefined){
//     this.pet = 'bat';
//   }
//   else {
//     this.pet = pet;
//   }
//   this.thirsty = true
// }
//   drink(){
//     if (this.thirsty = false){
//       return true;
//     }
//   }
// }
//
//
// module.exports = Vampire;
