const pets = [
    {
        nome: 'Mel',
        especie: 'cão',
        idade: 2,
        sexo: 'F',
        peso: 5.2
    },
    {
        nome: 'Paçoca',
        especie: 'gato',
        idade: 8,
        sexo: 'F',
        peso: 3.2
    },
    {
        nome: 'Cerberus',
        especie: 'cão',
        idade: 6,
        sexo: 'M',
        peso: 22
    },
    {
        nome: 'Matusalém',
        especie: 'tartaruga',
        idade: 102,
        sexo: 'M',
        peso: 30
    },
    {
        nome: 'Paco',
        especie: 'papagaio',
        idade: 56,
        sexo: 'M',
        peso: 1
    },
    {
        nome: 'Mingau',
        especie: 'gato',
        idade: 4,
        sexo: 'M',
        peso: 2.5
    }
]

console.log(pets.find(elemento => elemento.peso  > 10))
console.log(pets.find(pet => pet.idade < 4))
//console.log(pets.find(pets.especie === 'gato' && pet.sexo == 'M'))
console.log(pets.find(pet => pet.especie == 'calopsita'))

console.log('--------------------------------------------')

// some(): retorna TRUE caso algum elemento satisfaça a condição ou false caso contrário
console.log(pets.some(pet => pet.nome === 'Cerberus'))
console.log(pets.some(pet => pet.especie === 'tartaruga' && pet.sexo === 'F'))

console.log('--------------------------------------------')

// every(): retorna TRUE caso todos os elementos satisfaçam a condição
console.log(pets.every(pet => pet.especie === 'cão'))

console.log('--------------------------------------------')

// filter(): retorna um novo vetor contendo apenas os elementos que
// correspondem ao critério passado
console.log(pets.filter(x => x.especie === 'gato'))
console.log(pets.filter(x => x.idade > 20))

console.log('--------------------------------------------')

// map(): cria um novo vetor com mesmo número de elementos do vetor original,
// correspondendo a algum tipo de transformação nos elementos originais
console.log(pets.map(e => e.nome.toUpperCase()))

const numeros = [2, 1, -3, 5, 14, 1, -4, 7]
console.log(numeros)
console.log(numeros.map(num => num * 2))

// reduce(): reduz um vetor de valores a um único valor
// PArâmetros:
// acumulador: resultado parcial até o momento
// valor atual: o resultado correspondente ao elemento atual,
// que integrará o acumulador
console.log(numeros.reduce((acum, val) => acum + val))
console.log(numeros.reduce((acum, val) => acum * val))
// concatenação
let p1 = 'Bom'
let p2 = 'galera!'

console.log([p1, ' dia ', p2].reduce((a,v) => a + v))

/*
    *SOMAR O PESO DE TODOS OS PETS
*/

// Abordagem 1: criando um vetor auxiliar contendo apenas os pesos dos pets
let pesos = pets.map(aux => aux.peso)
console.log(pesos)
console.log(pesos.reduce((acum, val) => acum + val))

// Abordagem 2:  fazendo map() e reduce() em uma linha só
console.log(pets.map(pet => pet.peso).reduce((acum, val) => acum + val))

// Abordagem 3: reduce() com parâmetros extras
// 3º parâmetro da arrow function: índice do elemento atual
// 4º da arrow function: o próprio vetor que está sendo reduzido
// 2º parâmetro do REDUCE: valor inicial do acumulador
console.log(pets.reduce((acum, val) => acum + val.peso, 0))

console.log('--------------------------------------------')

// includes(): retorna True caso o valor informado esteja contido no vetor
console.log(numeros.includes(6))
console.log(numeros.includes(14))

// diferença entre some() e includes()
// o some() precisa de uma função como argumento
// o includes() recebe um valor simples