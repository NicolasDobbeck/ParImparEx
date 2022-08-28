const par = (numeroInicial, numeroFinal) => {
    let numPares = []
    while (numeroInicial <= numeroFinal) {
        if (numeroInicial % 2 == 0) {
            numPares.push(numeroInicial)
        }
        numeroInicial++
    }
    return numPares
}

const impares = (numeroInicial, numeroFinal) => {
    let numImpares = []
    while (numeroInicial <= numeroFinal) {
        if (numeroInicial % 2 != 0) {
            numImpares.push(numeroInicial)
        }
        numeroInicial++
    }
    return numImpares
}

module.exports = {
    par, impares
}