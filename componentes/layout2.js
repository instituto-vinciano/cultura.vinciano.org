/*
 PARAÍBA PONTO CULTURAL — LAYOUT COMPARTILHADO

 Este arquivo gera o cabeçalho e o rodapé usados pela home e pelas matérias.
 Assim, uma alteração aqui passa a valer para todas as páginas que carregam
 este componente.

 Funciona também ao abrir os HTMLs localmente com duplo clique (file://),
 pois não usa fetch().
*/
(function () {
  const currentScript = document.currentScript;
  const scriptSrc = currentScript ? (currentScript.getAttribute("src") || "") : "";
  const root = scriptSrc.startsWith("../") ? "../" : "";

  const onMatter = /\/materias\//i.test(window.location.pathname.replace(/\\/g, "/"));
  const homeUrl = root + "index.html";

  const headerTarget = document.getElementById("site-header");
  const footerTarget = document.getElementById("site-footer");

  if (headerTarget) {
    headerTarget.innerHTML = `
      <header class="site-header">
        <div class="main-header container">
          <a class="brand" href="${homeUrl}" aria-label="Paraíba ponto Cultural — página inicial">
            <img src="${root}assets/logo-ppc.png" alt="Paraíba ponto Cultural">
          </a>

          <button class="menu-toggle" aria-expanded="false" aria-controls="primary-nav">
            <span class="sr-only">Abrir menu</span>
            <span></span><span></span><span></span>
          </button>

          <nav id="primary-nav" class="primary-nav final-nav" aria-label="Navegação principal">
            <a class="nav-item${onMatter ? "" : " current"}" href="${homeUrl}">Início</a>
            <a class="nav-item${onMatter ? " current" : ""}" href="${root}materias/index.html">Matérias</a>

            <div class="nav-item-wrap">
              <a class="nav-item nav-item-themes" href="${homeUrl}#temas" aria-haspopup="true" aria-expanded="false">
                Temas <span class="nav-arrow" aria-hidden="true">⌄</span>
              </a>
              <div class="nav-submenu" role="menu">
                <a href="${homeUrl}#patrimonio" role="menuitem">Patrimônio</a>
                <a href="${homeUrl}#literatura" role="menuitem">Literatura</a>
                <a href="${homeUrl}#artes" role="menuitem">Artes</a>
                <a href="${homeUrl}#audiovisual" role="menuitem">Audiovisual</a>
                <a href="${homeUrl}#lugares" role="menuitem">Lugares</a>
                <a href="${homeUrl}#personagens" role="menuitem">Personagens</a>
              </div>
            </div>

            <a class="nav-item" href="${homeUrl}#artigos-title">Artigos</a>
            <a class="nav-item" href="${homeUrl}#codice">Códice</a>
            <a class="nav-item" href="${homeUrl}#sobre">Sobre</a>
          </nav>
        </div>
      </header>
    `;
  }

  if (footerTarget) {
    footerTarget.innerHTML = `
      <footer class="site-footer" id="contato">
        <div class="container footer-main">
          <div class="footer-brand">
            <img src="${root}assets/logo-dark.png" alt="Paraíba ponto Cultural">
            <p>Um projeto editorial do Instituto Vinciano de Artes e Ciências dedicado à cultura, memória e patrimônio paraibanos.</p>
          </div>

          <nav class="footer-nav" aria-label="Navegação do rodapé">
            <div>
              <h2>Portal</h2>
              <a href="${homeUrl}">Início</a>
              <a href="${homeUrl}#ultimas">Matérias</a>
              <a href="${homeUrl}#artigos-title">Artigos</a>
              <a href="${homeUrl}#codice">Códice Parahyba</a>
            </div>
            <div>
              <h2>Temas</h2>
              <a href="${homeUrl}#patrimonio">Patrimônio</a>
              <a href="${homeUrl}#literatura">Literatura</a>
              <a href="${homeUrl}#audiovisual">Audiovisual</a>
              <a href="${homeUrl}#artes">Artes</a>
            </div>
            <div>
              <h2>Institucional</h2>
              <a href="${homeUrl}#sobre">Sobre</a>
              <a href="${homeUrl}#contato">Contato</a>
              <a href="https://vinciano.org">Instituto Vinciano</a>
            </div>
          </nav>
        </div>

        <div class="container footer-bottom">
          <span>Paraíba ponto Cultural</span>
          <span>© 2026 Instituto Vinciano de Artes e Ciências</span>
        </div>
      </footer>
    `;
  }

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  const themes = document.querySelector(".final-nav .nav-item-themes");
  const submenu = document.querySelector(".final-nav .nav-submenu");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  if (themes && submenu) {
    themes.addEventListener("click", (event) => {
      if (window.matchMedia("(max-width: 900px)").matches) {
        event.preventDefault();
        const open = submenu.style.display === "block";
        submenu.style.display = open ? "none" : "block";
        themes.setAttribute("aria-expanded", open ? "false" : "true");
      }
    });
  }

  window.addEventListener("resize", () => {
    if (!window.matchMedia("(max-width: 900px)").matches) {
      if (nav) nav.classList.remove("open");
      if (submenu) submenu.style.display = "";
      if (toggle) toggle.setAttribute("aria-expanded", "false");
      if (themes) themes.setAttribute("aria-expanded", "false");
    }
  });
})();
