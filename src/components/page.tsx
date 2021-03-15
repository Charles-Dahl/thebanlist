import React from "react";
import styled from "styled-components";

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

const Page: React.FC = ({ children }) => {
	return (
		<Container>
			<Header />
			<Content>{children}</Content>
			<Footer />
		</Container>
	);
};

export default Page;
