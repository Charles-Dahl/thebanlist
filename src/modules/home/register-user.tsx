import React from "react";

import useField from "../../hooks/use-field";
import auth from "../../library/firebase/auth";
import Form from "../../components/form";
import Field from "../../components/field";
import Button from "../../components/button";
import Text from "../../components/text";
import Stack from "../../components/stack";
import { displayNameSchema, emailSchema } from "../../types/formSchema";
import Title from "../../components/title";

const RegisterUser = () => {
	const displayNameFieldProps = useField<string>("", displayNameSchema);
	const emailFieldProps = useField<string>("", emailSchema);
	const valid =
		displayNameFieldProps.errors.length < 1 &&
		emailFieldProps.errors.length < 1;

	const onSubmit = () => {
		auth()
			.sendSignInLinkToEmail(emailFieldProps.value, {
				url: `http://${window.location.host}/complete-sign-up?displayName=${displayNameFieldProps.value}`,
				handleCodeInApp: true,
			})
			.then(() => {
				window.localStorage.setItem(
					"emailForSignIn",
					emailFieldProps.value
				);
			})
			.catch((error: Error) => alert(error.message));
	};

	return (
		<Form onSubmit={onSubmit}>
			<Stack spacing="large">
				<Title>Account Registration</Title>
				<em>
					Rule Zero uses password free authentication. When you sign
					in you will receive an email link. Follow the link in the
					email to sign in.
				</em>
				<Field
					name="displayName"
					label="Display Name"
					placeholder="Nicol Bolas"
					{...displayNameFieldProps}
				/>
				<Field
					type="email"
					name="email"
					placeholder="nicolbolas@amonkhet.com"
					label="Email Address"
					{...emailFieldProps}
				/>
				<Button disabled={!valid}>
					<Text>Create Account</Text>
				</Button>
			</Stack>
		</Form>
	);
};

export default RegisterUser;
