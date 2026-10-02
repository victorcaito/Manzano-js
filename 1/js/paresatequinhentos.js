function paresatequinhentos(){
    let pares = 0
    let numero = 0
    while (numero < 500){
        if( numero % 2 == 0){
            numero = numero + 2
            pares = pares + numero
        }
    }
    alert(`A soma dos números pares de 0 a 500 é: ${pares}`)
}