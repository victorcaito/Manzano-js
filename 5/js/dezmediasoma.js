function dezmediasoma(){
    let numeroUm = parseInt(prompt("Insira o primeiro número: "))
    let numeroDois = parseInt(prompt("Insira o segundo número: "))
    let numeroTres = parseInt(prompt("Insira o terceiro número: "))
    let numeroQuatro = parseInt(prompt("Insira o quarto número: "))
    let numeroCinco = parseInt(prompt("Insira o quinto número: "))
    let numeroSeis = parseInt(prompt("Insira o sexto número: "))
    let numeroSete = parseInt(prompt("Insira o setimo número: "))
    let numeroOito = parseInt(prompt("Insira o oitavo número: "))
    let numeroNove = parseInt(prompt("Insira o nono número: "))
    let numeroDez = parseInt(prompt("Insira o dezimo número: "))
    let soma = numeroUm + numeroDois + numeroTres + numeroQuatro + numeroCinco + numeroSeis + numeroSete + numeroOito + numeroNove + numeroDez
    let media = soma/10
    alert(`A soma dos números é de: ${soma}`)
    alert(`A média dos números é de: ${media}`)
}