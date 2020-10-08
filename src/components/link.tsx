import styled from "styled-components";

export default styled.a`
	padding: 20px;
	cursor: pointer;
	border: 0;
	background: transparent;
	transition: background 0.2s ease-out;
	text-decoration: none;
	color: unset;

	&:hover {
		background: grey;
	}
`;
