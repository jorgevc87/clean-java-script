//Funciones
function doSomething() {
    return "Doing something";
}

doSomething();

//Ejemplo funcion flecha 
const doSomethingArrow = () => "Doing something" // El return está implicito si no añadimos las llaves

//Expresiones lambda
//Sin arrow functions
[1, 2, 3].map(function (n) { return n * 2 });

//Con arrow functions
[1, 2, 3].map(n => n * 2);


//Otros ejemplo
//Sin arrow function
function add(x) {
    return function (y) {
        return x + y;
    }
}

//Con arrow function
const add = x => y => x + y;


const addTwo = add(2);
console.log(addTwo(5)); // 7


// this en arrow functions
const counter = {
    number: 0,
    increase() {
        setInterval(() => ++this.number, 1000);
    }
}

counter.increase(); //NaN NaN NaN ...

//bindeando "this"
const counter2 = {
    number: 0,
    increase() {
        setInterval(function () { ++this.number }.bind(this), 1000);
    }
}

counter2.increase();

//Funciones autoejecutadas -> funciones que se ejecutan al momento de definirse
(function (params) {
    // .... do someting
})();

(function () {
    var number = 42;
})();

console.log(number); //Reference Error


/*---  PARAMETROS Y ARGUMENTOS  ---*/
//Ejemplo
const double = x => x * 2 //Funcion linea -> x es el parámetro de nuestra función

double(2) //2 es el argumento con el que llamamos a nuestra funcion

//Limitar el número de argumentos

function createMenu1(title, body, buttonText, cancellable) {
    // Do something....    
}

function createMenu2({ title, body, buttonText, cancellable }) {
    //Do something....
}

createMenu1({
    title: 'Foo',
    body: 'Bar',
    buttonText: 'Baz',
    cancellable: true
});

createMenu1(
    title = 'Foo',
    body = 'Bar',
    buttonText = 'Baz',
    cancellable = true);

{ title = 'Parámetros y argumentos', lang = javascript }

// Limita el número de argumentos
const numbers = [1, 2, 3, 4, 5]
numbers.map(n => n * 2) // El argumento de map es una expresion lambda


//Parametros por defecto
//Disponible desde ES6

/*------ CON ES6 ------*/
function greet(text = 'world') {
    console.log('Hello ' + text)
}

greet()
greet(undefined)
greet('crafter')



/*------ SIN ES6 - JAVASCRIPT CLÁSICO ------*/
function greet2(text) {
    if (typeof text === 'undefined')
        text = 'world'

    console.log('Hello ' + text)
}

//Parametro rest y spread
function add(x, y) {
    return x + y
}

add(1, 2, 3, 4, 5) //3


//El parametro rest es el ultimo parametro de la funcion y se trata de un array
function process(x, y, ...args) {
    console.log(args)
}

process(1, 2, 3, 4, 5) //[3,4,5]


//JavaScript normal - Antes de ES6 disponemos de la variable 'arguments'
function process2(x, y) {
    console.log(arguments)
}

process2(1, 2, 3, 4, 5) // [1,2,3,4,5]



//De preferencia usar una funcion ternario en lo posible
const isRunning = true
if (isRunning) {
    stop()
} else {
    run()
}

//Operador ternario
isRunning ? stop() : run()


//La evidencia demuestra que es mas comprensible una fras asirmativa que las negativas
//Negative
if(!canNotFormat) {
    FormData()
}

//Positive
if(canFormat) {
    FormData()
}
































