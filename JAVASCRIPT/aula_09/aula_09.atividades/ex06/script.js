const titulo = document.getElementById("meu titulo");
const botao = document.getElementById("meu botao");

botao.addEventListener("click", function () {
    titulo.textContent = "Título alterado!";
});