function doisnumerosmaior(){
    alert(`Programa que compara dois números e retorna qual é maior maior.`)
    let numero1 = parseInt(prompt(`Digite o primeiro número:`))
    let numero2 = parseInt(prompt(`Digite o segundo número:`))
    if (numero1 > numero2) {
        let menos = numero1 - numero2
        alert(`O primeiro número é maior que o segundo, a diferença entre eles é: ${menos}`)
    }else if (numero2 > numero1) {
        let maior = numero2 - numero1
        alert(`O segundo número é maior que o primeiro, a diferença entre eles é: ${maior}`)
    }else {
        alert(`Os dois números são iguais! Escolha outros.`)
    }
}