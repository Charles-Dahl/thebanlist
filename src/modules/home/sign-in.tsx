import React from "react";

import useField from "../../hooks/use-field";
import auth from "../../library/firebase/auth";
import Form from "../../components/form";
import Field from "../../components/field";
import Button from "../../components/button";
import Stack from "../../components/stack";
import Link from "../../components/link";
import Text from "../../components/text";
import { emailSchema } from "../../types/formSchema";

export default () => {
	const emailFieldProps = useField<string>("", emailSchema);
	const valid = emailFieldProps.errors.length < 1;

	const onSubmit = () => {
		if (valid) {
			auth()
				.sendSignInLinkToEmail(emailFieldProps.value, {
					url: `http://${window.location.host}/complete-sign-up`,
					handleCodeInApp: true,
				})
				.then(() => {
					window.localStorage.setItem(
						"emailForSignIn",
						emailFieldProps.value
					);
				})
				.catch((error: Error) => alert(error.message));
		}
	};

	return (
		<div>
			<Form onSubmit={onSubmit}>
				<Stack>
					<em>
						Rule Zero uses password free authentication. When you
						sign in you will receive an email link. Follow the link
						in the email to sign in.
					</em>
					<Field
						type="email"
						name="email"
						label="Email Address"
						{...emailFieldProps}
					/>
					<Button
						disabled={!valid}
						title={emailFieldProps.errors.find(() => true)}
						type="submit"
					>
						<Text>Sign In</Text>
					</Button>
				</Stack>
			</Form>
			<Text>or</Text>
			<Link href="/register">
				<Text>Click Here to Register</Text>
			</Link>
		</div>
	);
};
