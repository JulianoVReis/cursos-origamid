// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
let meusDados = {
	nome: 'Juliano',
	sobrenome: 'Reis',
	idade: 39
}
// Crie um método no objeto anterior, que mostre o seu nome completo
meusDados.nomeCompleto = function() {
	return `${this.nome} ${this.sobrenome}`
}
// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
let cachorro = {
	raca: 'labrador',
	cor: 'preto',
	idade: 10,
	latir(pessoa) {
		if (pessoa == 'homem') {
			return 'Late'
		} else {
			return 'Não late'
		}
	}
}

console.log(cachorro.latir('homem'))