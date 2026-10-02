function trocarValores() {
    let valordea = 43
    let valordeb = 56
    
    alert(`O valor de A é: ${valordea}.`)
    alert(`O valor de B é: ${valordeb}.`)
    let trocarvalor = valordea
    valordea = valordeb
    valordeb = trocarvalor
    alert("Valores trocados com sucesso.")
    alert(`O valor de A agora é: ${valordea}.`)
    alert(`O valor de B agora é: ${valordeb}.`)
}
