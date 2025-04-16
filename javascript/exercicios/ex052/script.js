// const carro = {
// 	marca: 'Honda',
// 	ano: 2025
// }

// const {marca, ano, portas} = carro

// console.log(portas)

// const cliente = {
//   nome: 'Andre',
//   compras: {
//     digitais: {
//       livros: ['Livro 1', 'Livro 2'],
//       videos: ['Video JS', 'Video HTML']
//     },
//     fisicas: {
//       cadernos: ['Caderno 1']
//     }
//   }
// }

// const {digitais, fisicas, digitais: {livros, videos}} = cliente.compras

// console.log(livros)

// const cliente = {
// 	nome: 'Juliano',
// 	compras: 10,
// 	email: 'juliano@gmail.com'
// }

// const {nome: nomeJuliano, email = 'email@gmail.com'} = cliente

// console.log(email)

// const frutas = ['Banana', 'Uva', 'Morango']

// const [primeira, segunda, terceira] = frutas

// const [primeiro, segundo, terceiro] = ['Item 1', 'Item 2', 'Item 3']

// console.log(terceiro)

function handleKeyboard({key, keyCode}) {
	console.log(key, keyCode)
}

document.addEventListener('keyup', handleKeyboard)