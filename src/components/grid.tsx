import React from "react";
import styled from "styled-components";

const Item = styled.li`
	border-radius: 0.7em;
	overflow: hidden;
`;

const Container = styled.ul`
	width: 100%;
	display: grid;
	gap: var(--spacing-small);
	justify-content: center;

	/* Allows columns to grow between 150px and 252px */
	grid-template-columns: repeat(auto-fit, clamp(150px, 20vw, 252px));
`;

const Grid: React.FC = ({ children }) => (
	<Container>
		{React.Children.map(children, (child) => (
			<Item>{child}</Item>
		))}
	</Container>
);

export default Grid;
