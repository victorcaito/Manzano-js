function numerosinteiros(){
    alert(  `Programa de números inteiros de 15 a 200 ao quadrado.`)
    let numero = 15
    while (numero <= 200) {
        let quadrado = numero ** 2
        alert(`O número ${numero} ao quadrado é ${quadrado}`)
        numero++
    }
}