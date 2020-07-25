// 1) Temos que referenciar o input
let input = document.querySelector('input[name=tarefa]');

// 2) Temos que referenciar o button
let btn = document.querySelector('#botao');

// 3) Temos que referenciar a lista
let lista = document.querySelector('#lista');

let tarefas = [
    'Ver filmes',
    'Ler livro',
    'Estudar React',
    'Aprender Node'
];

function renderizarTarefas() {
    for(tarefa of tarefas) {
        // Criar o item da lista
        let itemLista = document.createElement('li');

        // Adicionar classes no item da lista
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

        // Criar um texto
        let itemTexto = document.createTextNode(tarefa);

        // Adicionar o texto no item da lista
        itemLista.appendChild(itemTexto);

        // Adicionar o item da lista na lista
        lista.appendChild(itemLista);
    }
}

// Executando a função para renderizar as tarefas
renderizarTarefas();