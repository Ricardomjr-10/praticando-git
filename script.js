const tabela = document.querySelector('table')
const dados = document.querySelectorAll('td')

dados[0].innerText = "roberto"

dados.forEach(dado => {
    console.log(dado.innerText)
})

const adicionarLinha = () => {
   let novaLinha =  tabela.insertRow()

   for (let i=0;i<dados.length;i++) {
    let novaCelula = novaLinha.insertCell()
    novaCelula.textContent = dados[i].innerText
   }
}

adicionarLinha()