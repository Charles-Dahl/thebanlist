import React, { useState } from "react";

import Button from "../../components/button";
import Form from "../../components/form";
import Field from "../../components/field";
import useCreateCommunity from "./hooks/use-create-community";
import { useUser } from "../authentication/user-provider";

export default () => {
	const user = useUser();
	const createCommunity = useCreateCommunity();
	const [name, setName] = useState("");

	const handleSubmit = () => {
		if (!user) {
			return;
		}
		const id = name.replace(/  */g, "-").toLocaleLowerCase();
		createCommunity({ name, admin: [user.uid], id }).then(
			() => (window.location.href = `/community/${id}`)
		);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Field
				name="community-name"
				label="Community Name"
				onChange={setName}
				value={name}
			/>
			<Button type="submit">Create</Button>
		</Form>
	);
};
