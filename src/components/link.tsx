import styled from "styled-components";

import { Spacing } from "../styles/common";

const Link = styled.a`
	padding: ${Spacing.Small};
	cursor: pointer;
	border: 0;
	background: transparent;
	transition: background 0.2s ease-out;
	text-decoration: none;
	color: unset;
	border-radius: 3px;

	&:hover {
		background: grey;
	}
`;

export default Link;
