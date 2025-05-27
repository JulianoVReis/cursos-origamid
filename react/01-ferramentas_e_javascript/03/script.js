const precos = [
	'Crédito',
	'R$ 200',
	'R$ 400',
	'Contas Pagar',
	'R$ 300',
	'R$ 400',
	'Meus dados'
]

const precosFiltro = precos.filter((p) => p.includes('R$'))
const precosNumeros = precosFiltro.map((preco) =>
	Number(preco.replace('R$ ', ''))
)

console.log(precos)