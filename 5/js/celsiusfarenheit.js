function celsiusfarenheit(){
    for( let celsius = 10; celsius <= 100; celsius = celsius + 10){
        let faren = (9*celsius)+160
        faren = faren/5
        alert(`Essa é a temperatura em Faren: ${faren} - Celsius: ${celsius}`)
    }
}