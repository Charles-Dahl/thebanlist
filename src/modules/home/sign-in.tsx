import React, { useState } from "react";

import auth from "../../library/firebase/auth";
import Form from "../../components/form";
import Field from "../../components/field";
import Button from "../../components/button";

export default () => {
	const [email, setEmail] = useState("");

	const onSubmit = () => {
		auth()
			.sendSignInLinkToEmail(email, {
				url: `http://${window.location.host}/complete-sign-up`,
				handleCodeInApp: true,
			})
			.then(() => {
				window.localStorage.setItem("emailForSignIn", email);
			})
			.catch((error: Error) => alert(error.message));
	};

	return (
		<Form onSubmit={onSubmit}>
			<em>
				Rule Zero uses password free authentication. When you sign in
				you will receive an email link. Follow the link in the email to
				sign in.
			</em>
			<Field
				type="email"
				name="email"
				label="Email Address"
				value={email}
				onChange={setEmail}
			/>
			<Button>Send me a sign in link</Button>
		</Form>
	);
};
