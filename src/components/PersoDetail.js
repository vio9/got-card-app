import React from "react";

// detail display on perso list
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
