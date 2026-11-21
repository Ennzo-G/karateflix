// ==========================================================================
// KARATEFLIX • CONTROLADOR PRINCIPAL (app.js)
// Exibição Padronizada de Exigências das Faixas
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  let activeIndex = 0;

  // Elementos do DOM
  const beltsTrack = document.getElementById("netflixBeltsTrack");
  const centerDataPanel = document.getElementById("centerDataPanel");
  const heroGraduationBadge = document.getElementById("heroGraduationBadge");
  const heroBeltTransition = document.getElementById("heroBeltTransition");

  // ========================================================================
  // 1. Inicialização
  // ========================================================================
  function init() {
    renderBeltCards();
    renderSelectedBelt(0);
  }

  // ========================================================================
  // 2. Renderização das Miniaturas de Faixas (Estilo Netflix)
  // ========================================================================
  function renderBeltCards() {
    beltsTrack.innerHTML = "";

    FAIXAS_DATA.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = `belt-card-item ${index === activeIndex ? "active" : ""}`;
      card.dataset.index = index;

      // Faixa colorida gráfica
      const beltVisual = `
        <div class="card-belt-strip" style="background: linear-gradient(90deg, ${item.corOrigem} 0%, ${item.corOrigem} 45%, ${item.corDestino} 55%, ${item.corDestino} 100%);"></div>
      `;

      card.innerHTML = `
        <div class="card-top-row">
          <span class="card-grau-tag">${item.grau}</span>
          <span class="card-time-pill">${item.carencia.tempoMinimo}</span>
        </div>
        ${beltVisual}
        <div>
          <div class="card-belt-names">Para Faixa ${item.paraFaixa}</div>
          <div class="card-belt-transition">De ${item.deFaixa}</div>
        </div>
      `;

      card.addEventListener("click", () => {
        selectBelt(index);
      });

      beltsTrack.appendChild(card);
    });
  }

  function selectBelt(index) {
    activeIndex = index;

    // Atualizar classe ativa nas miniaturas
    document.querySelectorAll(".belt-card-item").forEach(card => {
      card.classList.toggle("active", parseInt(card.dataset.index) === index);
    });

    // Renderizar painel central de dados
    renderSelectedBelt(index);

    // Scroll suave para centralizar o card clicado se necessário
    const activeCard = document.querySelector(`.belt-card-item[data-index="${index}"]`);
    if (activeCard) {
      activeCard.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }

  // ========================================================================
  // 3. Renderização Padronizada dos Dados no Centro
  // ========================================================================
  function renderSelectedBelt(index) {
    const data = FAIXAS_DATA[index];
    if (!data) return;

    // Atualizar texto do Hero Banner
    if (heroGraduationBadge) {
      heroGraduationBadge.textContent = `${data.grau} • ${data.nivel.toUpperCase()}`;
    }
    if (heroBeltTransition) {
      heroBeltTransition.textContent = `De Faixa ${data.deFaixa} para Faixa ${data.paraFaixa}`;
    }

    // Renderizar Conteúdo Central Padronizado
    centerDataPanel.innerHTML = `
      <!-- Cabeçalho da Graduação -->
      <div class="panel-belt-header">
        <div class="header-transition-row">
          <span class="badge-grau-destaque">${data.grau}</span>
          <h2 class="panel-title">De Faixa ${data.deFaixa} para Faixa ${data.paraFaixa}</h2>
        </div>
        <p class="panel-summary-desc">${data.resumo}</p>
      </div>

      <!-- 1. BLOCO DE CARÊNCIA & AULAS MÍNIMAS -->
      <div class="standard-section">
        <h3 class="standard-block-title">
          <span class="block-num">1</span>
          <span>Requisitos Mínimos de Carência & Frequência</span>
        </h3>
        <div class="carencia-metrics-grid">
          <div class="metric-box">
            <span class="metric-label">Tempo Mínimo</span>
            <div class="metric-value">${data.carencia.tempoMinimo}</div>
          </div>
          <div class="metric-box">
            <span class="metric-label">Aulas Mínimas</span>
            <div class="metric-value">${data.carencia.aulasMinimas}</div>
          </div>
          <div class="metric-box">
            <span class="metric-label">Idade Mínima</span>
            <div class="metric-value">${data.carencia.idadeMinima}</div>
          </div>
        </div>
        <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.4rem;">
          * ${data.carencia.observacao}
        </div>
      </div>

      <!-- 2. BLOCO DE KIHON (TÉCNICAS BÁSICAS PADRONIZADAS) -->
      <div class="standard-section">
        <h3 class="standard-block-title">
          <span class="block-num">2</span>
          <span>Kihon Mínimo Exigido</span>
        </h3>
        <div class="kihon-container">
          <div class="kihon-rule-box">
            <strong>Regra Oficial de Execução:</strong> ${data.kihon.regraGeral}
          </div>

          ${renderKihonSubgroups(data.kihon)}
        </div>
      </div>

      <!-- 3. BLOCO DE KATÁ (FORMAS) -->
      <div class="standard-section">
        <h3 class="standard-block-title">
          <span class="block-num">3</span>
          <span>Katá Mínimo Exigido</span>
        </h3>
        <div class="kata-container">
          <div>
            <div class="kata-highlight-name">${data.kata.obrigatorio}</div>
            <span class="kata-mode-tag">Modo: ${data.kata.modoExecucao}</span>
          </div>
          <p class="kata-desc-text"><strong>Significado & Foco:</strong> ${data.kata.significado}</p>
          ${data.kata.livreEscolha ? `
            <div style="border-top: 1px solid var(--border-dark); padding-top: 0.6rem; margin-top: 0.4rem;">
              <strong style="color: var(--gold-accent); font-size: 0.85rem;">Katá de Escolha Livre:</strong>
              <div style="color: var(--text-light); font-size: 0.88rem; margin-top: 0.2rem;">${data.kata.livreEscolha}</div>
            </div>
          ` : ''}
        </div>
      </div>

      <!-- 4. BLOCO DE KUMITÊ (COMBATE) -->
      <div class="standard-section">
        <h3 class="standard-block-title">
          <span class="block-num">4</span>
          <span>Kumitê Mínimo Exigido</span>
        </h3>
        <div class="kumite-container">
          <div class="kumite-modality-name">${data.kumite.modalidade}</div>
          <p class="kumite-rules-text">${data.kumite.descricao}</p>
        </div>
      </div>

      <!-- 5. BLOCO DE CONHECIMENTOS & TESTES ESPECIAIS -->
      <div class="standard-section">
        <h3 class="standard-block-title">
          <span class="block-num">5</span>
          <span>Conhecimentos Gerais & Testes Especiais</span>
        </h3>
        <div class="conhecimentos-container">
          <div class="conhecimento-item">
            <span class="conhecimento-label">Teoria & Etiqueta:</span>
            <div style="color: var(--text-light);">${data.conhecimentos.teoria}</div>
          </div>
          ${data.conhecimentos.testeControle ? `
            <div class="conhecimento-item" style="border-top: 1px solid var(--border-dark); padding-top: 0.5rem;">
              <span class="conhecimento-label">Teste de Controle Milimétrico:</span>
              <div style="color: var(--text-light);">${data.conhecimentos.testeControle}</div>
            </div>
          ` : ''}
          ${data.conhecimentos.tameshiware ? `
            <div class="conhecimento-item" style="border-top: 1px solid var(--border-dark); padding-top: 0.5rem;">
              <span class="conhecimento-label">Tameshiware (Quebramento):</span>
              <div style="color: var(--text-light);">${data.conhecimentos.tameshiware}</div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  function renderKihonSubgroups(kihon) {
    let html = '';

    // Se o Kihon não for exigido a esse nível (como para 3º, 4º e 5º Dan)
    if (!kihon.bases.length && !kihon.socos.length && !kihon.defesas.length && !kihon.chutes.length) {
      return `
        <div style="padding: 1rem 0; color: var(--text-gray); font-size: 0.9rem;">
          Neste grau de alta mestria (Dan), o Kihon isolado básico não é mais avaliado de forma mecânica. A banca avalia o domínio técnico diretamente através da execução dos Katás Superiores, aplicação no Bunkai, Shiai Kumitê e testes de quebramento.
        </div>
      `;
    }

    // Bases
    if (kihon.bases && kihon.bases.length) {
      html += `
        <div class="kihon-subgroup">
          <div class="subgroup-title">Bases Fundamentais (Dachi):</div>
          <ul class="items-list-standard">
            ${kihon.bases.map(b => `<li><strong>${b.nome}</strong> <span class="desc">— ${b.desc}</span></li>`).join('')}
          </ul>
        </div>
      `;
    }

    // Socos e Golpes de Punho
    if (kihon.socos && kihon.socos.length) {
      html += `
        <div class="kihon-subgroup">
          <div class="subgroup-title">Técnicas de Soco & Mão (Tsuki / Uchi):</div>
          <ul class="items-list-standard">
            ${kihon.socos.map(s => `<li><strong>${s.nome}</strong> <span class="desc">— ${s.desc}</span></li>`).join('')}
          </ul>
        </div>
      `;
    }

    // Defesas
    if (kihon.defesas && kihon.defesas.length) {
      html += `
        <div class="kihon-subgroup">
          <div class="subgroup-title">Técnicas de Defesa (Uke):</div>
          <ul class="items-list-standard">
            ${kihon.defesas.map(d => `<li><strong>${d.nome}</strong> <span class="desc">— ${d.desc}</span></li>`).join('')}
          </ul>
        </div>
      `;
    }

    // Chutes
    if (kihon.chutes && kihon.chutes.length) {
      html += `
        <div class="kihon-subgroup">
          <div class="subgroup-title">Técnicas de Chute & Perna (Geri):</div>
          <ul class="items-list-standard">
            ${kihon.chutes.map(c => `<li><strong>${c.nome}</strong> <span class="desc">— ${c.desc}</span></li>`).join('')}
          </ul>
        </div>
      `;
    }

    return html;
  }

  // Executar
  init();
});
