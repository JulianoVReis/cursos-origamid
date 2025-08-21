import React from 'react'
import Input from './Form/Input'

const App = () => {
	const [nome, setNome] = React.useState('')
	const [email, setEmail] = React.useState('')

	return (
		<form>
			<Input id='nome' label='nome' value={nome} setValue={setNome} required />
			<Input id='email' label='email' value={email} setValue={setEmail} />
			<button>Enviar</button>
		</form>
	)
}

export default App
