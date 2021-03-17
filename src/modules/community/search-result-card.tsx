import React from "react";

import { Card as CardType } from "../../types/card";
import CardButton from "./card-button";
import CardControls from "./card-controls";
import useSaveCard from "./hooks/use-save-card";
import Card from "./card";

interface SearchResultCardProps {
	card: CardType;
}

export default ({ card }: SearchResultCardProps) => {
	const saveCard = useSaveCard();
	const addCard = () => saveCard(card);

	return (
		<Card image={card.image_uris.normal} name={card.name}>
			<CardControls>
				<CardButton onClick={addCard} icon="add" left right />
			</CardControls>
		</Card>
	);
};
