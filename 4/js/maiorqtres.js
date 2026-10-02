function maiorqtres(){
    alert(`Programa que retorna o maior número entre três números.`)
    let numero1 = parseInt(prompt(`Digite um número:`))
    if (numero1 <= 3) {
        alert(`Número certo! ${numero1}`)
    }else alert(`Não pode ser esse número, apenas até três.`)
}