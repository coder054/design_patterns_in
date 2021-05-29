function f1() {
  let myObj;

  function Animal() {
    this.name = "animal";
  }

  function creator() {
    if (myObj) {
      return myObj;
    } else {
      let newAnimal = new Animal();
      myObj = newAnimal;
      return myObj;
    }
  }

  return creator;
}

let creator = f1();
let obj1 = creator();
let obj2 = creator();
console.log({ obj1, obj2, same: obj1 === obj2 });
