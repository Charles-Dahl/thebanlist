import React from "react";
import styled from "styled-components";
import Home from "./home";
import Navigation from "./navigation";
import User from "./user";

const Container = styled.header`
	--color: var(--color-light-1);
	background: var(--color-background-nav);
	grid-area: header;
`;

const InnerContainer = styled.div`
	padding: 20px;
	display: grid;
	max-width: 1500px;
	width: 100%;
	grid-template-columns: 1fr 1fr;
	grid-template-areas:
		"title title"
		"nav user";

	@media (min-width: 860px) {
		grid-template-columns: 200px minmax(260px, 1fr) 200px 200px;
		grid-template-areas: "title . nav user";
	}
`;

const Header: React.FC = ({ children }) => {
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
