import React from "react";

const PersoDetail = ({ name, house, gender, image }) => {
	return (
		<div>
			<img src={image} alt="image perso" />
			<h1>{name}</h1>
			<h2>{house}</h2>
			<p>{gender}</p>
		</div>
	);
};

export default PersoDetail;
