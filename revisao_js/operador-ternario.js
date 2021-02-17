let nota = 7.2
let situacao

/*if(nota >= 6) {
    situacao = 'APROVADO'
}
else {
    situacao = 'REPROVADO'
}

console.log(situacao)*/

// As três partes do operador ternário
// 1º: condição
// Entre a 1ª e 2ª: interrogação
// 2ª: o resultado caso a condição seja True
// 3ª (após os ':'): resultado se for False
situacao = (nota >= 6 ? 'APROVADO' : 'REPROVADO')

let user = 'admin'
let userType

userType = user === 'admin' || user === 'root' ? 'Superuser' : 'Ordinary user'
console.log(userType)