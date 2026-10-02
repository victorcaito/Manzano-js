function prestacao(){
        let valor = parseInt(prompt("Digite o valor da prestação:"))
        let taxa = parseInt(prompt("Digite a taxa:"))
        let tempo = parseInt(prompt("Qual o tempo: "))
        let prestacao = valor + (valor * taxa / 100) * tempo
        alert(`O valor da sua prestação da compra foi de: ${prestacao}reais.`)
}