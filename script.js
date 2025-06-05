
document.addEventListener("DOMContentLoaded", () => { // Adiciona os itens ao carrinho
  const botoes = document.querySelectorAll(".botao-adicionar");

  botoes.forEach((botao) => { // Seleciona todos os botões de adicionar ao carrinho
    botao.addEventListener("click", () => {
      const nome = botao.dataset.nome;
      let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
      carrinho.push(nome);
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
      alert(`${nome} adicionado ao carrinho!`);
    });
  });
});
function carregarCarrinho() { // Carrega os itens do carrinho do localStorage e exibe na página
  const lista = document.getElementById("lista-carrinho");
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  if (carrinho.length === 0) { // Verifica se o carrinho está vazio
    lista.innerHTML = "<p>O carrinho está vazio.</p>";
    return;
  }

  lista.innerHTML = ""; // Limpa a lista antes de adicionar os itens
  carrinho.forEach((item, index) => { // Cria um elemento para cada item do carrinho
    const div = document.createElement("div");
    div.className = "item-carrinho";
    div.innerHTML = ` 
            <span>${item}</span>
            <button class="remover" onclick="removerItem(${index})">Remover</button>
          `;
    lista.appendChild(div);
  }); // Adiciona os itens à lista do carrinho
}

function removerItem(index) { // Remove um item do carrinho com base no índice
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || []; // Obtém o carrinho do localStorage
  carrinho.splice(index, 1);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  carregarCarrinho();
}

function finalizarCompra() { // Finaliza a compra e exibe um alerta com o método de pagamento selecionado
  const metodo = document.querySelector(
    'input[name="pagamento"]:checked'
  ).value;
  alert(`Compra finalizada com ${metodo.toUpperCase()}!`); // Exibe um alerta com o método de pagamento
  localStorage.removeItem("carrinho");
  location.reload();
}

document.addEventListener("DOMContentLoaded", carregarCarrinho); // Carrega o carrinho ao carregar a página

document.addEventListener("DOMContentLoaded", () => { // Adiciona o evento de submit ao formulário de login
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");

  loginForm.addEventListener("submit", function (e) { // Previne o comportamento padrão do formulário
    e.preventDefault();

    const email = document.getElementById("email").value; // Obtém o valor do campo de e-mail
    const password = document.getElementById("password").value;

    if (email === "usuario@exemplo.com" && password === "1234") { // Verifica se o e-mail e a senha estão corretos
      loginMessage.className = "sucesso";
      loginMessage.textContent = "Login realizado com sucesso!";
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    } else {
      loginMessage.className = "erro"; // Adiciona a classe de erro ao elemento de mensagem
      loginMessage.textContent = "E-mail ou senha incorretos.";
    }
  });
});
