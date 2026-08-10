const btn = document.getElementById('btnAnalisar');
const titulo = document.getElementById('Titulo');
const divAnalise = document.getElementById('analise');


    btn.addEventListener('click', function() {
      const texto = titulo.textContent;
      const htmlInterno = titulo.innerHTML;
      const cor = titulo.style.color;


      divAnalise.innerHTML = `
        Texto: ${texto}<br>
        HTML: ${htmlInterno}<br>
        Cor: ${cor}
      `;
    });
