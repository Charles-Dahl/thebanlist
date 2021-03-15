import React from "react";
import styled from "styled-components";

import auth from "../library/firebase/auth";
import { useUser } from "../modules/authentication/user-provider";
import Button from "./button";
import Link from "./link";
import Text from "./text";

const Container = styled.div`
	grid-area: user;
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
				<Button onClick={signOut} title="Sign Out">
					<Text>{user.displayName}</Text>
				</Button>
			) : (
				<Link href="/sign-in">
					<Text>Sign In or Register</Text>
				</Link>
			)}
		</Container>
	);
};

export default User;
