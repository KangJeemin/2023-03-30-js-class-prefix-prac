class Human {
  #age =10;
  constructor(name,age){
    this.name = name;
    this.age = age
  }

  getage() {
    return this.#age;
  }

}

// class Person extends Human {

//   getFakeage(){
//     return this.age2;
//   }
// }

const human1 = new Human("김",2)
// const person2 = new Person("강",3)

// console.log(human1.getage())

// console.log(person2.getFakeage())
console.log(human1.getage())