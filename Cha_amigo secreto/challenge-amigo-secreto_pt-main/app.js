// Array para armazenar os nomes dos amigos
let amigos = [];
let resultados = [];
let indiceResultado = 0;

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        input.value = ''; // Limpa o campo de entrada
        atualizarListaAmigos();
    } else {
        alert('Nome inválido ou já adicionado!');
    }
}

// Atualiza a lista exibida na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear os amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para sortear.');
        return;
    }

    resultados = [];
    let amigosSorteados = [...amigos];

    amigos.forEach(amigo => {
        if (amigosSorteados.length === 1 && amigosSorteados[0] === amigo) {
            sortearAmigo(); // Recomeça o sorteio se houver erro
            return;
        }

        let index;
        do {
            index = Math.floor(Math.random() * amigosSorteados.length);
        } while (amigosSorteados[index] === amigo);

        const amigoSorteado = amigosSorteados[index];
        resultados.push(`${amigo} sorteou ${amigoSorteado}`);
        amigosSorteados.splice(index, 1);
    });

    indiceResultado = 0;
    mostrarResultados();
}

// Exibe os resultados na tela
function mostrarResultados() {
    const listaResultados = document.getElementById('resultado');
    listaResultados.innerHTML = '';

    resultados.forEach(resultado => {
        const li = document.createElement('li');
        li.textContent = resultado;
        listaResultados.appendChild(li);
    });
}
