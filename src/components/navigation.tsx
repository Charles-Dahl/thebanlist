import React from "react";
import styled from "styled-components";

import Link from "./link";
import Text from "./text";

const Container = styled.nav``;

const Navigation = () => {
	return (
		<Container>
			<Link href="/community">
				<Text>Communities</Text>
			</Link>
		</Container>
	);
};

export default Navigation;
