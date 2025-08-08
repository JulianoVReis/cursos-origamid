import React, {Fragment} from 'react'
import Header from './Header'
import Footer from './Footer'
import Form from './Form/Form'

const Teste = () => {
	const active = true
	if (active) {
		return <p>Teste</p>
	} else {
		return null
	}
}

const App = () => {
	return (
	<Fragment>
		<Teste />
		<Header />
		<Form />
		<Footer />
	</Fragment>
	)
}

export default App