import styled from "styled-components";

// Adds spacing between elements

interface StackProps {
	spacing?: "none" | "xsmall" | "small" | "medium" | "large" | "xlarge";
}

const Stack = styled.div<StackProps>`
	flex-direction: var(--direction);
	width: 100%;
	height: 100%;
	gap: var(--spacing-${({ spacing }) => spacing || "small"});
	justify-content: flex-start;
`;

export default Stack;
