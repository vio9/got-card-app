import React from "react";

// view page character infos

const PersosFullDetails = ({ name, house, race, image, story, isdead }) => {
	return (
		<div className="perso-full-detail-wrapper-sub">
			<img src={image} alt="image perso" />

			<div className="para-wrapper">
				<h1>{name}</h1>
				<h2>Maison : {house}</h2>
				<p>
					<strong>Race :</strong> {race}
				</p>
				<p>
					<strong>son histoire au début des romans :</strong> {story}
				</p>
				<p>
					<strong>spoiler alert :</strong> à la fin du tome 6 ce personnage{" "}
					{isdead ? "est décédé 🖤" : "est toujours en vie ❤️"}
				</p>
			</div>
		</div>
	);
};

export default PersosFullDetails;
