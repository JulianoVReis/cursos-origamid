// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
let paragrafos = document.querySelectorAll('p')

let totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
	return acumulador + item.innerText.length
}, 0)

console.log(totalCaracteres)
console.log(paragrafos)
// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
	let elemento = document.createElement(tag)
	classe ? elemento.classList.add(classe) : null
	conteudo ? elemento.innerHTML = conteudo : null
	return elemento
}

console.log(criarElemento('li', 'azul', 'Esse é o conteúdo'))
// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
let h1Titulo = criarElemento.bind(null, 'h1', 'titulo')

let cursosJS = h1Titulo('Cursos de JavaScript')
let cursosHTML = h1Titulo('Cursos de HTML')

console.log(cursosJS, cursosHTML)