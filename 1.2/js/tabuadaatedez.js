function tabuadaatedez(){
    alert(`Programa de multiplicuada de números inteiros de 1 a 10.`)
    let numero = parseInt(prompt(`Escreva um numero inteiro para ver a tabuada de 1 a 10:`))
    alert(`Tabuada de ${numero}`)
    let vezes = 1
    while (vezes <= 10){
        let resultado = numero * vezes
        alert(`O número ${numero} multiplicado por ${vezes} é ${resultado}`)
        vezes++
    }
}

