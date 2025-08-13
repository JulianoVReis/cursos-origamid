import React from 'react';
import Modal from './Modal';
import ButtonModal from './ButtonModal';

const App = () => {
	const [contar, setContar] = React.useState(1)
	const [items, setItems] = React.useState(['Item 1'])

	function handleClick() {
		setContar(contar + 1)
		setItems([...items, 'Item' + (contar + 1)])
	}

	return (
		<div>
			{items.map((item) => {
				<li key={item}>{item}</li>
			})}
			<button onClick={handleClick}>{contar}</button>
		</div>
	)
}

export default App;
