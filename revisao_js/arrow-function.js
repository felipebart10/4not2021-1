function quadrado(n) {
    return n ** 2
}

const quadrado2 = n => n**2 // arrow function

console.log(quadrado2(4))

function potencia(b, e) {
    return b ** e
}

let potencia2 = (b, e) => b ** e

console.log(potencia2(2,5))

// Função sem argumentos
function megasena() {
    // retorna um número aleatório entre 1 e 60
    // Math.random retorna um número entre 0 e 1
    // floor tira as casas decimais (arredonda pra baixo podemos dizer)
    return Math.floor(Math.random() * 60 + 1)
}

console.log(megasena(), megasena(), megasena())

// arrow function sem argumentos
const megasena2 = () => Math.floor(Math.random() * 60 + 1)
