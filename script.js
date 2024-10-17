
const buttonGravar = document.querySelector('.gravar')


let cliente = []

buttonGravar.addEventListener('click', (event) => {

    const email = document.querySelector('.email').value
    const tel = document.querySelector('.tel').value
    const nome = document.querySelector('.nome').value

    novoCliente = {
        nome,
        email,
        tel
    }

    cliente.push(novoCliente)
    console.log(cliente)

 
})

