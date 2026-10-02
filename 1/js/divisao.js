function divisao(){
    let numero = parseInt(prompt("Digite um número inteiro:"))
    let divisor = parseInt(prompt("Digite um divisor inteiro:"))
    let contador = 0
    let numero1 = numero
    while (numero >= divisor){
        numero -= divisor //o -= significa subtrair o divisor do número
        contador++
    }

    alert(`O número de ${numero1} por ${divisor} é: ${contador}`)
}