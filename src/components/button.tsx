import styled, { keyframes } from "styled-components";

const clickAnimation = keyframes`
0% {background-size: 100%}
100% {background-size: 400%}`;

const Button = styled.button`
	position: relative;
	padding: var(--spacing-small) var(--spacing-medium);
	color: var(--color-light-2);
	--font-size: var(--font-size-small);
	cursor: pointer;
	border: 0;
	background: var(--gradient-primary);
	border-radius: var(--border-radius-button);
	justify-content: center;
	transition: outline-offset 100ms ease-in-out;

	outline-offset: 0px;

	:focus,
	:hover {
		outline: 2px solid var(--color-brand-2);
		outline-offset: 4px;
	}

	:hover:disabled {
		cursor: not-allowed;
		filter: saturate(0.1);
	}

	:after {
		content: "";
		background: radial-gradient(
			circle at center,
			transparent,
			var(--color-brand-2),
			transparent
		);
		background-position: center;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		opacity: 0;
	}

	:active:after {
		animation: ${clickAnimation} 300ms 1 alternate;
		opacity: 0.5;
		background-size: 400%;
	}
`;

export default Button;
