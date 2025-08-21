import React from 'react'
import Input from './Form/Input'
import Select from './Form/Select'

const App = () => {
	const [nome, setNome] = React.useState('')
	const [email, setEmail] = React.useState('')
	const [produto, setProduto] = React.useState('')

	return (
		<form>
			<Select options={['Smartphone', 'Tablet']} value={produto} setValue={setProduto} />
			<Input id='nome' label='nome' value={nome} setValue={setNome} required />
			<Input id='email' label='email' value={email} setValue={setEmail} />
			<button>Enviar</button>
		</form>
	)
}

export default App
