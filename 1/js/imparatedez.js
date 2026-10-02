function imparatedez(){
    let lidos = 0
    let numero = 1

    while (lidos < 10) {
        let fatorial = 1

        for (let contador = numero; contador > 1; contador--) {
            fatorial = fatorial * contador
        }

        alert(`O fatorial do numero ímpar ${numero} é: ${fatorial}`)
        numero = numero + 2
        lidos = lidos + 1
    }
}