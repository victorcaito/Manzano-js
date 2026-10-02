function divisivelporquatro(){
    let numero = 1
    while (numero <= 200){
      if( numero % 4 == 0)  {
        alert(`Este número é permitido: ${numero}`)
      }
      numero++
    }
}