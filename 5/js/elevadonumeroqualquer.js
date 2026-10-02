function elevadonumeroqualquer(){
    let base = parseInt(prompt("Insira um número: "))
    let expoente = parseInt(prompt("Insira o expoente: "))
    let resultado = 1
    let contador = 0

    if (expoente == 0){
        resultado = 1
    }
    else if (expoente > 0){
        while (contador < expoente){
            contador = contador + 1
            resultado = resultado * base
        }
    } else {
        while (contador > expoente){
            contador = contador - 1
            resultado = resultado * base
        }
        resultado = 1 / resultado
    }

    alert(`O resultado é: ${resultado}`)
}