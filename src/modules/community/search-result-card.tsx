import React from "react";

import { Card as CardType } from "../../types/card";
import useSaveCard from "./hooks/use-save-card";
import Card from "./card";
import styled from "styled-components";
import Icon from "../../components/icon";

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

	:focus-within,
	:hover {
		transform: scale(1.08);
		--overlay-opacity: 1;
	}
`;

const IconContainer = styled.div`
	--font-size-icon: 6em;
	--color-icon: var(--color-light-1);

	opacity: var(--overlay-opacity);
	background-color: var(--color-overlay);
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	justify-content: center;
	transition: opacity 250ms ease-in-out;
`;

export default ({ card }: SearchResultCardProps) => {
	const saveCard = useSaveCard();
	const addCard = () => saveCard(card);

	return (
		<Container onClick={addCard}>
			<Card image={card.image_uris.normal} name={card.name}></Card>
			<IconContainer>
				<Icon name="add" />
			</IconContainer>
		</Container>
	);
};
