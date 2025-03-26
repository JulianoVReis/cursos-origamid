// let ultimoItem = videoGames.pop()
// console.log(ultimoItem)

// videoGames.push('3DS')
// console.log(videoGames)

for (let numero = 1; numero <= 4; numero++) {
	console.log(numero)
}

let i = 0
while (i < 10) {
	console.log(i)
	i = i + 5
}

let videoGames = ['Switch', 'PS4', 'XBOX', '3DS']

for (let item = 0; item < videoGames.length; item++) {
	console.log(videoGames[item])
	if (videoGames[item] == 'PS4') {
		break
	}
}

videoGames.forEach(function(item) {
	console.log(item);
})

let frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva']
frutas.forEach(function(frutas, index, array) {
	console.log(frutas, index, array)
})