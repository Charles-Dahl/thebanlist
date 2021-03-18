import React from "react";
import styled from "styled-components";

import Paragraph from "./paragraph";

const Container = styled.footer`
	grid-area: footer;
	background: var(--color-background-nav);
	padding: var(--spacing-large);
	--font-size: var(--font-size-small);
	--color: var(--color-light-2);
`;

const Footer = () => (
	<Container>
		<Paragraph>Under Construction</Paragraph>
		<Paragraph>
			All card images are copyright Wizards of the Coast, LLC, a
			subsidiary of Hasbro, Inc.
		</Paragraph>
		<Paragraph>
			Rule Zero is not produced by, endorsed by, supported by, or
			affiliated with Wizards of the Coast.
		</Paragraph>
		<Paragraph>All other content copyright Charles Dahl</Paragraph>
	</Container>
);

export default Footer;
