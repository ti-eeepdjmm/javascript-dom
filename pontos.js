function pontos(v, e, d){
    return (v * 3) + (e * 1) + (d * 0)
}

let vitorias = 10 // 30 pontos
let empates = 2 // 2 pontos
let derrotas = 3 // 0 pontos

let pontos_time = pontos(vitorias, empates, derrotas)

console.log(`O time teve ${vitorias} vitorias, ${empates} empates e ${derrotas} derrotas com o total de \n${pontos_time} pontos`)