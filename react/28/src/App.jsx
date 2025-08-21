import React from 'react'

const App = () => {
	const [produto, setProduto] = React.useState('')
	const [cor, setCor] = React.useState('')

	function handleChange({target}) {
		setProduto(target.value)
	}

	return (
		<form>
			<h2>Cores</h2>
			<label><input onChange={({target}) => setCor(target.value)} type="radio" checked={cor === 'azul'} value={'azul'} />Azul</label>

			<label><input onChange={({target}) => setCor(target.value)} type="radio" checked={cor === 'vermelho'} value={'vermelho'} />Vermelho</label>

			<h2>Produtos</h2>
			<label><input onChange={handleChange} type="radio" checked={produto === 'smartphone'} value={'smartphone'} />Smartphone</label>

			<label><input onChange={handleChange} type="radio" checked={produto === 'notebook'} value={'notebook'} />Notebook</label>
		</form>
	)
}

export default App
