import { firestore } from "firebase";
import React from "react";
import styled from "styled-components";

import Button from "../../components/button";
import { Card } from "../../types/cards";
import { useCommunity } from "./view";

type SearchResultCardProps = {
	card: Card;
};

const useSaveCard = (card: Card) => {
	const community = useCommunity();
	return () => {
		if (community) {
			firestore()
				.collection(`community/${community.community_id}/card`)
				.doc(card.id)
				.set(card);
		}
	};
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
	const save = useSaveCard(card);
	return (
		<Container>
			<img
				src={card.image_uris.normal}
				alt={card.name}
				width={315}
				height={440}
			></img>
			<Controls>
				<Button onClick={save}>+</Button>
			</Controls>
		</Container>
	);
};
