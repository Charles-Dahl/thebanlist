import styled from "styled-components";

// adds spacing between each child of Stack by adding margin before each child and offsetting the first child by the same amount;

const Stack = styled.div`
	flex-direction: var(--direction);
	margin-top: calc(-1 * var(--spacing));

	> * {
		margin: var(--spacing);
	}
`;

export default Stack;
