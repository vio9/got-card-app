import React from "react";
import ListPersos from "../components/ListPersos";
import Nav from "../components/Nav";

const Home = () => {
	return (
		<div className="home-wrapper">
			<Nav />
			<ListPersos />
		</div>
	);
};

export default Home;
