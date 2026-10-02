function combustivel(){
    let tempogasto = parseInt(prompt("Insira o tempo gasto em horas: "))
    let velocidade = parseInt(prompt("Insira o valor da velocidade média (em km/h)"))
    let distancia = tempogasto * velocidade
    let combustivel = distancia / 12
    alert(`O valor do combustível gasto foi de: ${combustivel}litros.`)
    alert(`A distância percorrida foi de: ${distancia}km.`)
    alert(`O tempo gasto foi de: ${tempogasto}horas.`)
    alert(`A velocidade média foi de: ${velocidade}km/h.`)
}