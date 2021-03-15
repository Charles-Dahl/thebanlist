import React from "react";
import styled from "styled-components";

import Link from "./link";
import Title from "./title";

const Container = styled(Link)`
	grid-area: title;
	--color-title: var(--color-light-1);
`;

const Home = () => {
	return (
		<Container>
			<Link href="">
				<Title>Rule Zero</Title>
			</Link>
		</Container>
	);
};

export default Home;
