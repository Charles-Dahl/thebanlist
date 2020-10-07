import React from "react";

import useSubscribeCards from "./hooks/use-subscribe-cards";
import Card from "./card";

type Props = {
	community_id: string;
};

export default ({ community_id }: Props) => {
	const [cards, loadingCards] = useSubscribeCards(community_id);

	return (
		<div>
			{loadingCards && <p>Loading Cards</p>}
			{cards.map((card) => (
				<Card key={card.id} card={card} />
			))}
		</div>
	);
};
