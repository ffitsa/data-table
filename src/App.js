import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import UserCard from './Components/UserCard';
import { useState } from 'react';
import CardForm from './Components/CardForm';






function App() {


	const [cards, setCards] = useState([
		{ id: 1, name: 'Alex', surname: 'Koln', years: 28 },
		{ id: 2, name: 'Viktor', surname: 'Rifle', years: 45 },
		{ id: 3, name: 'Olya', surname: 'Lake', years: 34 }
	])

	function createCard(newCard) {
		setCards([...cards, newCard])
	}



	function removeCard (card) {
		setCards(cards.filter(pr => pr.id !== card.id))
	}


	// function removeCard(card) {
	// 	setCards(cards.filter(pr => {
	// 		if (pr.id !== card.id) {
	// 			return true
	// 		}
	// 	}))
	// }


	return (

		<div className="App">

			<CardForm create={createCard} />

			{/* It is necessary to sort in the map method */}
			{/* //Потрібно розібратись в методі map */}
			{cards.map((card, index) =>
				<UserCard remove={removeCard} number={index + 1} card={card} key={card.id} />
			)}


		</div>

	);
}

export default App;
