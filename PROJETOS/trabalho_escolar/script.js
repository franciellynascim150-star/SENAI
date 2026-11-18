// MENU PARA CELULAR
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const aberto = nav.classList.toggle("open");

  menuToggle.textContent = aberto ? "×" : "☰";
  menuToggle.setAttribute("aria-expanded", String(aberto));
});

// FECHA O MENU QUANDO CLICAR EM UMA SEÇÃO
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");

    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// ANIMAÇÕES AO DESCER A PÁGINA
const elementos = document.querySelectorAll(".reveal");

const observador = new IntersectionObserver(
  (entradas, observer) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
        observer.unobserve(entrada.target);
      }
    });
  },
  {
    threshold: 0.14
  }
);

elementos.forEach((elemento) => {
  observador.observe(elemento);
});

// BARRA DOURADA QUE ACOMPANHA A ROLAGEM
const progress = document.getElementById("progress");

function atualizarProgresso() {
  const altura =
    document.documentElement.scrollHeight - window.innerHeight;

  const porcentagem =
    altura > 0 ? (window.scrollY / altura) * 100 : 0;

  progress.style.width = `${porcentagem}%`;
}

window.addEventListener("scroll", atualizarProgresso, {
  passive: true
});

atualizarProgresso();

// DESTACA NO MENU A SEÇÃO QUE ESTÁ NA TELA
const secoes = document.querySelectorAll("main section[id]");
const linksMenu = nav.querySelectorAll("a");

const observadorMenu = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;

      linksMenu.forEach((link) => {
        const destino = link.getAttribute("href");

        link.classList.toggle(
          "active",
          destino === `#${entrada.target.id}`
        );
      });
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px"
  }
);

secoes.forEach((secao) => {
  observadorMenu.observe(secao);
});