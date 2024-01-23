/*
Funciones anonimas
*/

function main() {
    const stuffList = [
        { isEnabled: true, name: 'justin' },
        { isEnabled: false, name: 'lauren' },
        { isEnabled: false, name: 'max' },

    ]

    /* Filtrará todos los elementos de la lista anterior que cumplan la condicion isEnabled= true 
    Predicado=> isEnabled= true */
    const filteredStuff = stuffList.filter(stuff => !stuff.isEnabled)

    console.log(filteredStuff)
}

//Llamando a la funcion
main()


