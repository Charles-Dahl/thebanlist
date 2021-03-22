import styled from "styled-components";

interface BannedIndicatorProps {
	banned: boolean;
}

const BannedIndicator = styled.strong.attrs<BannedIndicatorProps>(
	({ banned }) => ({
		style: {
			color: banned ? "var(--color-error)" : "var(--color-brand-1)",
		},
	})
)<BannedIndicatorProps>`
	justify-content: center;
	background-color: var(--color-overlay);
	text-shadow: 3px 3px var(--color-dark-2);
	font-size: var(--font-size-large);
	font-family: var(--font-family-accent);
	position: absolute;
	top: 20%;
	left: 0;
	right: 0;
	bottom: 50%;
	backdrop-filter: blur(1px);
`;

export default BannedIndicator;
