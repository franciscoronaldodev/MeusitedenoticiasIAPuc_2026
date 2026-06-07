const dados = {
  ferramentas: [
    {
      id: 1,
      nome: "ChatGPT",
      descricao: "Assistente de IA conversacional da OpenAI, capaz de responder perguntas, gerar textos e auxiliar em tarefas criativas.",
      conteudo: "ChatGPT é um modelo de linguagem avançado desenvolvido pela OpenAI, baseado na arquitetura GPT-4. Utilizado por milhões de pessoas ao redor do mundo, ele é capaz de redigir textos, programar, traduzir idiomas, explicar conceitos e muito mais, tudo por meio de uma interface de chat simples e intuitiva.",
      empresa: "OpenAI",
      categoria: "Chatbot",
      lancamento: "2022-11-30",
      destaque: true,
      imagem_principal: "https://picsum.photos/seed/chatgpt-main/1200/500",
      recursos: [
        { id: 1, nome: "Geração de Texto", descricao: "Cria artigos, redações e e-mails com alta qualidade.", imagem: "https://picsum.photos/seed/gpt-texto/400/300" },
        { id: 2, nome: "Programação Assistida", descricao: "Auxilia na escrita e depuração de código em diversas linguagens.", imagem: "https://picsum.photos/seed/gpt-codigo/400/300" },
        { id: 3, nome: "Análise de Dados", descricao: "Interpreta planilhas, gráficos e resultados de pesquisas.", imagem: "https://picsum.photos/seed/gpt-dados/400/300" }
      ]
    },
    {
      id: 2,
      nome: "Claude",
      descricao: "IA da Anthropic focada em segurança e respostas confiáveis, ideal para tarefas complexas de raciocínio.",
      conteudo: "Claude é o assistente de inteligência artificial desenvolvido pela Anthropic, empresa fundada por ex-pesquisadores da OpenAI. Destaca-se por sua atenção à segurança, pela capacidade de processar documentos extensos e por respostas equilibradas e detalhadas, sendo muito utilizado em ambientes corporativos e acadêmicos.",
      empresa: "Anthropic",
      categoria: "Chatbot",
      lancamento: "2023-03-14",
      destaque: true,
      imagem_principal: "https://picsum.photos/seed/claude-main/1200/500",
      recursos: [
        { id: 1, nome: "Análise de Documentos", descricao: "Lê e resume PDFs, contratos e relatórios longos.", imagem: "https://picsum.photos/seed/claude-docs/400/300" },
        { id: 2, nome: "Raciocínio Avançado", descricao: "Resolve problemas lógicos e matemáticos com profundidade.", imagem: "https://picsum.photos/seed/claude-logic/400/300" },
        { id: 3, nome: "Escrita Criativa", descricao: "Produz histórias, roteiros e poesias com alta qualidade.", imagem: "https://picsum.photos/seed/claude-write/400/300" }
      ]
    },
    {
      id: 3,
      nome: "Midjourney",
      descricao: "Ferramenta de geração de imagens por IA com resultados artísticos e fotorrealistas impressionantes.",
      conteudo: "Midjourney é uma das ferramentas de geração de imagens por inteligência artificial mais populares do mundo. A partir de descrições textuais (prompts), ela cria ilustrações, pinturas digitais e fotografias simuladas com qualidade artística excepcional, sendo muito utilizada por designers, artistas e profissionais de marketing.",
      empresa: "Midjourney Inc.",
      categoria: "Geração de Imagens",
      lancamento: "2022-07-12",
      destaque: true,
      imagem_principal: "https://picsum.photos/seed/midjourney-main/1200/500",
      recursos: [
        { id: 1, nome: "Arte Digital", descricao: "Cria ilustrações em diferentes estilos artísticos.", imagem: "https://picsum.photos/seed/mj-arte/400/300" },
        { id: 2, nome: "Fotorrealismo", descricao: "Gera imagens com aparência fotográfica ultra-realista.", imagem: "https://picsum.photos/seed/mj-foto/400/300" },
        { id: 3, nome: "Design de Personagens", descricao: "Desenvolve personagens originais para jogos e histórias.", imagem: "https://picsum.photos/seed/mj-char/400/300" }
      ]
    },
    {
      id: 4,
      nome: "GitHub Copilot",
      descricao: "Assistente de programação com IA que sugere código em tempo real diretamente no editor.",
      conteudo: "GitHub Copilot é uma ferramenta de inteligência artificial desenvolvida pelo GitHub em parceria com a OpenAI. Integrado diretamente nos principais editores de código como VS Code, ele sugere linhas e blocos de código enquanto o desenvolvedor digita, acelerando significativamente o processo de desenvolvimento de software.",
      empresa: "GitHub / Microsoft",
      categoria: "Assistente de Código",
      lancamento: "2022-06-21",
      destaque: false,
      imagem_principal: "https://picsum.photos/seed/copilot-main/1200/500",
      recursos: [
        { id: 1, nome: "Autocompletar Código", descricao: "Completa linhas e funções automaticamente enquanto digita.", imagem: "https://picsum.photos/seed/cop-complete/400/300" },
        { id: 2, nome: "Geração de Testes", descricao: "Cria testes unitários e de integração para funções existentes.", imagem: "https://picsum.photos/seed/cop-tests/400/300" },
        { id: 3, nome: "Documentação Automática", descricao: "Gera comentários e documentação técnica para o código.", imagem: "https://picsum.photos/seed/cop-docs/400/300" }
      ]
    },
    {
      id: 5,
      nome: "Gemini",
      descricao: "Modelo multimodal do Google capaz de processar texto, imagens, áudio e vídeo simultaneamente.",
      conteudo: "Gemini é o modelo de inteligência artificial mais avançado do Google DeepMind, lançado como sucessor do Bard. Sua principal característica é a capacidade multimodal nativa, permitindo compreender e gerar texto, imagens, áudio e vídeo de forma integrada. Disponível em diferentes tamanhos: Ultra, Pro e Nano.",
      empresa: "Google DeepMind",
      categoria: "Multimodal",
      lancamento: "2023-12-06",
      destaque: false,
      imagem_principal: "https://picsum.photos/seed/gemini-main/1200/500",
      recursos: [
        { id: 1, nome: "Visão Computacional", descricao: "Analisa imagens e vídeos com precisão e velocidade.", imagem: "https://picsum.photos/seed/gem-vision/400/300" },
        { id: 2, nome: "Integração Google", descricao: "Conecta-se ao Workspace, Maps e demais serviços Google.", imagem: "https://picsum.photos/seed/gem-google/400/300" },
        { id: 3, nome: "Código Multilingue", descricao: "Programa em dezenas de linguagens com contexto amplo.", imagem: "https://picsum.photos/seed/gem-code/400/300" }
      ]
    },
    {
      id: 6,
      nome: "Sora",
      descricao: "Modelo de geração de vídeo da OpenAI que cria cenas realistas a partir de descrições textuais.",
      conteudo: "Sora é o modelo de geração de vídeo da OpenAI, capaz de criar clipes de até um minuto com alta coerência visual e narrativa a partir de simples descrições textuais. Representa um salto qualitativo na área de síntese de vídeo por IA, com potencial impacto em cinema, publicidade e educação.",
      empresa: "OpenAI",
      categoria: "Geração de Vídeo",
      lancamento: "2024-02-15",
      destaque: false,
      imagem_principal: "https://picsum.photos/seed/sora-main/1200/500",
      recursos: [
        { id: 1, nome: "Geração de Vídeo", descricao: "Cria clipes realistas com narrativa coerente a partir de texto.", imagem: "https://picsum.photos/seed/sora-video/400/300" },
        { id: 2, nome: "Animação IA", descricao: "Gera animações fluidas com personagens e cenários detalhados.", imagem: "https://picsum.photos/seed/sora-anim/400/300" },
        { id: 3, nome: "Edição Criativa", descricao: "Edita e transforma vídeos existentes com inteligência artificial.", imagem: "https://picsum.photos/seed/sora-edit/400/300" }
      ]
    },
    {
      id: 7,
      nome: "DALL-E",
      descricao: "Modelo da OpenAI que gera imagens originais a partir de descrições em linguagem natural.",
      conteudo: "DALL-E é o modelo de geração de imagens da OpenAI, capaz de criar ilustrações, fotos e artes a partir de descrições textuais. Combina criatividade e precisão, sendo amplamente usado em design, publicidade e produção de conteúdo visual.",
      empresa: "OpenAI",
      categoria: "Geração de Imagens",
      lancamento: "2022-06-10",
      destaque: false,
      imagem_principal: "https://picsum.photos/seed/dalle-main/1200/500",
      recursos: [
        { id: 1, nome: "Texto para Imagem", descricao: "Cria imagens originais a partir de descrições escritas.", imagem: "https://picsum.photos/seed/dalle-txt/400/300" },
        { id: 2, nome: "Variações", descricao: "Gera diferentes versões de uma mesma imagem.", imagem: "https://picsum.photos/seed/dalle-var/400/300" },
        { id: 3, nome: "Edição de Imagens", descricao: "Edita partes de uma imagem mantendo o contexto.", imagem: "https://picsum.photos/seed/dalle-edit/400/300" }
      ]
    }
  ]
};

const API_FERRAMENTAS = "http://localhost:3000/ferramentas";

let listaFerramentas = [];

async function carregarFerramentas() {
  try {
    const resp = await fetch(API_FERRAMENTAS);
    if (!resp.ok) throw new Error("erro");
    return await resp.json();
  } catch (e) {
    return dados.ferramentas;
  }
}

function ehFavorito(id) {
  const usuario = usuarioLogado();
  if (!usuario || !usuario.favoritos) return false;
  return usuario.favoritos.includes(id);
}

async function alternarFavorito(id) {
  const usuario = usuarioLogado();
  if (!usuario) {
    window.location.href = "login.html";
    return;
  }
  let favoritos = usuario.favoritos || [];
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter(f => f !== id);
  } else {
    favoritos = favoritos.concat(id);
  }
  try {
    const resp = await fetch(`${API_USUARIOS}/${usuario.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ favoritos: favoritos })
    });
    const atualizado = await resp.json();
    salvarSessao(atualizado);
  } catch (e) {
    alert("Não foi possível salvar o favorito.");
    return;
  }
  renderCards(listaFerramentas);
  renderDetalhe();
}

function botaoFavorito(id, inline) {
  const cheio = ehFavorito(id);
  const icone = cheio ? "bi-heart-fill" : "bi-heart";
  const classe = inline ? "btn favorito-btn favorito-btn-inline" : "btn favorito-btn";
  return `<button type="button" class="${classe}" data-id="${id}">
            <i class="bi ${icone}"></i>
          </button>`;
}

function ligarBotoesFavorito() {
  document.querySelectorAll(".favorito-btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      alternarFavorito(parseInt(btn.dataset.id));
    });
  });
}

function renderCarousel() {
  const inner = document.getElementById("carouselInner");
  const indicators = document.getElementById("carouselIndicators");
  if (!inner || !indicators) return;

  inner.innerHTML = "";
  indicators.innerHTML = "";

  const destaques = listaFerramentas.filter(f => f.destaque);

  destaques.forEach((item, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("data-bs-target", "#carouselDestaques");
    btn.setAttribute("data-bs-slide-to", index);
    btn.setAttribute("aria-label", `Slide ${index + 1}`);
    if (index === 0) {
      btn.classList.add("active");
      btn.setAttribute("aria-current", "true");
    }
    indicators.appendChild(btn);

    const slide = document.createElement("div");
    slide.className = `carousel-item${index === 0 ? " active" : ""}`;
    slide.innerHTML = `
      <img src="${item.imagem_principal}" class="d-block w-100 carousel-img" alt="${item.nome}" />
      <div class="carousel-overlay"></div>
      <div class="carousel-caption carousel-caption-custom">
        <span class="badge bg-primary mb-2 fs-6">${item.categoria}</span>
        <h3 class="fw-bold">${item.nome}</h3>
        <p class="d-none d-md-block">${item.descricao}</p>
        <a href="detalhes.html?id=${item.id}" class="btn btn-primary mt-1">
          Ver Detalhes <i class="bi bi-arrow-right ms-1"></i>
        </a>
      </div>
    `;
    inner.appendChild(slide);
  });
}

function renderCards(lista) {
  const container = document.getElementById("cardsContainer");
  if (!container) return;

  container.innerHTML = "";

  if (lista.length === 0) {
    container.innerHTML = '<p class="text-muted">Nenhuma ferramenta encontrada.</p>';
    return;
  }

  lista.forEach(item => {
    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML = `
      <div class="card h-100 card-ferramenta bg-dark-card border-0 shadow">
        <div class="card-img-wrapper">
          <img src="${item.imagem_principal}" class="card-img-top" alt="${item.nome}" />
          ${item.destaque ? '<span class="badge bg-warning text-dark card-badge"><i class="bi bi-star-fill me-1"></i>Destaque</span>' : ""}
          ${botaoFavorito(item.id)}
        </div>
        <div class="card-body d-flex flex-column">
          <span class="badge bg-primary mb-2 align-self-start">${item.categoria}</span>
          <h5 class="card-title text-white fw-bold">${item.nome}</h5>
          <p class="card-text text-muted flex-grow-1">${item.descricao}</p>
          <div class="d-flex justify-content-between align-items-center mt-3">
            <small class="text-muted"><i class="bi bi-building me-1"></i>${item.empresa}</small>
            <a href="detalhes.html?id=${item.id}" class="btn btn-outline-primary btn-sm">Ver mais</a>
          </div>
        </div>
      </div>
    `;
    container.appendChild(col);
  });

  ligarBotoesFavorito();
}

function ligarBusca() {
  const campo = document.getElementById("campoBusca");
  if (!campo) return;
  campo.addEventListener("input", function () {
    const texto = campo.value.toLowerCase().trim();
    const filtradas = listaFerramentas.filter(f =>
      f.nome.toLowerCase().includes(texto) ||
      f.descricao.toLowerCase().includes(texto)
    );
    renderCards(filtradas);
  });
}

function renderDetalhe() {
  const container = document.getElementById("detalheContainer");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const item = listaFerramentas.find(f => f.id === id);

  if (!item) {
    container.innerHTML = `
      <div class="container py-5 text-center text-white">
        <i class="bi bi-exclamation-triangle-fill display-3 text-warning"></i>
        <h2 class="mt-3">Ferramenta não encontrada</h2>
        <p class="text-muted">Verifique o endereço ou volte ao início.</p>
        <a href="index.html" class="btn btn-primary mt-2">
          <i class="bi bi-house-fill me-1"></i>Voltar ao Início
        </a>
      </div>
    `;
    return;
  }

  document.title = `${item.nome} — AI Hub`;

  const dataFormatada = new Date(item.lancamento + "T12:00:00").toLocaleDateString("pt-BR", {
    day: "2-digit", month: "long", year: "numeric"
  });

  const recursosHTML = item.recursos.map(r => `
    <div class="col">
      <div class="card bg-dark-card border-0 shadow h-100 recurso-card">
        <img src="${r.imagem}" class="card-img-top recurso-img" alt="${r.nome}" />
        <div class="card-body text-center">
          <h6 class="card-title text-white fw-bold">${r.nome}</h6>
          <p class="card-text text-muted small">${r.descricao}</p>
        </div>
      </div>
    </div>
  `).join("");

  container.innerHTML = `
    <section class="py-5 section-detalhe-info">
      <div class="container">
        <a href="index.html" class="btn btn-outline-secondary btn-sm mb-4">
          <i class="bi bi-arrow-left me-1"></i> Voltar
        </a>
        <div class="row g-5 align-items-start">
          <div class="col-lg-6">
            <div class="detalhe-img-wrapper">
              <img src="${item.imagem_principal}" alt="${item.nome}"
                   class="img-fluid rounded-3 shadow-lg w-100 detalhe-img" />
              ${item.destaque
                ? '<span class="badge bg-warning text-dark detalhe-badge"><i class="bi bi-star-fill me-1"></i>Destaque</span>'
                : ""}
            </div>
          </div>
          <div class="col-lg-6 text-white">
            <div class="d-flex justify-content-between align-items-start">
              <span class="badge bg-primary fs-6 mb-3">${item.categoria}</span>
              ${botaoFavorito(item.id, true)}
            </div>
            <h1 class="display-5 fw-bold mb-3">${item.nome}</h1>
            <p class="lead text-secondary mb-4">${item.descricao}</p>
            <div class="detalhe-info-grid mb-4">
              <div class="detalhe-info-item">
                <i class="bi bi-building-fill text-primary"></i>
                <div>
                  <small class="text-muted d-block">Empresa</small>
                  <span class="fw-semibold">${item.empresa}</span>
                </div>
              </div>
              <div class="detalhe-info-item">
                <i class="bi bi-calendar-check-fill text-primary"></i>
                <div>
                  <small class="text-muted d-block">Lançamento</small>
                  <span class="fw-semibold">${dataFormatada}</span>
                </div>
              </div>
              <div class="detalhe-info-item">
                <i class="bi bi-tag-fill text-primary"></i>
                <div>
                  <small class="text-muted d-block">Categoria</small>
                  <span class="fw-semibold">${item.categoria}</span>
                </div>
              </div>
              <div class="detalhe-info-item">
                <i class="bi bi-puzzle-fill text-primary"></i>
                <div>
                  <small class="text-muted d-block">Recursos</small>
                  <span class="fw-semibold">${item.recursos.length} disponíveis</span>
                </div>
              </div>
              <div class="detalhe-info-item">
                <i class="bi bi-star-half text-primary"></i>
                <div>
                  <small class="text-muted d-block">Em Destaque</small>
                  <span class="fw-semibold">${item.destaque ? "Sim" : "Não"}</span>
                </div>
              </div>
              <div class="detalhe-info-item">
                <i class="bi bi-hash text-primary"></i>
                <div>
                  <small class="text-muted d-block">ID</small>
                  <span class="fw-semibold">#${String(item.id).padStart(3, "0")}</span>
                </div>
              </div>
            </div>
            <div class="detalhe-conteudo">
              <h5 class="text-primary mb-2">
                <i class="bi bi-info-circle-fill me-2"></i>Sobre a ferramenta
              </h5>
              <p class="text-secondary mb-0">${item.conteudo}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-dark">
      <div class="container">
        <h2 class="section-title text-white mb-4">
          <i class="bi bi-images text-primary me-2"></i>Recursos de ${item.nome}
        </h2>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          ${recursosHTML}
        </div>
      </div>
    </section>
  `;

  ligarBotoesFavorito();
}

document.addEventListener("DOMContentLoaded", async () => {
  const ehHome = document.getElementById("campoBusca");
  const ehDetalhe = document.getElementById("detalheContainer");
  if (!ehHome && !ehDetalhe) return;
  listaFerramentas = await carregarFerramentas();
  renderCarousel();
  renderCards(listaFerramentas);
  ligarBusca();
  renderDetalhe();
});
