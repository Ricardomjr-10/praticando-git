
const buttonGravar = document.querySelector('.gravarC')
const buttonGravarP = document.querySelector('.gravarP')
const bCliente = document.querySelector('.bCliente')
const bProduto = document.querySelector('.bProduto')
const telaCadastro = document.querySelector('.telaCadastro')
const telaCadastroProduto = document.querySelector('.telaCadastroProduto')
const msg = document.querySelector('.msg')
const tabela = document.querySelector('.tabela')

bCliente.addEventListener('click', () => {
    telaCadastro.style.display = 'block'
    telaCadastroProduto.style.display = 'none'
    msg.style.display = 'none'
})

bProduto.addEventListener('click', () => {
    telaCadastroProduto.style.display = 'block'
    telaCadastro.style.display = 'none'
    msg.style.display = 'none'
})

let clientes = []

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

    clientes.push(novoCliente)
    console.log(clientes)

    limpar('.email', '.nome', '.tel')

    tabela.innerHTML = `<table>
            <tr>
                <th>nome</th>
                <th>email</th>
                <th>Telefone</th>
            </tr>
            <tr>
                <td>${clientes[0].nome}</td>
                <td>${clientes[0].email}</td>
                <td>${clientes[0].tel}</td>
            </tr>
        </table>`
   
})

let produtos = []

buttonGravarP.addEventListener('click', () => {
    let produto = document.querySelector('.produto').value
    let quantidade = document.querySelector('.quantidade').value

    if (produto == '') {
        msg.style.display = 'block'
        msg.innerHTML = 'Por favor digite o produto'
        return
    }

    msg.style.display = 'none'

    novoProduto = {
        produto,
        quantidade
    }

    produtos.push(novoProduto)
    console.log(produtos)

    limpar('.produto', '.quantidade', '.quantidade')
    
})




const limpar = (nome1, nome2 ,nome3) => {
    document.querySelector(nome1).value = ""
    document.querySelector(nome2).value = ""
    document.querySelector(nome3).value = ""
    
}
