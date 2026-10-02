function atenove(){
    alert(`Programa que limita números selecionados até o nove e limitado até zero.`)
        let numero1 = parseInt(prompt(`Digite um número entre 0 e 9:`))
        if (numero1 <= 9 && numero1 >= 0){
            alert(`Número permitido, parabéns! ${numero1}`)
        }else {
            alert(`Número não permitido, fora do limite, tente novamente!`)
        }
}