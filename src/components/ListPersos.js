import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PersoDetail from "./PersoDetail";

const ListPersos = () => {
	const [persos, setPersos] = useState([]);
	const [humanOnly, setHumanOnly] = useState(false);

	const getPersos = async () => {
		try {
			const result = await axios.get("http://localhost:5500/persos");
			setPersos(result.data);
			console.log(result.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPersos();
	}, []);

	function getHumanOnly() {
		setHumanOnly(!humanOnly);
	}
	return (
		<>
			<button className="button-filter-race" onClick={getHumanOnly}>
				Afficher :{humanOnly ? " uniquement les humains" : " tout le monde"}
			</button>
			<div className="list-perso-wrapper">
				{persos
					.filter((item) => !humanOnly || item.race.includes("humain"))
					.map((item, index) => {
						return (
							<div key={index} className="perso-detail-wrapper">
								<PersoDetail {...item} />
								<Link to={`/${item._id}`} className="linkto-perso-detail">
									🏰 Plus de détail par ici
								</Link>
							</div>
						);
					})}
			</div>
			{/* <div className="list-perso-wrapper">
				{persos.map((item, index) => {
					return (
						<div key={index} className="perso-detail-wrapper">
							<PersoDetail {...item} />
							<Link to={`/${item._id}`} className="linkto-perso-detail">
								🏰 Plus de détail par ici
							</Link>
						</div>
					);
				})}
			</div> */}
		</>
	);
};

export default ListPersos;
