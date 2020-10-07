import React, { FormEvent, useState } from "react";
import firestore from "../../library/firebase/firestore";

export default () => {
	const [communityName, setCommunityName] = useState("");

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const id = communityName.replace(/  */g, "-").toLocaleLowerCase();
		firestore()
			.collection("community")
			.doc(id)
			.set({ name: communityName })
			.then(() => (window.location.href = `/community/${id}`));
	};

	const handleChangeCommunityName = (event: FormEvent<HTMLInputElement>) =>
		setCommunityName(event.currentTarget.value);

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="community-name">
				Community Name
				<input
					name="community-name"
					type="text"
					onChange={handleChangeCommunityName}
				/>
			</label>
			<button type="submit">Create</button>
		</form>
	);
};
