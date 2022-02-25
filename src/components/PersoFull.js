import { useParams } from "react-router-dom";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import PersosFullDetails from "./PersosFullDetails";
import Nav from "./Nav";

const PersoFull = () => {
	const { Id } = useParams();
	const [persos, setPersos] = useState([]);
	const getPersos = async () => {
		try {
			const result = await axios.get("http://localhost:5500/persos/");
			setPersos(result.data);
			console.log(result.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPersos();
	}, []);
	return (
		<div>
			<Nav />
			{persos
				.filter((item) => item._id === Id)
				.map((item, index) => {
					return (
						<div key={index}>
							<PersosFullDetails {...item} />
						</div>
					);
				})}
		</div>
	);
};

export default PersoFull;
