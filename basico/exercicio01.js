
let votos_brancos = 200
let votos_nulos = 33
let votos_validos = 3566
let total_eleitores = (votos_brancos + votos_nulos + votos_validos)

const perc_brancos = (100*votos_brancos)/total_eleitores
const perc_nulos = (100*votos_nulos)/total_eleitores
const perc_validos = (100*votos_validos)/total_eleitores

console.log("Total de Eleitores:", total_eleitores)
console.log("Percentual brancos:", perc_brancos.toFixed(2), "%")
console.log("Percentual nulos:", perc_nulos.toFixed(2), "%")
console.log("Percentual validos:", perc_validos.toFixed(2), "%")




