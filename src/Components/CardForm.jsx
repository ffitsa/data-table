import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


const CardForm = ({ create }) => {

	const [cardItem, setCardItem] = useState({
		name: '', surname: '', years: ''
	});


	function addNewCard(event) {
		event.preventDefault()
		//!!! important to remember !!!
		// Expanding the old array with objects and adding a new object
		// Розкрив старий массив з об'єктами і добавив новий об'єкт (cards+cardItem)


		const newCard = {
			...cardItem, id: Date.now()
		}

		create(newCard)

		setCardItem({ name: '', surname: '', years: '' })
	}


	return (
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

	);
};

export default CardForm;