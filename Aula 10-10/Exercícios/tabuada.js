function tabuada() {
  let numero = Number(document.getElementById("fnum").value);
  let saida = document.getElementById("saida");

  saida.innerHTML = `<h2>Tabuada de ${numero}</h2>
  <p>${numero} x 1 = <strong>${numero}</strong><br>
     ${numero} x 2 = <strong>${numero * 2}</strong><br>
     ${numero} x 3 = <strong>${numero * 3}</strong><br>
     ${numero} x 4 = <strong>${numero * 4}</strong><br>
     ${numero} x 5 = <strong>${numero * 5}</strong><br>
     ${numero} x 6 = <strong>${numero * 6}</strong><br>
     ${numero} x 7 = <strong>${numero * 7}</strong><br>
     ${numero} x 8 = <strong>${numero * 8}</strong><br>
     ${numero} x 9 = <strong>${numero * 9}</strong><br>
     ${numero} x 10 = <strong>${numero * 10}</strong>
  </p>`;
}
