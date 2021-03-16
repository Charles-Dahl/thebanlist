import styled from "styled-components";

const Button = styled.button`
	padding: var(--spacing-small) var(--spacing-medium);
	cursor: pointer;
	border: 0;
	background: var(--gradient-primary);
	border-radius: var(--border-radius-button);
	width: 100%;
	justify-content: center;
	transition: filter 100ms ease-in-out;
	outline: none;

	:focus,
	:hover {
		box-shadow: 0 0 0 4px var(--color-brand-2);
	}

	&:disabled {
		cursor: not-allowed;
	}
`;

export default Button;
