const USD = 5.43
const EUR = 6.32
const GBP = 7.24

const form = document.querySelector('form')
const amount = document.querySelector('#amount')
const currency = document.querySelector('#currency')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')


amount.addEventListener('input', () => {
   const hasCharactersRegex = /\D+/g
   amount.value = amount.value.replace(hasCharactersRegex, "")
   console.log(amount.value)
}) 

form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case 'USD':
            convertCurrency(amount.value, USD, 'US$')
            break
        case 'EUR':
            convertCurrency(amount.value, EUR, '€')
            break
        case 'GBP':
            convertCurrency(amount.value, GBP, '£')
            break
        default:
            alert("Informe uma moeda válida")
    }
} 

function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        let total = amount * price

        if (isNaN(total)) {
            return alert("Por favor, informa o valor corretamento para converter.")
        }

        total = formatCurrencyBRL(total).replace('R$', '')

        result.textContent = `${total} Reais`
        
        footer.classList.add('show-result')
    } catch (err) {
        footer.classList.remove('show-result')
        console.log(err)
        alert('Não foi possível realizar a conversão. Tente novamente mais tarde.')
    }
}

function formatCurrencyBRL(value) {
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}