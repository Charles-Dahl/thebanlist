import React from "react";

import useSubscribeCards from "./hooks/use-subscribe-cards";
import CommunityCard from "./community-card";
import Preloader from "../../components/preloader";
import Grid from "../../components/grid";

type CommunityCardListProps = {
	community_id: string;
};

const CommunityCardList = ({ community_id }: CommunityCardListProps) => {
	const [cards, loadingCards] = useSubscribeCards(community_id);

	if (loadingCards) {
		return <Preloader />;
	}

	return (
		<Grid>
			{cards.map((card) => (
				<CommunityCard key={card.id} card={card} />
			))}
		</Grid>
	);
};

export default CommunityCardList;
