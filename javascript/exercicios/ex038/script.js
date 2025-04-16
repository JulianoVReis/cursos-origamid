const imagem = fetch('https://www.google.com')

imagem.then(response => {
	console.log(response.type)
	if (response.status === 404) {
		console.log('Página não existe')
	}
})

// const array = ['Item 1', 'Item 2']

// array.forEach(console.log)