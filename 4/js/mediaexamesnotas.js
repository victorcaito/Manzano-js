function mediaexamesnotas(){
    alert(`Programa que retorna a média das notas de um aluno.`)
    let nota1 = parseFloat(prompt(`Digite a primeira nota:`))
    let nota2 = parseFloat(prompt(`Digite a segunda nota:`))
    let nota3 = parseFloat(prompt(`Digite a terceira nota:`))
    let nota4 = parseFloat(prompt(`Digite a quarta nota:`))
    let media = (nota1 + nota2 + nota3 + nota4) / 4
    alert(`A média das notas é ${media}.`)
    if (media >= 7) {
        alert(`Aluno aprovado!`)
    }else alert(`Aluno reprovado!`)
    let exame = parseFloat(prompt(`Digite a nota do exame:`))
    media = (media + exame) / 2
    alert(`A média final do aluno é ${media}.`)
    if (media >= 5) {
        alert(`Aluno aprovado! ${media}`)
    }else alert(`Aluno reprovado! ${media}`)
}