import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import UserCard from './Components/UserCard';
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';





function App() {


	const [cards, setCards] = useState([
		{ id: 1, name: 'Alex', surname: 'Koln', years: 28 },
		{ id: 2, name: 'Viktor', surname: 'Rifle', years: 45 },
		{ id: 3, name: 'Olya', surname: 'Lake', years: 34 }
	])


	const [cardItem, setCardItem] = useState({
		name: '', surname: '', years: ''
	});


	function addNewCard(event) {
		event.preventDefault()
		//!!! important to remember !!!
		// Expanding the old array with objects and adding a new object
		// Розкрив старий массив з об'єктами і добавив новий об'єкт (cards+cardItem)
		setCards([...cards, { ...cardItem, id: Date.now() }])
		// !!!

		setCardItem({ name: '', surname: '', years: '' })
	}


	return (



		<div className="App">


			<form>
				<InputText
					type='text'
					placeholder='Name'
					value={cardItem.name}
					onChange={(e) => setCardItem({ ...cardItem, name: e.target.value })}
				/>

				<InputText
					type='text'
					placeholder='Surname'
					value={cardItem.surname}
					onChange={(e) => setCardItem({ ...cardItem, surname: e.target.value })}
				/>

				<InputText
					type='number'
					placeholder='Years'
					value={cardItem.years}
					onChange={(e) => setCardItem({ ...cardItem, years: e.target.value })}
				/>
				<div className="userinf__btn">
					<Button onClick={addNewCard} label="ADD" icon="pi pi-plus" />
				</div>
			</form>


			{/* It is necessary to sort in the map method */}
			{/* //Потрібно розібратись в методі map */}
			{cards.map((card, index) =>
				<UserCard number={index + 1} card={card} key={card.id} />
			)}

		</div>

	);
}

export default App;
