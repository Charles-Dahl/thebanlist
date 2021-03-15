import React from "react";
import styled from "styled-components";

import Text from "./text";

const Container = styled.footer`
	grid-area: footer;
	background: var(--color-background-nav);
	padding: var(--spacing-large);
	--font-size: var(--font-size-small);
	--color: var(--color-light-2);
`;

const Footer = () => (
	<Container>
		<Text>Under construction</Text>
		<Text>
			All card images are copyright Wizards of the Coast, LLC, a
			subsidiary of Hasbro, Inc.
		</Text>
		<Text>
			Rule Zero is not produced by, endorsed by, supported by, or
			affiliated with Wizards of the Coast.
		</Text>
		<Text>All other content copyright Charles Dahl</Text>
	</Container>
);

export default Footer;
