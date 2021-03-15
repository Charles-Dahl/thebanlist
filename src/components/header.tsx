import React from "react";
import styled from "styled-components";

const Container = styled.header`
	--color: var(--color-light-1);
	background: var(--color-background-nav);
	grid-area: header;
	padding: 20px;
	display: grid;
	grid-template-columns: 1fr minmax(100px, 1500px) 1fr;
	grid-template-areas: ". title .";
`;

const Header: React.FC = ({ children }) => {
	return <Container>{children}</Container>;
};

export default Header;
