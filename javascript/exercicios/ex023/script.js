// const comida = 'Pizza'
// const agua = new String('Água')

// console.log(agua.length)

// const frase = 'A melhor comida'

// console.log(frase[--frase.length])
// console.log(frase.charAt(--frase.length))

const frase = 'A melhor linguagem é '
const linguagem = 'JavaScript'
const fraseFinal = frase.concat(linguagem, '!!', 'Oi hfhghjdgf')

console.log(fraseFinal)

const fruta = 'Banana'
const listaFrutas = 'Melancia, Banana, Laranja'

console.log(fruta.includes(fruta, 14))

console.log(fruta.startsWith('Ba'))

console.log(fruta.endsWith('nas'))

console.log(fruta.indexOf('n'))

console.log(fruta.lastIndexOf('na'))

const transacao1 = 'Depósito de cliente'
const transacao2 = 'Deposito de fornecedor'
const transacao3 = 'Taxa de camisas'

console.log(transacao1.slice(0, 3))
console.log(transacao2.slice(-4))

const preco = 'R$ 99,00'
const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000']

listaPrecos.forEach((item) => {
	console.log(item.padStart(10, '-'))
})

console.log(preco.padStart(20))

console.log(preco.padEnd(20, 'hgjdg'))

const frase2 = 'Ta'

frase.repeat(5)

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias'
listaItens = listaItens.replace(/[ ]+/g, ', ')

console.log(listaItens)

const arrayLista = listaItens.split('s, ')

console.log(arrayLista)

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>'
const htmlArray = htmlText.split('div')
const frutasArray = ['Banana', 'Melancia', 'Laranja']
const novoHtml = htmlArray.join('section')

console.log(htmlText)

console.log(htmlArray)

console.log(frutasArray.join('a'))

console.log(novoHtml)

const sexo1 = 'Feminino'
const sexo2 = 'feminino'
const sexo3 = 'FEMININO'

console.log(sexo1.toUpperCase() === 'FEMININO')

console.log(sexo3.toLowerCase() === 'feminino')

const valor = ' R$ 23.00 '

console.log(valor.trim()) // 'R$ 23.00'
console.log(valor.trimStart()) // 'R$ 23.00   '
console.log(valor.trimEnd()) // '  R$ 23.00'