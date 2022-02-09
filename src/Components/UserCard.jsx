import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';



const UserCard = (props) => {
	return (

		<Card>
			<div className="card__user">
				<div className="card__userdinf-item">
					<div className="card__name">id: {props.card.id}</div>
					<div className="card__name">Name: {props.card.name}</div>
					<div className="card__name">Surname:  {props.card.surname}</div>
					<div className="card__name">Years:  {props.card.years}</div>
				</div>


				<div className="card__btn">
					<Button
						label="Delete"
						className="p-button-danger"

					/>
				</div>
			</div>
		</Card>
	);
};

export default UserCard;