import React from 'react'

const titulo = <h1>Esse é um título</h1>

const App = () => {
	const random = Math.random()
	const ativo = false

	function mostrarNome(sobrenome) {
		return 'Juliano' + sobrenome
	}

	const carro = {
		marca: 'Ford',
		rodas: '4'
	}

	const estiloP = {
		color: 'blue',
		fontSize: '2rem'
	}

	return (
		<>
		{titulo}
		<p>
			{true ? 'gdsjdgsjb' : 'khcsdh'} - {10}
			{mostrarNome('Juliano')}
		</p>
		<p style={estiloP}>{new Date().getFullYear()}</p>
		<p style={estiloP}>{carro.marca}</p>
		<p>{carro.rodas}</p>
		<p className={ativo ? 'ativo' : 'inativo'}>{(random * 1000) / 50}</p>
		</>
	)
}

export default App