
const buttonGravar = document.querySelector('.gravarC')
const buttonGravarP = document.querySelector('.gravarP')
const mostrarClientes = document.querySelector('.mostrarClientes')
const mostrarProdutos = document.querySelector('.mostrarProdutos')
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

mostrarClientes.addEventListener('click', () => {
    criarTabela(clientes, tabela)
})

mostrarProdutos.addEventListener('click', () => {
    criarTabela(produtos, tabela)
})

//fucncao para criar a tabel
const criarTabela = (dados, elementoPai) => {
    //criar a tag tabela
    const tabela = document.createElement('table')

    //criar a linha do cabeçalho - th
    const linhaCabecalho = tabela.insertRow()
    for (const propriedade in dados[0]) {
        const celula = linhaCabecalho.insertCell()
        celula.textContent = propriedade
    }

    //criar as linha de dados
    dados.forEach(objeto => {
        const linha = tabela.insertRow()
        for (const propriedade in objeto) {
            const celula = linha.insertCell()
            celula.textContent = objeto[propriedade]
        }
    });

    //adiciona a tabela ao elemento pai
    elementoPai.appendChild(tabela)
}