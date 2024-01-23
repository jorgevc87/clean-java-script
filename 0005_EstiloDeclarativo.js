/*
Javascript tiene algunas funciones declarativas como por ejemplo map,
filter y reduce. Funcionan sobre estructuras de control y condicionales

Nos favorece ya que nos entrega codigo mas declarativo y entendible
*/

const orders = [
    { productTitle: "Product 1", amount: 10 },
    { productTitle: "Product 2", amount: 30 },
    { productTitle: "Product 3", amount: 20 },
    { productTitle: "Product 4", amount: 60 }
]


//La forma incorrecta
function imperative() {
    let totalAmount = 0

    for (let i = 0; i < orders.length; i++) {
        totalAmount += orders[i].amount
    }

    console.log(totalAmount)  //120
}


//Esta es una mejor manera
function declarative() {
    function sumAmount(currentAmount, order) {
        return currentAmount + order.amount
    }

    function getTotalAmount(orders) {
        return orders.reduce(sumAmount, 0)
    }

    console.log(getTotalAmount(orders))
}


imperative()
declarative()
















