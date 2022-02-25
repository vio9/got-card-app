import React from "react";

const PersosFullDetails = ({ name, house, gender, image, story }) => {
	return (
		<div>
			<div>
				<img src={image} alt="image perso" />
				<h1>{name}</h1>
				<h2>{house}</h2>
				<p>{gender}</p>
				<p>{story}</p>
			</div>
		</div>
	);
};

export default PersosFullDetails;
