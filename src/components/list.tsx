import React from "react";
import styled from "styled-components";

const Item = styled.li`
	width: 100%;
`;

const Container = styled.ul`
	width: 100%;
	margin: 0;
	padding: 0;
	list-style: none;
	gap: var(--spacing);
`;

const List: React.FC = ({ children }) => (
	<Container>
		{React.Children.map(children, (child) => (
			<Item>{child}</Item>
		))}
	</Container>
);

export default List;
