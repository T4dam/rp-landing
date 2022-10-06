import React from 'react';
import Form from './form';

const Card = () => {
	return (
		<div className="refer__card">
			<h1 className="refer__card__title">REFER FRIENDS AND GET REWARDS</h1>
			<p className="refer__card__p">
				Refer your friends to us and earn hotel booking vouchers. We'll give you
				1 coin for each friend that installs our extension. Minimum cash-out at
				20 coins.
			</p>

			<Form />
			<p className="refer__card__limits__text">Limits on max rewards apply.</p>
		</div>
	);
};

export default Card;
