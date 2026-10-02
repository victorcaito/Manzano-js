function quinzevaloresresto(){
    let soma = 0
    let contador = 1
    while (contador <= 15){
        let valor = parseInt(prompt("Digite o " + contador + "º valor inteiro:"))
        let fatorial = 1
        let indice = valor

        if (valor >= 0){
            while (indice > 1){
                fatorial = fatorial * indice
                indice--
            }
            soma = soma + fatorial
        }

        contador++
    }
    alert(`O somatório total de todos os fatoriais é: ${soma}`)
}