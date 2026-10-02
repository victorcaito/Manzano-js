function imparepar(){
    alert(`Programa que retorna se um número é par ou ímpar.`)
    let numero1 = parseInt(prompt(`Insira um número qualquer.`))
    if (numero1 % 2 == 0){
        alert(`O número, ${numero1}, é par.`)
    }else alert(`O número, ${numero1}, é ímpar.`)
}