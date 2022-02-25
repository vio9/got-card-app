import React from "react";
import ListPersos from "../components/ListPersos";
import Nav from "../components/Nav";
import AddYourOwn from "../components/AddYourOwn";

const Home = () => {
	return (
		<div className="home-wrapper">
			<Nav />
			<ListPersos />
		</div>
	);
};

export default Home;
