/*
Una clase, es una abstraccion mediante la cual representamos entidades o conceptos.
Javascript es un lenguaje orientado a objetos basados en prototipos.
*/

//Simulacion de Clases antes de ES6
function Person(name) {
    this.name = name
}

var person = new Person("Miguel")
console.log(person.name)




//Despues de ES6
class PersonClass {
    //Constructor
    constructor(name) {
        this.name = name
    }

    greet() {
        return `Hola soy ${this.name}`
    }
}

const personClass = new PersonClass("Miguel2")
console.log(person.name)
console.log(person.greet())







