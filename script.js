// Promoções Dinâmicas
const promocoes = {
    "segunda": "Desconto de 10% no Prato X",
    "terca": "Jantar Temático: Cozinha Italiana",
    // Outros dias...
};

function atualizarPromocao() {
    const diaSemana = new Date().toLocaleString('pt', { weekday: 'long' }).toLowerCase();
    const promoBanner = document.getElementById('promo-banner');
    promoBanner.textContent = promocoes[diaSemana] || "Confira nossas promoções!";
}
atualizarPromocao();

// Filtros de Menu
function filtrarMenu(filtro) {
    const itens = document.querySelectorAll('#menu-itens .item');
    itens.forEach(item => {
        if (item.classList.contains(filtro)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Validação de Reservas
function validarReserva() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const pessoas = document.getElementById('pessoas').value;

    if (nome && email && telefone && data && hora && pessoas) {
        document.getElementById('reserva-status').textContent = "Reserva Enviada!";
        return false;
    } else {
        document.getElementById('reserva-status').textContent = "Preencha todos os campos!";
        return false;
    }
}

// Validação de Formulário de Contacto
function validarContacto() {
    const nome = document.getElementById('contato-nome').value;
    const email = document.getElementById('contato-email').value;
    const assunto = document.getElementById('contato-assunto').value;
    const mensagem = document.getElementById('contato-mensagem').value;

    if (nome && email && assunto && mensagem) {
        alert("Mensagem Enviada!");
        return false;
    } else {
        alert("Preencha todos os campos!");
        return false;
    }
}
