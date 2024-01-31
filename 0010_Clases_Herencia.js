/*
Ejemplo de Herencia entre objetos
*/

//EcmaScript 5
function Programmer(name) {
    this.name = name
}

/*
Lo que se está haciendo aqui es que el prototipo de la clase Programmer 
heredará del prototipo de Person
*/
Programmer.prototype = Object.create(PersonClass.prototype)

Programmer.prototype.writeCode = function (coffee) {
    if (coffee)
        console.log('Estoy programando')
    else
        console.log('No puedo, no tengo café')
}


//ES6
class ProgrammerClass extends PersonClass {
    constructor(name){
        super(name)
    }

    writeCode(coffee) {
        coffee ? console.log('Estoy programando') : console.log('No puedo, no tengo café')
    }
}

const programmer = new ProgrammerClass("MiguelProgrammer")
programmer.gree()
programmer.writeCode()

