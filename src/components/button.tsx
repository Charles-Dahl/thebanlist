import styled from "styled-components";

import { BackgroundColor } from "../styles/common";

interface ButtonProps {
	tone?: keyof typeof BackgroundColor;
}

const Button = styled.button`
	padding: var(--spacing-small);
	cursor: pointer;
	border: 0;
	background: transparent;
	transition: background 0.1s ease-out;
	flex: 1;
	border-radius: var(--border-radius-button);
	width: 100%;
	justify-content: center;

	&:hover {
		background: ${({ tone = "Success" }: ButtonProps) =>
			BackgroundColor[tone]};
	}

	&:disabled {
		cursor: not-allowed;
	}
`;

export default Button;
