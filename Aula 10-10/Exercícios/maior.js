function maior() {
  let n1 = Number(window.prompt("Digite um número: "));
  let n2 = Number(window.prompt("Digite outro número: "));
  let res = document.querySelector("section#saida"); //exibe o res na tag section com id saida

  if (n1 == n2) {
    res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o valores são <strong>iguais</strong></p>`;
  }else{
    if (n1 > n2) {
      res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n1}</strong></p>`;
    } else {
      res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n2}</strong></p>`;
    }
  }
}
