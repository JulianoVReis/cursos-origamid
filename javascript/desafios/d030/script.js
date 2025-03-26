// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
let cep = document.querySelector('#cep')
let botao = document.querySelector('#botao')
let resultadoCep = document.querySelector('.resultadoCep')

botao.addEventListener('click', clique)
function clique(event) {
	event.preventDefault()
	let bcep = cep.value
	buscarCep(bcep)
}

function buscarCep(bcep) {
	fetch(`https://viacep.com.br/ws/${bcep}/json/`)
	.then(response => response.text())
	.then(body => {
		resultadoCep.innerText = body
	})
}
// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
let btcP = document.querySelector('.btc')

function fetchBtc() {
	fetch('https://blockchain.info/ticker')
	.then(response => response.json())
	.then(jsonBtc => {
		console.log(jsonBtc.BRL.buy)
		btcP.innerText = ('R$ ' + jsonBtc.BRL.buy).replace('.', ',')
	})
}

// setInterval(fetchBtc, 1000 * 30)

fetchBtc()
// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
let proximaBtn = document.querySelector('.proxima')
let piadaP = document.querySelector('.piada')

function puxarPiada() {
	fetch('https://api.chucknorris.io/jokes/random')
	.then(r => r.json())
	.then(piada => {
		piadaP.innerText = piada.value
	})
}

proximaBtn.addEventListener('click', puxarPiada)

puxarPiada()