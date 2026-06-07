const API_USUARIOS = "http://localhost:3000/usuarios";

function usuarioLogado() {
  const dado = sessionStorage.getItem("usuario");
  return dado ? JSON.parse(dado) : null;
}

function salvarSessao(usuario) {
  sessionStorage.setItem("usuario", JSON.stringify(usuario));
}

function sairDaConta() {
  sessionStorage.removeItem("usuario");
  window.location.href = "index.html";
}

async function atualizarSessao() {
  const atual = usuarioLogado();
  if (!atual) return null;
  try {
    const resp = await fetch(`${API_USUARIOS}/${atual.id}`);
    if (!resp.ok) return atual;
    const novo = await resp.json();
    salvarSessao(novo);
    return novo;
  } catch (e) {
    return atual;
  }
}

function montarMenu() {
  const menu = document.querySelector(".navbar-nav.ms-auto");
  if (!menu) return;

  const usuario = usuarioLogado();

  if (usuario) {
    if (usuario.admin) {
      const liCadastro = document.createElement("li");
      liCadastro.className = "nav-item";
      liCadastro.innerHTML = '<a class="nav-link" href="cadastro_itens.html"><i class="bi bi-plus-square me-1"></i>Cadastro de itens</a>';
      menu.appendChild(liCadastro);
    }

    const liFavoritos = document.createElement("li");
    liFavoritos.className = "nav-item";
    liFavoritos.innerHTML = '<a class="nav-link" href="favoritos.html"><i class="bi bi-heart-fill me-1"></i>Favoritos</a>';
    menu.appendChild(liFavoritos);

    const liUsuario = document.createElement("li");
    liUsuario.className = "nav-item";
    liUsuario.innerHTML = `<span class="nav-link text-secondary"><i class="bi bi-person-circle me-1"></i>${usuario.nome}</span>`;
    menu.appendChild(liUsuario);

    const liLogout = document.createElement("li");
    liLogout.className = "nav-item";
    liLogout.innerHTML = '<a class="nav-link" href="#" id="linkLogout"><i class="bi bi-box-arrow-right me-1"></i>Logout</a>';
    menu.appendChild(liLogout);

    document.getElementById("linkLogout").addEventListener("click", function (e) {
      e.preventDefault();
      sairDaConta();
    });
  } else {
    const liLogin = document.createElement("li");
    liLogin.className = "nav-item";
    liLogin.innerHTML = '<a class="nav-link" href="login.html"><i class="bi bi-box-arrow-in-right me-1"></i>Login</a>';
    menu.appendChild(liLogin);
  }
}

document.addEventListener("DOMContentLoaded", montarMenu);
