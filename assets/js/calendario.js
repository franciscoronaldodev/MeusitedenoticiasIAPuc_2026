// Calendário de lançamentos das ferramentas
// Lê os dados do JSON Server (db.json) e, se o servidor não estiver rodando,
// usa o array "dados" que vem do app.js como reserva.

const API_URL = "http://localhost:3000/ferramentas";

// Busca as ferramentas. Primeiro tenta o JSON Server; se falhar, cai no array local.
async function carregarFerramentas() {
  try {
    const resp = await fetch(API_URL);
    if (!resp.ok) throw new Error("Resposta inválida do servidor");
    return await resp.json();
  } catch (e) {
    // Servidor offline ou página aberta direto pelo arquivo: usa o app.js
    if (typeof dados !== "undefined" && dados.ferramentas) {
      return dados.ferramentas;
    }
    return [];
  }
}

// Transforma cada ferramenta em um evento do calendário
function montarEventos(ferramentas) {
  return ferramentas
    .filter(f => f.lancamento) // ignora itens sem data
    .map(f => ({
      title: f.nome,
      date: f.lancamento,
      extendedProps: {
        descricao: f.descricao,
        categoria: f.categoria,
        empresa: f.empresa,
        lancamento: f.lancamento,
        id: f.id
      }
    }));
}

// Formata a data (AAAA-MM-DD) para o formato brasileiro
function formatarData(iso) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

function mostrarAviso(texto) {
  const aviso = document.getElementById("calAviso");
  if (!aviso) return;
  aviso.textContent = texto;
  aviso.classList.remove("d-none");
}

// Abre o modal com os detalhes do evento clicado
function abrirDetalhes(info) {
  const p = info.event.extendedProps;
  document.querySelector("#eventoModalTitulo span").textContent = info.event.title;
  document.getElementById("eventoModalCategoria").textContent = p.categoria || "";
  document.getElementById("eventoModalDescricao").textContent = p.descricao || "";
  document.getElementById("eventoModalEmpresa").textContent = p.empresa || "";
  document.getElementById("eventoModalData").textContent = "Lançamento: " + formatarData(p.lancamento);
  document.getElementById("eventoModalLink").href = "detalhe.html?id=" + p.id;

  const modal = new bootstrap.Modal(document.getElementById("eventoModal"));
  modal.show();
}

document.addEventListener("DOMContentLoaded", async () => {
  const el = document.getElementById("calendar");
  if (!el) return;

  const ferramentas = await carregarFerramentas();
  const eventos = montarEventos(ferramentas);

  if (eventos.length === 0) {
    mostrarAviso("Nenhuma ferramenta com data de lançamento foi encontrada.");
  }

  // Abre o calendário no mês do lançamento mais antigo, para já mostrar eventos
  let dataInicial;
  if (eventos.length > 0) {
    dataInicial = eventos.map(ev => ev.date).sort()[0];
  }

  const calendar = new FullCalendar.Calendar(el, {
    locale: "pt-br",
    initialView: "dayGridMonth",
    initialDate: dataInicial,
    height: "auto",
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,listMonth"
    },
    buttonText: {
      today: "Hoje",
      month: "Mês",
      list: "Lista"
    },
    events: eventos,
    eventColor: "#0d6efd",
    eventClick: function (info) {
      info.jsEvent.preventDefault();
      abrirDetalhes(info);
    }
  });

  calendar.render();

  // Garante que a tela abra no mês do primeiro lançamento
  if (dataInicial) {
    calendar.gotoDate(dataInicial);
  }
});
