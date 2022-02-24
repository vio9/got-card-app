import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

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
			{persos.map((item) => {
				return (
					<ul>
						<li>{item.name}</li>
						<li>{item.house}</li>
					</ul>
				);
			})}
		</div>
	);
};

export default ListPersos;
