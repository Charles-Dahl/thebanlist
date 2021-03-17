import React from "react";

import { Card as CardType } from "../../types/card";
import { useUser } from "../authentication/user-provider";
import UserControls from "./card-user-controls";
import BannedIndicator from "./banned-indicator";
import Card from "./card";

interface CommunityCardProps {
	card: CardType;
}

const CommunityCard = ({ card }: CommunityCardProps) => {
	const user = useUser();
	const banned = card.ban.length > card.dont_ban.length;
	return (
		<Card image={card.image_uris.normal} name={card.name}>
			<BannedIndicator banned={banned}>
				{banned ? "Banned" : "Allowed"}
			</BannedIndicator>
			{user && <UserControls user={user} card={card} />}
		</Card>
	);
};

export default CommunityCard;
