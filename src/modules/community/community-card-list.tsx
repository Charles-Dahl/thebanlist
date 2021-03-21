import React from "react";

import useSubscribeCards from "./hooks/use-subscribe-cards";
import CommunityCard from "./community-card";
import Preloader from "../../components/preloader";
import CardList from "./card-list";

type CommunityCardListProps = {
	community_id: string;
};

const CommunityCardList = ({ community_id }: CommunityCardListProps) => {
	const [cards, loadingCards] = useSubscribeCards(community_id);

	if (loadingCards) {
		return <Preloader />;
	}

	return (
		<CardList>
			{cards.map((card) => (
				<CommunityCard key={card.id} card={card} />
			))}
		</CardList>
	);
};

export default CommunityCardList;
