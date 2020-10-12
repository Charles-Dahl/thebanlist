import React, { ReactNode } from "react";
import styled from "styled-components";

import { BackgroundColor, ForegroundColor } from "../styles/common";
import auth from "../library/firebase/auth";
import { useUser } from "../modules/authentication/user-provider";
import Button from "./button";
import Link from "./link";
import Text from "./text";

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr minmax(100px, 1500px) minmax(100px, 1fr);
	grid-template-rows: min-content 1fr;
	grid-template-areas:
		"header header header"
		". main ."
		"footer footer footer";
`;

const Header = styled.header`
	grid-area: header;
	background: ${BackgroundColor.Nav};
	padding: 20px;
	display: grid;
	grid-template-columns: 1fr minmax(100px, 1500px) minmax(100px, 1fr);
	grid-template-areas: ". title user";
`;

const Footer = styled.footer`
	grid-area: footer;
	background: ${BackgroundColor.Nav};
	padding: 20px;
`;

const Content = styled.main`
	grid-area: main;
	padding: 20px;
	height: 100%;
`;

const Title = styled.h1`
	grid-area: title;
	color: ${ForegroundColor.Nav};
`;

const User = styled.div`
	grid-area: user;
`;

interface PageProps {
	children?: ReactNode;
}

export default ({ children }: PageProps) => {
	const user = useUser();

	const signOut = () =>
		auth()
			.signOut()
			.catch(() => alert("Sign Out Failed"));

	return (
		<Container>
			<Header>
				<Title>Rule Zero</Title>
				<User>
					{user ? (
						<Button onClick={signOut} title="Sign Out">
							{user.displayName}
						</Button>
					) : (
						<Link href="/sign-in">Sign In or Register</Link>
					)}
				</User>
			</Header>
			<Content>{children}</Content>
			<Footer>
				<Text>Currently under construction</Text>
				<Text size="Small">
					All card images are copyright Wizards of the Coast, LLC, a
					subsidiary of Hasbro, Inc.
				</Text>
				<Text size="Small">
					Rule Zero is not produced by, endorsed by, supported by, or
					affiliated with Wizards of the Coast.
				</Text>
				<Text size="Small">
					All other content copyright Charles Dahl
				</Text>
			</Footer>
		</Container>
	);
};
