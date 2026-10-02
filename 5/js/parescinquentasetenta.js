function parescinquentasetenta(){
    let soma = 0
    let quantidade = 0
    for( let numero = 50; numero <= 70; numero++){
        if(numero % 2 ==0){
            quantidade = quantidade + 1
            soma = soma + numero
        }
    } let media = soma / quantidade
    alert(`O resultado da média dessa conta foi de: ${media}`)
    alert(`O resultado da soma dessa números pares foi de: ${soma}`)
}