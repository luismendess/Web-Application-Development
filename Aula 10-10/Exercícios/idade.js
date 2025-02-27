function idade() {
  let agora = new Date();
  let nascimento = Number(window.prompt("Digite o ano que nasceu: "));
  let ano = agora.getFullYear();
  let saida = document.getElementById("saida");

  saida.innerHTML = `<p>A idade aproximada do usuário é: <strong>${ano-nascimento}</strong></p>`;
}
