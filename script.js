const tabela = document.querySelector('table')
const dados = document.querySelectorAll('td')

dados[0].innerText = "roberto"

dados.forEach(dado => {
    console.log(dado.innerText)
})