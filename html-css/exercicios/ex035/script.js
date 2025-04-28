// const curso = {
// 	nome: 'JavaScript',
// 	completar() {
// 		console.log(this.nome)
// 	}
// }

// curso.completar()

// const ativar = document.querySelector('.ativar')

// /** @param {MouseEvent} event */
// function ativarAoClick(event) {
// 	console.log(event.x)
// }

// ativar.addEventListener('click', ativarAoClick)

// console.log(ativar)

// const botao = document.querySelector('.botao')

// botao.addEventListener('click', mostrar)

// function mostrar() {
// 	const texto = document.querySelector('.texto')
// 	texto.classList.toggle('ativar')
// }

const larguraTela = window.innerWidth

// window.addEventListener('mousemove', coordenadaMouse)
window.addEventListener('scroll', scroll)

function coordenadaMouse(event) {
	const coordenadas = {
		x: event.x,
		y: event.y
	}
	console.log(coordenadas)
}

function scroll() {
	console.log(window.scrollY)
}