// function logCurso(nome, horas) {
// 	// const nome = 'JavaScript'
// 	console.log(nome, horas, 'horas')
// 	return {
// 		nome,
// 		horas
// 	}
// }

// const retorno = logCurso('JavaScript', '40')
// logCurso('HTML', '20')

// console.log(retorno)

const nome = 'JavaScript'

function logCurso() {
	const nome = 'HTML'
	console.log(nome)
	return nome
}

const nomedaFuncao = logCurso()

console.log(nomedaFuncao)
console.log(nome)