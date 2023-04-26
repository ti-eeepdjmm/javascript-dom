//Formas de declarar funções em Javascript

//Função declarativa
function quadrado(numero){
    return numero * numero
}

console.log(quadrado(2))//resultado = 4

// Função anônima
const triplo = function(numero){
    return numero * numero * numero
}

console.log(triplo(2))//resultado = 8

// Função Arrow(=>)
// const soma = (a, b) => {
//     return a + b
// }

const soma = (a, b) => a + b

console.log(soma(5, 4))//resultado = 9