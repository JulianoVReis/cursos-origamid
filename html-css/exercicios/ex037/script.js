// const lista = ['JavaScript', 'HTML', 'CSS', 'PHP']

// const nome = lista[0]

// console.log(nome)

// const body = document.querySelector('body')

// for (let index = 0; index <= lista.length; index++) {
// 	body.innerHTML += '<li>' + lista[index] + '</li>'
// }

// lista.forEach(adicionarBody)

// function adicionarBody() {
// 	body.innerHTML += '<li>' + item + '</li>'
// }

const links = Array.from(document.querySelectorAll('nav a'))

console.log(links)
const ultimoLink = links.pop()
console.log(links)

function logHref(item) {
	const href = item.href
	console.log(href)
}

links.forEach(logHref)

console.log(links[links.length - 1])

const lista = ['JavaScript', 'HTML', 'CSS']

const ultimo = lista.pop()
const primeiro = lista.shift()

console.log(ultimo)
console.log(primeiro)

lista.push('PHP')
console.log(lista)