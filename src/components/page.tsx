import React from "react";
import styled from "styled-components";

import { ForegroundColor } from "../styles/common";
import auth from "../library/firebase/auth";
import { useUser } from "../modules/authentication/user-provider";
import Button from "./button";
import Link from "./link";
import Text from "./text";
import Footer from "./footer";
import Header from "./header";

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr minmax(100px, 1500px) 1fr;
	grid-template-rows: min-content 1fr;
	grid-template-areas:
		"header header header"
		". main ."
		"footer footer footer";
`;

const Content = styled.main`
	grid-area: main;
	height: 100%;
	--spacing: var(--spacing-medium);
`;

const Title = styled.h1`
	color: ${ForegroundColor.Nav};
`;

const HeaderContainer = styled.div`
	grid-area: title;
	flex-direction: row;
`;

const Navigation = styled.nav``;

const User = styled.div`
	grid-area: user;
`;

const Page: React.FC = ({ children }) => {
	const user = useUser();

	const signOut = () =>
		auth()
			.signOut()
			.catch(() => alert("Sign Out Failed"));

	return (
		<Container>
			<Header>
				<HeaderContainer>
					<Title>Rule Zero</Title>
					<Navigation>
						<Link href="/">
							<Text>Communities</Text>
						</Link>
					</Navigation>
				</HeaderContainer>
				<User>
					{user ? (
						<Button onClick={signOut} title="Sign Out">
							<Text>{user.displayName}</Text>
						</Button>
					) : (
						<Link href="/sign-in">
							<Text>Sign In or Register</Text>
						</Link>
					)}
				</User>
			</Header>
			<Content>{children}</Content>
			<Footer />
		</Container>
	);
};

export default Page;
