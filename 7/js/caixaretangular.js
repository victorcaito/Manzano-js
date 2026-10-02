function caixaretangular(){
    let comprimento = parseInt(prompt("Insira o comprimento da caixa: "))
    let largura = parseInt(prompt("Insira a largura da caixa: "))
    let altura = parseInt(prompt("Insira a altura da caixa: "))
    let volume = comprimento * largura * altura
    alert(`O volume da caixa é de ${volume}m³.`)
}