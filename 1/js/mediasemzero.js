function mediasemzero(){
    let quantidade = 0
    let soma = 0 
    let numero = 1
    while (numero > 0){
        numero = parseInt(prompt("Digite um número:"))
        if(numero > 0){
            quantidade++
            soma = soma + numero
            let media = soma / quantidade
        }
    }
    alert(`A média dos números digitados é: ${media}`)
    alert(`A soma dos números digitados é: ${soma}`)
    alert(`A quantidade de números digitados é: ${quantidade}`)
    alert(`O número digitado foi: ${numero}`)
}