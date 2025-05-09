// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
let linkInterno = document.querySelectorAll('a[href^="#"]')

function handleLink(event) {
	event.preventDefault();
	linkInterno.forEach((link) => {
		link.classList.remove('ativo')
	})
	event.currentTarget.classList.add('ativo')
}

linkInterno.forEach((link) => {
	link.addEventListener('click', handleLink)
})
// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
let todosElementos = document.querySelectorAll('body *')

function handleElementos(event) {
	event.currentTarget.remove()
}

// todosElementos.forEach((elementos) => {
// 	elementos.addEventListener('click', handleElementos)
// })

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function handleClickT(event) {
	console.log(event.key)
	if (event.key === 't') {
		document.documentElement.classList.toggle('textomaior')
	}
}

window.addEventListener('keydown', handleClickT)