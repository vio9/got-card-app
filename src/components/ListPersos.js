import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PersoDetail from "./PersoDetail";
import PersoFull from "./PersoFull";

const ListPersos = () => {
	const [persos, setPersos] = useState([]);

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

	return (
		<div>
			{persos.map((item, index) => {
				return (
					<div key={index}>
						<PersoDetail {...item} />
						<Link to={`/${item._id}`}>page</Link>
					</div>
				);
			})}
		</div>
	);
};

export default ListPersos;
