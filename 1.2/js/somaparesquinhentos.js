function somaparesquinhentos(){
    alert(`Programa de soma dos números pares de 1 a 500.`)
    let soma = 0
    let aumentando = 1
    while (aumentando <= 500){
        if (aumentando % 2 == 0) {
            soma += aumentando
            
        }aumentando++
    }
    alert(`A soma dos números pares de 1 a 500 é: ${soma}`)
}