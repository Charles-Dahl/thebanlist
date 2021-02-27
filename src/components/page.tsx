import React from "react";
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
							<Text tone="Nav">Communities</Text>
						</Link>
					</Navigation>
				</HeaderContainer>
				<User>
					{user ? (
						<Button onClick={signOut} title="Sign Out">
							<Text size="Small" tone="Nav">
								{user.displayName}
							</Text>
						</Button>
					) : (
						<Link href="/sign-in">
							<Text size="Small" tone="Nav">
								Sign In or Register
							</Text>
						</Link>
					)}
				</User>
			</Header>
			<Content>{children}</Content>
			<Footer>
				<Text tone="Nav">Currently under construction</Text>
				<Text tone="Nav" size="Small">
					All card images are copyright Wizards of the Coast, LLC, a
					subsidiary of Hasbro, Inc.
				</Text>
				<Text tone="Nav" size="Small">
					Rule Zero is not produced by, endorsed by, supported by, or
					affiliated with Wizards of the Coast.
				</Text>
				<Text tone="Nav" size="Small">
					All other content copyright Charles Dahl
				</Text>
			</Footer>
		</Container>
	);
};

export default Page;
