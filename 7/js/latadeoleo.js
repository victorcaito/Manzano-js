function latadeoleo(){
    let raio = parseInt(prompt("Insira valor do raio da lata de óleo: "))
    let altura = parseInt(prompt("Insira valor da altura da lata: "))
    let volume = (3.14 * (raio ** 2)) * altura
    alert(`O volume da lata de óleo é de ${volume}m³.`)
}