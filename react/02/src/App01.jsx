import React from 'react'

const titulo = <h1>Esse é um título</h1>

const App01 = () => {
	const random = Math.random()
	const ativo = false

	function mostrarNome(sobrenome) {
		return 'Juliano' + sobrenome
	}

	return (
		<>
		{titulo}
		<p>
			{true ? 'gdsjdgsjb' : 'khcsdh'} - {10}
			{mostrarNome('Juliano')}
		</p>
		<p>{new Date().getFullYear()}</p>
		<p className={ativo ? 'ativo' : 'inativo'}>{(random * 1000) / 50}</p>
		</>
	)
}

export default App01