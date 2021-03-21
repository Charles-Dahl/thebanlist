import styled from "styled-components";

const CardList = styled.div`
	width: 100%;
	display: grid;
	gap: var(--spacing-xsmall);
	justify-content: center;
	flex: 1;

	/* Allows columns to grow between 150px and 252px */
	grid-template-columns: repeat(auto-fill, clamp(150px, 20vw, 252px));
`;

export default CardList;
