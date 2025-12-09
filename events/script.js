const input = document.querySelector('input');
const form = document.querySelector("form")

// input.addEventListener('input', () => {
//     const value = input.value
//     const regex = /\D+/g

//     //console.log(value.match(regex))

//     const isValid = regex.test(value)
//     console.log(isValid)    
// })


form.addEventListener("submit", (event) => {
    event.preventDefault()
    const hasNumberRegex = /\d+/g
    const value = input.value

    if (hasNumberRegex.test(value)) {
        alert("O texto contém números. Por favor, digite corretamente")
    } else {
        alert("Cadastro realizado com sucesso!!")
    }
})