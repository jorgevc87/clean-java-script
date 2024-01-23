/*
Las clausulas de guarda, tambien conocidas como aserciones o precondiciones, son
una pieza de codigo que comprueba una serie de condiciones antes de continuar con 
la ejecución de la función.
En el ejemplo anterior, como puedes observar, tenemos demasiados condicionales anidados.
Para resolverlo podríamos sustituir los casos edge por clausulas de guarda:
*/

const isDead = false
const isSeparated = false
const isRetired = false

//Evitar el codigo espaguetti
const getPayAmount = () => {
    if (isDead) return deadAmounbt()

    if (isSeparated) return separatedAmount()

    if (isRetired) return retiredAmount()

    /*
    De preferencia evitar el uso del else
    */

    //La siguiente linea representa mi else 
    //De no cumplirse ninguna de las validaciones
    //Anteriores
    return normalPayAmount()
}

const deadAmounbt = () => 1000
const separatedAmount = () => 2000
const retiredAmount = () => 3000
const normalPayAmount = () => 500



console.log(getPayAmount())