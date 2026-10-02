function ordemcrescente() {
    alert(`Programa que retorna a ordem crescente de três números.`)
    let numero1 = parseInt(prompt(`Insira o primeiro número.`))
    let numero2 = parseInt(prompt(`Insira o segundo número.`))
    let numero3 = parseInt(prompt(`Insira o terceiro número.`))
    if (numero1 < numero2 && numero1 < numero3) {
        alert(`Os números em ordem crescente são: ${numero1}, ${numero2}, ${numero3}.`)
    } else if (numero2 < numero1 && numero2 < numero3) {
        alert(`Os números em ordem crescente são: ${numero2}, ${numero1}, ${numero3}.`)
    } else if (numero3 < numero1 && numero3 < numero2) {
        alert(`Os números em ordem crescente são: ${numero3}, ${numero2}, ${numero1}.`)
    }
}
