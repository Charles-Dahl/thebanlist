import React from "react";

import { Card as CardType } from "../../types/card";
import useSaveCard from "./hooks/use-save-card";
import Card from "./card";
import styled from "styled-components";

interface SearchResultCardProps {
	card: CardType;
}

const Container = styled.button`
	--overlay-opacity: 0;

	transition: transform 150ms ease-in;
	position: relative;
	padding: 0;
	border: 0;
	border-radius: 0.7rem;
	overflow: hidden;
	outline: none;
	cursor: pointer;

	:focus-within,
	:hover {
		transform: scale(1.08);
		--overlay-opacity: 1;
		z-index: 1;
		filter: brightness(1.1);
	}
`;

export default ({ card }: SearchResultCardProps) => {
	const saveCard = useSaveCard();
	const addCard = () => saveCard(card);

	return (
		<Container onClick={addCard} title="Add Card">
			<Card image={card.image_uris.normal} name={card.name} />
		</Container>
	);
};
