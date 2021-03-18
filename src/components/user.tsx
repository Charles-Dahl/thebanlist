import React from "react";
import styled from "styled-components";

import auth from "../library/firebase/auth";
import { useUser } from "../modules/authentication/user-provider";
import Button from "./button";
import Link from "./link";
import Stack from "./stack";
import Text from "./text";

const Container = styled.div`
	--font-size: var(--font-size-small);
`;

const User = () => {
	const user = useUser();

	const signOut = () =>
		auth()
			.signOut()
			.catch(() => alert("Sign Out Failed"));

	return (
		<Container>
			{user ? (
				<Stack>
					<Text iconBefore="account_box">{user.displayName}</Text>
					<Button onClick={signOut} title="Sign Out">
						<Text icon="logout">Sign out</Text>
					</Button>
				</Stack>
			) : (
				<Stack>
					<Link href="/sign-in">
						<Text>Sign In</Text>
					</Link>
					<Link href="/register">
						<Text>Register</Text>
					</Link>
				</Stack>
			)}
		</Container>
	);
};

export default User;
