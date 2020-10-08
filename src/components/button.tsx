import styled from "styled-components";

import { BackgroundColor } from "../styles/common";

type ButtonProps = {
	tone?: keyof typeof BackgroundColor;
};

export default styled.button`
	padding: 20px;
	cursor: pointer;
	border: 0;
	background: transparent;
	transition: background 0.2s ease-out;

	&:hover {
		background: ${({ tone = "Primary" }: ButtonProps) =>
			BackgroundColor[tone]};
	}
`;
