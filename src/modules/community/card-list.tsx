import React from "react";

import useSubscribeCards from "./hooks/use-subscribe-cards";
import Card from "./card";
import styled from "styled-components";

type Props = {
	community_id: string;
};

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
`;

export default ({ community_id }: Props) => {
	const [cards, loadingCards] = useSubscribeCards(community_id);

	return (
		<Container>
			{loadingCards && <p>Loading Cards</p>}
			{cards.map((card) => (
				<Card key={card.id} card={card} />
			))}
		</Container>
	);
};
