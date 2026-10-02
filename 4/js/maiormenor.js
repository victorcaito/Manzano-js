function maiormenor(){
    alert(`Programa que retorna qual dos dois números é maior.`)
    let numero1 = parseInt(prompt(`Insira um número qualquer.`))
    let numero2 = parseInt(prompt(`Insira outro número qualquer.`))
    let numero3 = parseInt(prompt(`Insira mais um número qualquer.`))
    let numero4 = parseInt(prompt(`Insira mais um número qualquer.`))
    let numero5 = parseInt(prompt(`Insira mais um número qualquer.`))
    let maior = numero1
    if (maior < numero2) {
        maior = numero2
    }if (maior < numero3) {
        maior = numero3
    }
    if (maior < numero4) {
        maior = numero4
    }if (maior < numero5) {
        maior = numero5
    }
    let menor = numero1
    if (menor > numero2) {
        menor = numero2
    }if (menor > numero3) {
        menor = numero3
    }if (menor > numero4) {
        menor = numero4
    }if (menor > numero5) {
        menor = numero5
    }
    alert(`O maior número é o ${maior}. O menor é o ${menor}.`)
}