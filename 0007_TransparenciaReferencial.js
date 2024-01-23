/*
Una funcion cumple con el principio de transparencia referencial si,
para un valor de entrada, produce siempre el mismo valor de salida. Este
tipo de funciones también se conocen como funciones puras y soin la base 
de la programacion funcional
*/

//Mal
function withoutReferentialTransparency() {

    let counter = 1

    function increaseCounter(value) {
        counter = value + 1
    }

    increaseCounter(counter)
    console.log(counter)  //2

}

//Mejor
function withReferentialTransparency() {

    let counter = 1

    function increaseCounter(value) {
        return value + 1
    }

    console.log(increaseCounter(counter)) //2
    console.log(counter)  // 1
}

withoutReferentialTransparency()
withReferentialTransparency()



