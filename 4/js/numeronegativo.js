function numeronegativo() {
    let numero1 = parseInt(prompt(`Digite um número:`))
    if (numero1 < 0) {
        let numerotraduzido = numero1 * -1
        alert(`O número ${numero1} agora é positivo ${numerotraduzido}`)
    } else {
        let numerotraduzido2 = numero1 * -1
        alert(`O número ${numero1} agora é negativo ${numerotraduzido2}`)
    }
}