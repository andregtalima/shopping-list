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

    if (text === '') return

    let newCards = document.createElement('div');

    newCards.innerHTML = `
        <div class="card">
            <div class="checkbox">
                <input type="checkbox" name="item">
                <label>${text}</label>
            </div>
            <img src="./assets/trash.svg" alt="">
        </div>
    `

    cards.appendChild(newCards);

    newCards.querySelector('.card img').addEventListener('click', () => {
        const checkbox = newCards.querySelector('input[type="checkbox"]');

        if (!checkbox.checked) {
            alert("Marque o item da lista que deseja remover.");
            return;
        } 
        newCards.remove()
        showRemoveMessage()
    })

    inputText.value = '';
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

