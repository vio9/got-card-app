import React, { useState } from "react";
import axios from "axios";

export default function AddYourOwn() {
	const [name, setName] = useState("");
	const [house, setHouse] = useState("");
	const [isdead, setIsDead] = useState("");
	const [gender, setGender] = useState("");
	const [image, setImage] = useState("");
	const [story, setStory] = useState("");

	function onCreatePerso(e) {
		e.preventDefault();
		const postData = {
			name,
			house,
			isdead,
			gender,
			image,
			story,
		};
		axios.post("http://localhost:5500/persos", postData).then((res) => {
			console.log(res);
		});
	}

	return (
		<>
			<h2>Create your own favorite character card ! </h2>
			<form className="add-form-persos" onSubmit={onCreatePerso}>
				<label>Name : </label>
				<input
					type="text"
					name="name"
					placeholder="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<label>House : </label>
				<input
					type="text"
					name="house"
					placeholder="house"
					value={house}
					onChange={(e) => setHouse(e.target.value)}
				/>
				<label>Genre : </label>
				<input
					type="text"
					name="genre"
					placeholder="genre"
					value={gender}
					onChange={(e) => setGender(e.target.value)}
				/>
				<label>vivant ou mort </label>
				<input
					type="checkbox"
					name="isdead"
					placeholder="animal"
					value={isdead}
					onChange={(e) => setIsDead(e.target.value)}
				/>
				<label>Link image : </label>
				<input
					type="text"
					name="image"
					placeholder="image"
					value={image}
					onChange={(e) => setImage(e.target.value)}
				/>
				<label>Histoire du personnage : </label>
				<textarea
					type="textarea"
					name="story"
					placeholder="histoire du perso"
					value={story}
					onChange={(e) => setStory(e.target.value)}
				/>
				<input type="submit" value="Envoyer" className="submit-button" />
			</form>
		</>
	);
}
