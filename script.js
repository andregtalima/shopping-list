// Buscando as tags no DOM

const form = document.querySelector('form');
const inputText = document.querySelector('form input');
const cards = document.querySelector('.cards')
const footer = document.querySelector('footer');

// Buscando o evento do input
inputText.addEventListener('input', () => {
    // Pegando e valor do input e trabalhado com regex para não adionar números ao input
    inputText.value = inputText.value.replace(/\d+/g, '');
});

// Buscando o evento do formulário
form.addEventListener('submit', (event) => {
    event.preventDefault();
    addCads()
})

// Criando uma função para adicionar cards
function addCads() {
    let text = inputText.value.trim();
    if (!text) return

    const card = document.createElement('div');
    card.classList.add('card');

    const checkboxWrapper = document.createElement('div');
    checkboxWrapper.classList.add('checkbox');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `item-${Date.now()}`;

    const label = document.createElement('label');
    label.classList.add('label');
    label.textContent = text;
    label.setAttribute('for', checkbox.id);

    const trash = document.createElement('img');
    trash.src = './assets/trash.svg';
    trash.alt = 'Remove item'

    checkboxWrapper.appendChild(checkbox);
    checkboxWrapper.appendChild(label);

    card.appendChild(checkboxWrapper);
    card.appendChild(trash);
    
    cards.appendChild(card);

    inputText.value = '';

    trash.addEventListener('click', () => {
        if (!checkbox.checked) {
            alert("Marque o item da lista que deseja remover.");
            return
        }

        card.remove();
        showRemoveMessage();
    })
}

function showRemoveMessage() {
    footer.classList.add('show');

    const btnClose = footer.querySelector('img');
    btnClose.onclick = () => {
        footer.classList.remove('show');
    }

    setTimeout(() => {
        footer.classList.remove('show')
    }, 2000);
}

