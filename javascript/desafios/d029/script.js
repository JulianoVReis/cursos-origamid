// Mude a cor da tela para azul e depois para vermelho a cada 2s.
function mudarCorTela() {
	document.body.classList.toggle('ativar')
}

setInterval(mudarCorTela, 3000)
// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
let iniciar = document.querySelector('.iniciar')
let pausar = document.querySelector('.pausar')
let resetar = document.querySelector('.resetar')
let tempo = document.querySelector('.tempo')

iniciar.addEventListener('click', inicia)
pausar.addEventListener('click', pause)
pausar.addEventListener('dblclick', reseta)

let i = 0
let timer

function inicia() {
	timer = setInterval(() => {
		tempo.innerText = i++
	}, 100)
	iniciar.setAttribute('disabled', '')
}

function pause() {
	clearInterval(timer)
	iniciar.removeAttribute('disabled')
}

function reseta() {
	tempo.innerText = 0
	i = 0
}