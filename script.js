/* ==========================================================
   PPC — renderização do conteúdo editorial da página inicial
   Os dados ficam em dados/home.js.

   IMPORTANTE:
   O HTML gerado abaixo replica as classes e a estrutura visual
   do protótipo original para preservar toda a formatação.
   ========================================================== */
(function () {
  if (typeof HOME === "undefined") {
    console.error("PPC: dados/home.js não foi carregado.");
    return;
  }

  const esc = (value) => String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

  const url = (value) => esc(value || "#");

  function renderManchete() {
    const el = document.getElementById("home-manchete");
    if (!el) return;

    const m = HOME.manchete || {};
    el.innerHTML = `
      <a href="${url(m.link)}">
        ${m.categoria ? `<span class="category-link">${esc(m.categoria)}</span>` : ""}
        <h1>${esc(m.titulo)}</h1>
        ${m.imagem ? `<img src="${esc(m.imagem)}" alt="">` : ""}
        ${m.resumo ? `<p class="standfirst">${esc(m.resumo)}</p>` : ""}
        ${m.data ? `<p class="date">${esc(m.data)}</p>` : ""}
      </a>
    `;
  }

  function renderDestaques() {
    const el = document.getElementById("home-destaques");
    if (!el) return;

    el.innerHTML = (HOME.destaques || []).map(d => `
      <article class="side-story compact-side">
        <a href="${url(d.link)}">
          ${d.imagem ? `<img src="${esc(d.imagem)}" alt="" loading="lazy">` : ""}
          ${d.categoria ? `<span class="category-link">${esc(d.categoria)}</span>` : ""}
          <h2>${esc(d.titulo)}</h2>
          ${d.resumo ? `<p>${esc(d.resumo)}</p>` : ""}
        </a>
      </article>
    `).join("");
  }

  function renderUltimas() {
    const el = document.getElementById("home-ultimas");
    if (!el) return;

    el.innerHTML = (HOME.ultimas || []).map(u => `
      <article class="latest-item">
        <a href="${url(u.link)}">
          ${u.categoria ? `<span class="category-link">${esc(u.categoria)}</span>` : ""}
          <h2>${esc(u.titulo)}</h2>
          ${u.resumo ? `<p>${esc(u.resumo)}</p>` : ""}
          ${u.data ? `<time>${esc(u.data)}${u.hora ? ` · ${esc(u.hora)}` : ""}</time>` : (u.hora ? `<time>${esc(u.hora)}</time>` : "")}
        </a>
      </article>
    `).join("");
  }

  function renderEmPauta() {
    const el = document.getElementById("home-em-pauta");
    if (!el) return;

    el.innerHTML = (HOME.em_pauta || []).map(p => `
      <article class="text-strip-item">
        ${p.imagem ? `
          <figure class="strip-image">
            <a href="${url(p.link)}">
              <img src="${esc(p.imagem)}" alt="" loading="lazy">
            </a>
          </figure>` : ""}
        <h2><a href="${url(p.link)}">${esc(p.titulo)}</a></h2>
        ${p.resumo ? `<p>${esc(p.resumo)}</p>` : ""}
      </article>
    `).join("");
  }

  renderManchete();
  renderDestaques();
  renderUltimas();
  renderEmPauta();
})();
