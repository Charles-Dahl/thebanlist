import React, { useState } from "react";

import { communityNameSchema } from "../../types/formSchema";
import Button from "../../components/button";
import Stack from "../../components/stack";
import Form from "../../components/form";
import Field from "../../components/field";
import FieldCheckbox from "../../components/field-checkbox";
import useCreateCommunity from "./hooks/use-create-community";
import { useUser } from "../authentication/user-provider";
import useField from "../../hooks/use-field";

export default () => {
	const user = useUser();
	const createCommunity = useCreateCommunity();
	const nameFieldProps = useField("", communityNameSchema);
	const [isPublic, setIsPublic] = useState(false);
	const valid = nameFieldProps.errors.length < 1;

	const handleSubmit = () => {
		if (!user || !valid) {
			return;
		}
		const name = nameFieldProps.value;
		const id = name.replace(/  */g, "-").toLocaleLowerCase();
		createCommunity({
			name,
			admin: [user.uid],
			id,
			isPublic,
			voter: [user.uid],
			add_cards: [user.uid],
		}).then(() => (window.location.href = `/community/${id}`));
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Stack space="Small">
				<Field
					name="community-name"
					label="Community Name"
					{...nameFieldProps}
				/>
				<FieldCheckbox
					name="public"
					label="Make Public"
					value={isPublic}
					onChange={setIsPublic}
				/>
				<Button
					disabled={!valid}
					title={nameFieldProps.errors.find(() => true)}
					type="submit"
				>
					Create
				</Button>
			</Stack>
		</Form>
	);
};
