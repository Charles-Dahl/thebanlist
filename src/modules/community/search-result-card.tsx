import React from "react";
import styled from "styled-components";

import Button from "../../components/button";
import Icon from "../../components/icon";
import { Card } from "../../types/card";
import useSaveCard from "./hooks/use-save-card";

type SearchResultCardProps = {
	card: Card;
};

const Container = styled.div`
	position: relative;
	border-radius: 10px;
	overflow: hidden;
`;

const Controls = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	border: black solid 1px;
	border-radius: 0 0 10px 10px;
	overflow: hidden;
	--color-icon: var(--color-light-1);
	--font-size-icon: var(--font-size-medium);
	--border-radius-button: 0;
`;

export default ({ card }: SearchResultCardProps) => {
	const saveCard = useSaveCard();
	const addCard = () => saveCard(card);

	return (
		<Container>
			<img
				src={card.image_uris.normal}
				alt={card.name}
				width={252}
				height={352}
			/>
			<Controls>
				<Button onClick={addCard}>
					<Icon name="add" />
				</Button>
			</Controls>
		</Container>
	);
};
