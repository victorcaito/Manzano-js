function areacomodos(){
    let decisao = "sim"
    let total = 0
    while (decisao == "sim" || decisao == "Sim") {
        let nome = prompt("Insira o nome do comodo: ")
        let largura = parseInt(prompt("Insira a largura do comodo: "))
        let comprimento = parseInt(prompt("Insira o comprimento do comodo: "))
        let resultado = comprimento*largura
        total = total + resultado
        alert(`A área do ${nome} é de: ${resultado}`)
        decisao = prompt("Deseja continuar a calcular outros comodos? [sim] [não]")
    }
    alert(`O total da área de todos os comodos é de: ${total}m²`)
    alert(`Obrigado por utilizar o programa!`)
}