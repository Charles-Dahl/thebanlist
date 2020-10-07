import React from "react";
import styled from "styled-components";

import Button from "../../components/button";

const Container = styled.div`
	flex-direction: column;
	width: 100%;
`;

const Header = styled.header`
	background: #282828;
	width: 100%;
	padding: 20px;
`;

const Title = styled.h1`
	color: white;
`;

export default () => {
	return (
		<Container>
			<Header>
				<Title>Rule Zero</Title>
			</Header>
			<Button>Create Community</Button>
		</Container>
	);
};
