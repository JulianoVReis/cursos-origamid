let pessoa = {
	nome: 'Juliano',
	idade: 39
}

console.log(pessoa);

let quadrado = {
	lados: 4,
	area(lado) {
		return lado * lado
	},
	perimetro(lado) {
		return this.lados * lado
	},
	cinco() {
		return 5
	}
}

console.log(quadrado.area(10))
console.log(quadrado.perimetro(10))
console.log(quadrado.cinco())
console.log(Math.random())

let menu = {
	width: 800,
	height: 50,
	backgroundColor: '#84E',
	metadeHeight() {
		this.heght / 2
	}
}

menu.backgroundColor = '#000'
menu.color = 'blue'
menu.esconder = function() {
	console.log('Escondi')
}
let bg = menu.backgroundColor