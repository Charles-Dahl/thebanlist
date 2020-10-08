import { firestore } from "firebase";
import React from "react";
import styled from "styled-components";

import { BackgroundColor, ForegroundColor } from "../../styles/common";
import Button from "../../components/button";
import { Card } from "../../types/cards";
import { useCommunity } from "./view";
import { useUser } from "../authentication/user-provider";
import button from "../../components/button";

type CardProps = {
	card: Card;
};

const useSaveCard = () => {
	const community = useCommunity();
	return (card: Card) => {
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
	bottom: 0;
	flex-direction: row;
	background: ${BackgroundColor.Overlay};
`;

const ControlButton = styled(Button)`
	flex: 1;
	border-style: solid;
	border-width: 3px;
	border-color: ${({
		active,
		tone,
	}: {
		active: boolean;
		tone: keyof typeof BackgroundColor;
	}) => (active ? BackgroundColor[tone] : BackgroundColor.None)};
	color: ${ForegroundColor.Nav};
`;

export default ({ card }: CardProps) => {
	const save = useSaveCard();
	const user = useUser();
	const votedToBan = user ? card.users.includes(user.uid) : false;

	const handleBan = () => {
		if (!votedToBan) {
			if (user) {
				save({ ...card, users: [...card.users, user.uid] });
			}
		}
	};

	const handleDontBan = () => {
		if (votedToBan) {
			if (user) {
				const uids = card.users.filter((uid) => uid === user.uid);
				save({ ...card, users: uids });
			}
		}
	};

	return (
		<Container>
			<img
				src={card.image_uris.normal}
				alt={card.name}
				width={252}
				height={352}
			></img>
			<Controls>
				<ControlButton
					active={votedToBan}
					tone="Error"
					onClick={handleBan}
				>
					Ban
				</ControlButton>
				<ControlButton
					active={!votedToBan}
					tone="Success"
					onClick={handleDontBan}
				>
					Don't Ban
				</ControlButton>
			</Controls>
		</Container>
	);
};
