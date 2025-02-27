function info() {
  let agora = new Date()
  let dia = new Date().toLocaleDateString()
  let saida = document.getElementById("saida")
  let saidia = document.getElementById("saidia")
  saida.innerHTML = `<p>O que eu recebi do sistema foi <mark>${agora}</mark></p>`
  saidia.innerHTML = `<p>O que eu recebi do sistema foi <mark>${dia}</mark></p>`
}
