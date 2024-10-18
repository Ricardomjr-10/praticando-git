
const buttonGravar = document.querySelector('.gravarC')
const bCliente = document.querySelector('.bCliente')
const bProduto = document.querySelector('.bProduto')
const telaCadastro = document.querySelector('.telaCadastro')
const telaCadastroProduto = document.querySelector('.telaCadastroProduto')
const msg = document.querySelector('.msg')

bCliente.addEventListener('click', () => {
    telaCadastro.style.display = 'block'
    telaCadastroProduto.style.display = 'none'
})

bProduto.addEventListener('click', () => {
    telaCadastroProduto.style.display = 'block'
    telaCadastro.style.display = 'none'
})

let cliente = []

buttonGravar.addEventListener('click', (event) => {

  
    let email = document.querySelector('.email').value
    let tel = document.querySelector('.tel').value
    let nome = document.querySelector('.nome').value

    if (nome == '') {
        msg.style.display = 'block'
        msg.innerHTML = 'Por favor preencha o nome'
        return
    }

     msg.style.display = 'none'

    novoCliente = {
        nome,
        email,
        tel
    }

    cliente.push(novoCliente)
    console.log(cliente)

    limpar()
   
})


const limpar = () => {
    document.querySelector('.email').value = ""
    document.querySelector('.tel').value = ""
    document.querySelector('.nome').value = ""
    
}
