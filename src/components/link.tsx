import styled from "styled-components";

const Link = styled.a`
	color: var(--color);
	padding: var(--spacing);
	cursor: pointer;
	border: 0;
	text-decoration: none;
	color: unset;
	border-radius: var(--border-radius-button);
	flex-direction: column;
	width: 100%;
	justify-content: center;
	outline: none;

	:after {
		content: "";
		height: 2px;
		width: 100%;
		background: var(--gradient-primary);
		transform: scaleX(0);
		transition: transform 250ms ease-in;
	}

	:hover:after,
	:focus:after {
		transform: scaleX(1);
	}
`;

export default Link;
