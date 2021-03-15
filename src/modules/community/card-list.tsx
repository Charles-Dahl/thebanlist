import React from "react";

import useSubscribeCards from "./hooks/use-subscribe-cards";
import Card from "./card";
import styled from "styled-components";
import Text from "../../components/text";

type Props = {
	community_id: string;
};

const Container = styled.div`
	width: 100%;
	display: grid;
	gap: var(--spacing-xsmall);
	justify-content: center;

	/* Allows columns to grow between 150px and 252px */
	grid-template-columns: repeat(auto-fill, max(min(20vw, 252px), 150px));
`;

export default ({ community_id }: Props) => {
	const [cards, loadingCards] = useSubscribeCards(community_id);

	return (
		<Container>
			{loadingCards && <Text>Loading Cards</Text>}
			{cards.map((card) => (
				<Card key={card.id} card={card} />
			))}
		</Container>
	);
};
