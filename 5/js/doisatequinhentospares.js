function doisatequinhentospares(){
    let soma = 0
    let numero = 2
    if( numero % 2 == 0 ){
        for(numero = 2; numero <= 500; numero = numero + 2){
            soma = soma + numero
        }
    }alert(`O resultado é de: ${soma}`)
}