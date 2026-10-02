function negativomaiormenor() {
  let maior = Number.MIN_VALUE;
  let menor = Number.MAX_VALUE;
  let contagem = parseInt(prompt("Insira o próximo número: "));
  while (contagem >= 0) {
    contagem = parseInt(prompt(`Digite o próximo número: `));
    if (contagem >= 0) {
      if (contagem > maior) {
        maior = contagem;
      }
    }
    if (contagem < menor) {
      menor = contagem;
    }
  }
  if (contagem < 0) {
    alert(`Número negatico encontrado! ${contagem}`);
    alert(`O maior número é de: ${maior}`);
    alert(`O menor número é de: ${menor}`);
  }
}
