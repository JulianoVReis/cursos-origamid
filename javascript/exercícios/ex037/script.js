// const promessa = new Promise((resolve, reject) => {
// 	let condicao = false
// 	if (condicao) {
// 		setTimeout(() => {
// 			resolve({nome: 'Juliano', idade: 39})
// 		}, 1000)
// 	} else {
// 		reject(Error('Um erro ocorreu na promise'))
// 	}
// })

// const retorno = promessa
// 	.then(resolucao => {
// 		console.log(resolucao)
// 		resolucao.profissao = 'Designer'
// 		return resolucao
// 	})
// 	.then(resolucao => {
// 	console.log(resolucao)
// 	}, rejeitada => {
// 	console.log(rejeitada)
// 	}).finally((teste) => {
// 		console.log(teste)
// 	})

// console.log(retorno)

const login = new Promise((resolve) => {
	setTimeout(() => {
		resolve('Usuário Logado')
	}, 1000)
})

const dados = new Promise((resolve) => {
	setTimeout(() => {
		resolve('Dados carregados')
	}, 500)
})

const carregouTudo = Promise.race([login, dados])

carregouTudo.then((resolucao) => {
	console.log(resolucao)
})