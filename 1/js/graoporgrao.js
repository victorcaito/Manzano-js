function graoporgrao() {
    let quadro = 1
    let graos = 1
    let total = 0
    while (quadro <= 64) {
        total = total + graos
        quadro = quadro + 1
        graos = graos * 2
    }
    alert(`O somatorio total de grãos de trigo no tabuleiro é: ${total}`)
}