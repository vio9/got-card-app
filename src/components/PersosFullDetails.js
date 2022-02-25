import React from "react";
import Nav from "./Nav";

const PersosFullDetails = ({ name, house, gender, image, story, isdead }) => {
	return (
		<div className="perso-full-detail-wrapper-sub">
			<img src={image} alt="image perso" />
			<h1>{name}</h1>
			<h2>Maison: {house}</h2>
			<div className="para-wrapper">
				<p>genre : {gender}</p>
				<p>son histoire en quelques mots : {story}</p>
				<p>
					spoiler alert : à la fin du tome 6 ce personnage :
					{isdead ? "est décédé" : " est toujours en vie"}
				</p>
			</div>
		</div>
	);
};

export default PersosFullDetails;
