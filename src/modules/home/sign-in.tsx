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
import styled from "styled-components";
import Title from "../../components/title";

const Container = styled.div`
	padding: 2em;
`;

const SignInForm = () => {
	const emailFieldProps = useField<string>("", emailSchema);
	const { value, errors } = emailFieldProps;
	const valid = errors.length < 1;

	const onSubmit = () => {
		if (valid) {
			auth()
				.sendSignInLinkToEmail(value, {
					url: `http://${window.location.host}/complete-sign-up`,
					handleCodeInApp: true,
				})
				.then(() => {
					window.localStorage.setItem("emailForSignIn", value);
				})
				.catch((error: Error) => alert(error.message));
		}
	};

	return (
		<Container>
			<Form onSubmit={onSubmit}>
				<Stack spacing="large">
					<Title>User Sign In</Title>
					<em>
						Rule Zero uses password free authentication. When you
						sign in you will receive an email link. Follow the link
						in the email to sign in.
					</em>
					<Field
						type="email"
						placeholder="nicolbolas@amonkhet.com"
						name="email"
						label="Email Address"
						{...emailFieldProps}
					/>
					<Button
						disabled={!valid}
						title={errors.find(() => true)}
						type="submit"
					>
						<Text>Submit</Text>
					</Button>
					<em>-or-</em>
					<Link href="/register">
						<Text>Click Here to Register</Text>
					</Link>
				</Stack>
			</Form>
		</Container>
	);
};

export default SignInForm;
