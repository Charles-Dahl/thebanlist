import React from "react";

import { Card } from "../../types/card";
import useSaveCard from "./hooks/use-save-card";
import { User } from "firebase";
import CardButton from "./card-button";
import CardControls from "./card-controls";

interface CardUserControlsProps {
	user: User;
	card: Card;
}

const CardUserControls = ({ user, card }: CardUserControlsProps) => {
	const save = useSaveCard();
	const votedBan = card.ban.includes(user.uid);
	const votedDontBan = card.dont_ban.includes(user.uid);

	const ban = () => {
		card.ban = [...card.ban, user.uid];
		card.dont_ban = card.dont_ban.filter((uid) => uid !== user.uid);
		save(card);
	};

	const dontBan = () => {
		card.ban = card.ban.filter((uid) => uid !== user.uid);
		card.dont_ban = [...card.dont_ban, user.uid];
		save(card);
	};

	return (
		<CardControls>
			<CardButton
				onClick={dontBan}
				icon={votedDontBan ? "thumb_up" : "thumb_up_off_alt"}
			/>
			<CardButton
				onClick={ban}
				icon={votedBan ? "thumb_down" : "thumb_down_off_alt"}
			/>
		</CardControls>
	);
};

export default CardUserControls;
