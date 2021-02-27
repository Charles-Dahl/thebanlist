import styled from "styled-components";

import { BackgroundColor, Spacing } from "../styles/common";

interface ButtonProps {
	tone?: keyof typeof BackgroundColor;
}

const Button = styled.button`
	padding: ${Spacing.Small};
	cursor: pointer;
	border: 0;
	background: transparent;
	transition: background 0.2s ease-out;
	flex: 1;
	border-radius: 3px;

	&:hover {
		background: ${({ tone = "Success" }: ButtonProps) =>
			BackgroundColor[tone]};
	}

	&:disabled {
		cursor: not-allowed;
	}
`;

export default Button;
