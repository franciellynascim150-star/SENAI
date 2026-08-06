const botao = document.querySelector("btnMostrar");

botao.addEventListener("click", function () {
            const titulo = document.querySelector("h1");
            const resultado = document.querySelector("resultado");

            resultado.textContent = titulo.textContent;
        });