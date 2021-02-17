// exportar funções para outros arquivos

// o export default permite importar sem colocar chaves
// só pode ter um export default por arquivo.
export default function somaVet(vet) {
    let soma = 0
    for(let n of vet) soma += n
    return soma
}

export function quadradoVet(vet) {
    let res = []
    for(let n of vet) res.push(n ** 2)
    return res
}