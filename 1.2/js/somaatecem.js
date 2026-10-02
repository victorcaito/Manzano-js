function somaatecem(){
    alert(`Programa de soma dos números inteiros de 1 a 100.`)
    let soma = 0
    let aumentador = 1
    while( aumentador <= 100){
        soma += aumentador
        aumentador++
    }
    alert(`A soma dos numeros inteiros de 1 a 100 é: ${soma}`)
}