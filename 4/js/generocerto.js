function generocerto(){
    alert(`Programa que retorna o seu nome e sexo.`)
    let nome = prompt(`Insira o nome de uma pessoa.`)
    let sexo = prompt(`Insira seu sexo [Feminino] ou [Masculino]`)
    if (sexo == "Feminino" || sexo == "feminino"){
        alert(`Olá Sra. ${nome}, Bem vinda a nossa plataforma.`)
    }else{
        alert(`Olá Sr. ${nome}, Bem vindo a nossa plataforma.`)
    }
}