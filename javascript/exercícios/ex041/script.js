async function puxarDados() {
	const promiseDados = fetch('./dados.json')
	const responseClientes = fetch('./clientes.json')

	const jsonDados = await ( await responseDados).json()
	const jsonClientes = await ( await responseClientes).json()

	console.log(jsonDados)
	console.log(jsonClientes)
}
puxarDados()

async function asyncSemPromise() {
  // Console não irá esperar.
  await new Promise(resolve => {
		setTimeout(() => {
			console.log('Depois de 1s')
			resolve()
		}, 1000)
	})
  console.log('acabou')
}
asyncSemPromise()