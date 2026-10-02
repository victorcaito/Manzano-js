function divisoresdetres(){
    alert(`Programa que retorna os divisores de um número.`)
    let numero1 = parseInt(prompt(`Digite um número:`))
    let numero2 = parseInt(prompt(`Digite outro número:`))
    let numero3 = parseInt(prompt(`Digite mais um número:`))
    let numero4 = parseInt(prompt(`Digite mais um número:`))
    if (numero1 % 2 == 0) {
        alert(`O primeiro número, ${numero1}, é par, e é divisível por 2!`)
    }else {
        alert(`O primeiro número, ${numero1}, é ímpar, e é divisível por 3!`)
    }
    if (numero2 % 2 == 0) {
        alert(`O segundo número, ${numero2}, é par, e é divisível por 2!`)
    }else {
        alert(`O segundo número, ${numero2}, é ímpar, e é divisível por 3!`)
    }
    if (numero3 % 2 == 0) {
        alert(`O terceiro número, ${numero3}, é par, e é divisível por 2!`)
    }else {
        alert(`O terceiro número, ${numero3}, é ímpar, e é divisível por 3!`)
    }
    if (numero4 % 2 == 0) {
        alert(`O quarto número, ${numero4}, é par, e é divisível por 2!`)
    }else {
        alert(`O quarto número, ${numero4}, é ímpar, e é divisível por 3!`)
    }
}