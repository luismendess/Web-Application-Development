function tempo() {
  let meses = new Array(
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  );
  let semana = new Array(
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
  );
  let agora = new Date();
  let saida = document.getElementById("saida");
  let dia = agora.getDate();
  let mes = agora.getMonth(); // Jan = 0 | Fev = 1 | Mar = 2 e assim vai...
  let ano = agora.getFullYear();
  let diaSemana = agora.getDay();
  let hora = agora.getHours();
  let minuto = agora.getMinutes();
  let segundo = agora.getSeconds();

  saida.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`;
  saida.innerHTML += `<p>Mês: <mark>${meses[mes]}</mark></p>`;
  saida.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`;
  saida.innerHTML += `<p>Dia da Semana: <mark>${semana[diaSemana]}</mark></p>`;
  saida.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`;
  saida.innerHTML += `<p>Minuto: <mark>${minuto}</mark></p>`;
  saida.innerHTML += `<p>Segundos: <mark>${segundo}</mark></p>`;
}
