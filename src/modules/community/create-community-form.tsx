import React from "react";

import { communityNameSchema } from "../../types/formSchema";
import Button from "../../components/button";
import Form from "../../components/form";
import Field from "../../components/field";
import useCreateCommunity from "./hooks/use-create-community";
import { useUser } from "../authentication/user-provider";
import useField from "../../hooks/use-field";

export default () => {
	const user = useUser();
	const createCommunity = useCreateCommunity();
	const nameFieldProps = useField("", communityNameSchema);
	const valid = nameFieldProps.errors.length < 1;

	const handleSubmit = () => {
		if (!user || !valid) {
			return;
		}
		const name = nameFieldProps.value;
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
				{...nameFieldProps}
			/>
			<Button
				disabled={!valid}
				title={nameFieldProps.errors.find(() => true)}
				type="submit"
			>
				Create
			</Button>
		</Form>
	);
};
