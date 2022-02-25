import React from "react";

const PersoDetail = ({ name, house, image }) => {
	return (
		<div>
			<img className="perso-detail-image" src={image} alt="image perso" />
			<h1>{name}</h1>
			<h2>{house}</h2>
		</div>
	);
};

export default PersoDetail;
