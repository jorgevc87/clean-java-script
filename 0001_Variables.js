//Diferencia entre el tipo de variables que tenemos en JavaScript

/*--- EJEMPLOS DE USO DE VAR ---*/
var variable = 5;
{
    console.log('inside', variable); // 5
    var variable = 10;
}

console.log('outside', variable); // 10
variable = variable * 2;
console.log('changed', variable); // 20


/*--- EJEMPLOS DE USO DE LET ---*/
let variableLet = 5;

{
    console.log('inside', variableLet); // error
    let variableLet = 10;
}

console.log('ourside', variableLet); // 5
variableLet = variableLet * 2;
console.log('changed', variableLet); // 10


/*--- EJEMPLOS DE USO DE CONST ---*/
const variableConst = 5;
variableConst = variableConst * 2; // error
console.log('changed', variableConst);



//Nombres Correctos
//bad 
const yyyymmdstr = moment().format('YYYY/MM/DD');

//better
const currentDate = moment().format('YYYY/MM/DD');

//Nombres ubicuos
//bad
getUserInfo();
getClientData();
getCustomerRecord();

//better
getUser();

//Arrays

//bad
//const fruit = ['manzana', 'platano', 'fresa'];
//regular
const fruitList = ['manzana', 'platano', 'fresa'];
//good
//const fruits = ['manzana', 'platano', 'fresa'];
//better
const fruitNames = ['manzana', 'platano', 'fresa'];

//Booleanos
//bad
const open = true;
const write = true;
const fruit = true;

//good
const isOpen = true;
const canWrite = true;
const hasFruit = true;

//Numeros
const fruits = 3;

//better
const maxFruits = 5;
const minFruits = 1;
const totalFruits = 3;


//Funciones
//Deben represatr acciones, deben ser representativos
//bad 
createUserIfNotExists();
updateUserIfNotEmpty();
sendEmailIfFieldsValid();

//better
createUser();
updateUser();
sendEmail();


//Ejemplos con get() y set()
getUser();
setUser();
isValidUser();

//Get y Set cuando accedemops a propiedades de objetos
class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

let person = new Person('Miguel');
console.log(person.name)


//Ámbitos o scopes
let greeting = 'hello world'; //Ámbito global

function greet() {
    console.log(greeting);
}

greet();


//Ámbito de bloque
{
    let greeting = "Hello world";
    var lang = "English";
    console.log(greeting);
}

console.log(lang); //English
console.log(greeting); //Is not definet in thios scope


//Ambito estatico y dinamico
const number = 10;
function printNumber() {
    console.log(number);
}

function app() {
    const number = 5;
    printNumber();
}

app(); // 10

//HOISTING
function greet() {
    let greeting = 'Hello world';
    console.log(greeting)
}

greet();

