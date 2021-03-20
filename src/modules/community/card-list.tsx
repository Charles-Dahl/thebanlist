import styled from "styled-components";

const CardList = styled.div`
	width: 100%;
	display: grid;
	gap: var(--spacing-xsmall);
	justify-content: center;

	/* Allows columns to grow between 150px and 252px */
	grid-template-columns: repeat(auto-fill, max(min(20vw, 252px), 150px));
`;

export default CardList;
