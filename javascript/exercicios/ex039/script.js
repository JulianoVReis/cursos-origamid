fetch('./dados.json')
.then(r => r.text())
.then(json => {
	const jsonFinal = JSON.parce(jsonText)
})

const comfiguracoes = {
	player: 'Google',
	tempo: 25.5,
	aula: "2.1 JavaScript"
}

localStorage.config = JSON.stringify(configuracoes)

console.log(JSON.parce(localStorage.config))
