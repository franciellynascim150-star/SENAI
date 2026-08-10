const botao = document.querySelector("#btnDestacar")
const titulo = document.querySelector("p1")
const resultado = document.querySelector("Importante")


 botao.addEventListener("click", function(){
  resultado.textContent = titulo.textContent
})