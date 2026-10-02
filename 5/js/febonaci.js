function febonaci(){
    let atual = 1
    let anterior = 1
    for(let numero = 1; numero <= 15; numero++){
        alert(`Este número é o atual: ${atual}`)
        let inicial = atual + anterior 
        anterior = atual 
        atual = inicial
    }
}