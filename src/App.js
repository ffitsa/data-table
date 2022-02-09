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


	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [years, setYears] = useState('');

	function addNewCard(event) {
		event.preventDefault()
			const newCard = {
				id: Date.now(),
				name, 
				surname,
				years
			}


			//!!! important to remember !!!
		setCards([...cards, newCard])
		// Expanding the old array with objects and adding a new one
		// Розкрив старий массив з об'єктами і вкінець добавив новий
		setName('')
		setSurname('')
		setYears('')
	}


	return (



		<div className="App">


			<form>
				<InputText
					type='text'
					placeholder='Name'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<InputText
					type='text'
					placeholder='Surname'
					value={surname}
					onChange={(e) => setSurname(e.target.value)}
				/>

				<InputText
					type='number'
					placeholder='Years'
					value={years}
					onChange={(e) => setYears(e.target.value)}
				/>
				<div className="userinf__btn">
					<Button onClick={addNewCard} label="ADD" icon="pi pi-plus" />
				</div>
			</form>



			
			{cards.map(card =>
				<UserCard card={card} key={card.id} />
			)}

		</div>);
}

export default App;
