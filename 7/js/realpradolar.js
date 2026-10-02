function realpradolar(){
    let cotacao = parseFloat(prompt("Digite a cotação do dólar: "))
    let reais = parseFloat(prompt("Digite a quantidade em reais disponível: "))
    let dolar = reais / cotacao
    alert(`A quantidade em dólares disponível é: US$ ${dolar}.`)
}