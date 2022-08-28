console.log(`--- Par Impar ---`);
var readline = require('readline')
var par = require('./par')
var entradaDeDados = readline.createInterface({
    input: stdin,
    output: stdout
})

entradaDeDados.question('Digite o numero inicial: ', function (numeroInicial) {
    let min = Number(numeroInicial)
    entradaDeDados.question('Digite o numero final: ', function (numeroFinal) {
        let max = Number(numeroFinal)

        console.log(par(min, max));
        console.log(impares(min, max));
    })
})