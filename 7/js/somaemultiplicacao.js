function somaemultiplicacao(){
    let numeroA = parseInt(prompt("Digite o primeiro número:"))
    let numeroB = parseInt(prompt("Digite o segundo número:"))
    let numeroC = parseInt(prompt("Digite o terceiro número:"))
    let numeroD = parseInt(prompt("Digite o quarto número:"))
    let resultadoS1 = numeroA + numeroB
    let resultadoS2 = numeroA + numeroC
    let resultadoS3 = numeroA + numeroD
    let resultadoS4 = numeroB + numeroC
    let resultadoS5 = numeroB + numeroD
    let resultadoS6 = numeroC + numeroD

    let resultadoM1 = numeroA * numeroB
    let resultadoM2 = numeroA * numeroC
    let resultadoM3 = numeroA * numeroD
    let resultadoM4 = numeroB * numeroC
    let resultadoM5 = numeroB * numeroD
    let resultadoM6 = numeroC * numeroD
    alert(`Os resultados das somas são: ${resultadoS1}, ${resultadoS2}, ${resultadoS3}, ${resultadoS4}, ${resultadoS5}, ${resultadoS6}.`)
    alert(`Os resultados das multiplicações são: ${resultadoM1}, ${resultadoM2}, ${resultadoM3}, ${resultadoM4}, ${resultadoM5}, ${resultadoM6}.`)
}