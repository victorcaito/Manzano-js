function raiz(){
    alert(`Programa que retorna a raiz quadrada de um número.`)
    let numero1 = parseFloat(prompt(`Insira um número:`))
    let numero2 = parseFloat(prompt(`Insira um número: `))
    let numero3 = parseFloat(prompt(`Insira um número: `))
    if (numero1 !== 0) {
        let elevado = numero2 ** 2
        let multiplicado = 4 * numero1 * numero3
        let delta = elevado - multiplicado
        if (delta >= 0) {
            let valorxmais = (-numero2 + Math.sqrt(delta)) / (2 * numero1)
            let valorxmenos = (-numero2 - Math.sqrt(delta)) / (2 * numero1)
            alert(`O resultado do primeiro X é: ${valorxmais}`)
            alert(`O resultado do segundo X é: ${valorxmenos}`)
        }else alert(`Delta negativo, equação não pode ser realizada. ${delta}`)
    }else alert(`O valor de A não pode ser igual a zero, tente novamente!.`)
}