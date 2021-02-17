console.log(Math.min(14,-3, 8, 6, 23, 34))
console.log(Math.max(14,-3, 8, 6, 23, 34))

let numeros = [14,-3, 8, 6, 23, 34]

// Usando espalhamento para desmontar o vetor
console.log(Math.min(...numeros))
console.log(Math.max(...numeros))

function somaTudo(...nums) {
    let soma = 0
    for(let n of nums) soma += n
    return soma
}

// para usar um vetor como argumento, devemos espalhá-lo
let meusNumeros = [1, 2, 6, 7]
console.log(somaTudo(...meusNumeros))