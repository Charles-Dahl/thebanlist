import styled from "styled-components";

const Link = styled.a`
	padding: var(--spacing);
	cursor: pointer;
	border: 0;
	background: transparent;
	transition: background 0.2s ease-out;
	text-decoration: none;
	color: unset;
	border-radius: var(--border-radius-button);
	flex-direction: row;
	width: 100%;
	justify-content: center;

	&:hover {
		background: var(--color-light-2);
	}
`;

export default Link;
