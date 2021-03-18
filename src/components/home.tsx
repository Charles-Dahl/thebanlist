import React from "react";
import styled from "styled-components";

import Link from "./link";
import Title from "./title";

const Container = styled(Link)``;

const Home = () => {
	return (
		<Container href="">
			<Title>Rule Zero</Title>
		</Container>
	);
};

export default Home;
