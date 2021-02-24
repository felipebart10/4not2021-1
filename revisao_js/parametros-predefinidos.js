// Parâmetros opcionais - REGRAS:
// Regras:
// 1) Parâmetros opcionais devem vir após os obrigatórios
// 2) Podem haver mais de um parâmetro por funções
// 3) Caso seja necessário pular um parâmetro opcional que não seja o últimn
//    use 'undefined' na posição do parâmetro.

// forma com parâmetro predefinido ou opcional
function calcularArea(base, altura, forma = 'Q', casasDec = 2) {
    let res
    switch(forma) {
        case 'Q': //quadrilatero
            res = base * altura
            break
        case 'T': //triangulo
            res = base * altura / 2
            break
        case 'E': //elipse
            res = (base / 2)*(altura / 2) * Math.PI
    }
    return res.toFixed(casasDec)
}

console.log(calcularArea(2,2,'Q'))
console.log(calcularArea(2,2,'T'))
console.log(calcularArea(2,2,'E'))