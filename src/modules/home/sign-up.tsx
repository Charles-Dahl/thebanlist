import React, { useState } from "react";

import auth from "../../library/firebase/auth";
import Form from "../../components/form";
import Field from "../../components/field";
import Button from "../../components/button";

export default () => {
	const [displayName, setDisplayName] = useState("");
	const [email, setEmail] = useState("");

	const onSubmit = () => {
		auth()
			.sendSignInLinkToEmail(email, {
				url: `http://${window.location.host}/complete-sign-up?displayName=${displayName}`,
				handleCodeInApp: true,
			})
			.then(() => {
				window.localStorage.setItem("emailForSignIn", email);
			})
			.catch((error: Error) => alert(error.message));
	};

	return (
		<Form onSubmit={onSubmit}>
			<Field
				name="displayName"
				label="Display Name"
				value={displayName}
				onChange={setDisplayName}
			/>
			<Field
				name="email"
				label="Email Address"
				value={email}
				onChange={setEmail}
			/>
			<Button>Create Account</Button>
		</Form>
	);
};
