// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let campeao = [1959, 1962, 1970, 1994, 2002]
campeao.forEach(function(campeao) {
	console.log(campeao)
})
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
let ano = [1959, 1962, 1970, 1994, 2002]
ano.forEach(function(ano) {
	console.log(`O Brsil ganhou a copa de ${ano}`)
})
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
let frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (let item = 0; item < frutas.length; item++) {
	console.log(frutas[item])
	if (frutas[item] == 'Pera') {
		break
	}
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
let ultimaFruta = frutas[frutas.length - 1]
console.log(ultimaFruta)