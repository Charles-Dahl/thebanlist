import React from "react";
import styled from "styled-components";

import Button from "../../components/button";
import { Card } from "../../types/cards";
import useSaveCard from "./hooks/use-save-card";

type SearchResultCardProps = {
	card: Card;
};

const Container = styled.div`
	position: relative;
`;

const Controls = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	top: 70%;
	bottom: 0;
`;

export default ({ card }: SearchResultCardProps) => {
    const saveCard = useSaveCard();
    const addCard = () => saveCard(card);
    
	return (
		<Container>
			<img
				src={card.image_uris.normal}
				alt={card.name}
				width={315}
				height={440}
			></img>
			<Controls>
				<Button onClick={addCard}>+</Button>
			</Controls>
		</Container>
	);
};
