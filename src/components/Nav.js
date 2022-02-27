import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div className="nav-wrapper">
			<h1>Bienvenue sur l'app des meilleurs personnages de Game of Throne</h1>
			<Link to="/" className="link-to-style">
				🔥 Home
			</Link>
		</div>
	);
};

export default Nav;
