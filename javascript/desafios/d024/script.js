// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
let curso = document.querySelectorAll('.curso')
let cursoArray = Array.from(curso)

let cursoObjeto = cursoArray.map((cursos) => {
	let titulo = cursos.querySelector('h1').innerText
	let descricao = cursos.querySelector('p').innerText
	let aulas = cursos.querySelector('.aulas').innerText
	let horas = cursos.querySelector('.horas').innerText
	return {
		titulo,
		descricao,
		aulas,
		horas
	}
})

console.log(cursoObjeto)
console.log(cursoArray)
// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

let maioresQue100 = numeros.filter((n) => n > 100)

console.log(maioresQue100)
// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

let verificarLista = instrumentos.some((palavra) => {
	return palavra === 'Baixo'
})

console.log(verificarLista)
// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

let total = compras.reduce((acumulador, item) => {
	let limpaPreco = +item.preco.replace('R$ ', '').replace(',', '.')
	return acumulador + limpaPreco
}, 0)

console.log(total)