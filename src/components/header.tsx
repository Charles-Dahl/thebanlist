import React from "react";
import styled from "styled-components";
import Home from "./home";
import Navigation from "./navigation";
import User from "./user";

const Container = styled.header`
	color: var(--color-light-2);
	background: var(--color-background-nav);
	grid-area: header;
`;

const InnerContainer = styled.div`
	padding: 20px;
	width: min(1500px, 100%);

	@media (min-width: 860px) {
		flex-direction: row;
	}
`;

const Header = () => {
	return (
		<Container>
			<InnerContainer>
				<Home />
				<Navigation />
				<User />
			</InnerContainer>
		</Container>
	);
};

export default Header;
