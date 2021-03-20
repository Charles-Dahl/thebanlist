import React from "react";

import useSubscribeCards from "./hooks/use-subscribe-cards";
import CommunityCard from "./community-card";
import styled from "styled-components";
import Preloader from "../../components/preloader";

type CommunityCardListProps = {
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

const CommunityCardList = ({ community_id }: CommunityCardListProps) => {
	const [cards, loadingCards] = useSubscribeCards(community_id);
	console.log(cards[0]);

	if (loadingCards) {
		return <Preloader />;
	}

	return (
		<Container>
			{cards.map((card) => (
				<CommunityCard key={card.id} card={card} />
			))}
		</Container>
	);
};

export default CommunityCardList;
