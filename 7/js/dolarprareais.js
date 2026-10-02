function dolarprareais(){
    let dolar = parseFloat(prompt("Insira o valor de 1 dólar em reais: "))
    let reais = parseFloat(prompt("Qual quantia em reais você quer converter? "))
    let dolarparareais = parseFloat(prompt("Qual quantia em dólares você quer converter? "))
    let conversao = reais / dolar
    let conversaoD = dolarparareais * dolar
    alert(`A conversão de reais para dólares é de: ${conversao}.`)
    alert(`A conversão de dólares para reais é de: ${conversaoD}.`)
}