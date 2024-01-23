/*
Otra buena estrategia es evitar el uso del else y la anidación de IF's
Es buena estrategie usar el operador ternario
*/

const isRunning = true

const stop = () => {
    console.log("stopped")
}

const run = () => {
    console.log("running")
}

const normalWay = () => {
    if (isRunning) {
        stop()
    } else {
        run()
    }
}

const ternaryWay = () => {
    isRunning ? stop() : run()
}

ternaryWay()
