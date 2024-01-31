/*

Ejemplo de test en JavaScript, se utiliza las AAA (Arrange, Act, Assert)

Ejecutamos fibonacci para el valor de n, y los almacenamos en la variable result. Por ultimo, tenemos la parte de la 
asercion donde verificamos, a través del método 'expect' de JEST y el matcher toBe, si el valor del
resultado es el que esperamos, en este caso cero. Profundizaremos en las diferentes aserciones que nos provee JEST.

*/

/*

Para ejecutar tests:

npm run test:watch
npm run test:coverage


*/

test('return zero if receive one', () => {
    //Arrange
    const n = 1

    //Act
    const result = fibonacci(n)

    //Assert
    expect(result).toBe(0)
})

fibonacci(n){
    /* Do something.... */
}


//Otro ejemplo
test('return zero if receive one', () => {
    expect(fibonacci(1)).toBe(0)
})