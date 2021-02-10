let vetor = [
    10,
    20,
    30
]
let obj = {
    nome: "Maria",
    idade: 34,
    naturalidade: "Franca-SP"
}

// desestruturação de vetores, as variáveis do let podem ter qualquer nome
let [x, y, z] = vetor
console.log(x)
console.log(y)
console.log(z)

// desestruturação do objeto, as variáveis tem que ter o mesmo nome das chaves
let {naturalidade, nome, idade} =  obj
console.log(idade)
console.log(nome)
console.log(naturalidade)

let obj2 = {
    marca: 'Volks',
    modelo: 'Fusca',
    ano: 1971,
    cor: 'preto'
}

let {modelo, ano} = obj2
console.log(modelo)
console.log(ano)

let vet2 = ['laranja', 'maçã', 'pêra']
let [fruta1, fruta2] = vet2
console.log(fruta1)
console.log(fruta2)