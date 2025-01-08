let numero = 20
let numero2 = 10

numero += numero2 // numero = numero + numero2
console.log(numero);

let idade = 39
let naoPossuiDiabetes = false
let podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode Beber' : 'Não pode beber'
console.log(podeBeber);

let possuiFaculdade = true
if (possuiFaculdade)
	console.log('Sim, possui')
	console.log('Isso mesmo')