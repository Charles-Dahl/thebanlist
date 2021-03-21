import styled from "styled-components";

// adds spacing between each child of Stack by adding margin before each child and offsetting the first child by the same amount;

const Stack = styled.div`
	flex-direction: var(--direction);
	width: 100%;
	height: 100%;
	gap: var(--spacing);
	justify-content: flex-start;
`;

export default Stack;
