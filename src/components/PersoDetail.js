import React from "react";

const PersoDetail = ({ name, house, image }) => {
	return (
		<>
			<img className="perso-detail-image" src={image} alt="image perso" />
			<h1>Nom : {name}</h1>
			<h2>Maison : {house}</h2>
		</>
	);
};

export default PersoDetail;
