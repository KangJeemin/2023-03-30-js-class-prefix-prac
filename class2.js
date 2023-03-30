class Human {
  #age =10;
  constructor(name,age){
    this.name = name;
    this.age = age
  }
  get age() {
    return this.#age;
  }

  set age(value){
    if(typeof value !=="number"){
      console.log("문자열만 입력하시오.")
    }
    else
      this.#age = value;
  }
  getage() {
    return this.#age;
  }

}

class Person extends Human {
#age = 20;
  getFakeage(){
    return this.#age;
  }
}

const human1 = new Human("김",2)
const person2 = new Person("강",3)

console.log(human1.age)
console.log(human1.#age)

console.log(person2.getFakeage())