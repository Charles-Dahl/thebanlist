import React from "react";
import styled from "styled-components";
import Stack from "./stack";

const Item = styled.li`
	border-radius: 0.7em;
`;

const Container = styled.ul`
	width: 100%;
	display: grid;
	gap: var(--spacing-small);
	justify-content: center;
	flex: 0;

	/* Allows columns to grow between 150px and 252px */
	grid-template-columns: repeat(auto-fit, clamp(150px, 20vw, 252px));
`;

const EndText = styled.em`
	opacity: 0.4;
`;

const Grid: React.FC = ({ children }) => (
	<Stack>
		<Container>
			{React.Children.map(children, (child) => {
				if (child === undefined || child === null) {
					return null;
				}
				return <Item>{child}</Item>;
			})}
		</Container>

		<EndText>That's all there is... there isn't anymore</EndText>
	</Stack>
);

export default Grid;
