import React from "react";
import styled from "styled-components";

import { BackgroundColor } from "../../styles/common";
import Button from "../../components/button";
import { Card } from "../../types/card";
import useSaveCard from "./hooks/use-save-card";
import Icon from "../../components/icon";
import { User } from "firebase";

interface UserControlProps {
	user: User;
	card: Card;
}

const Controls = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	flex-direction: row;
	background: ${BackgroundColor.Overlay};
`;

export default ({ user, card }: UserControlProps) => {
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
		<Controls>
			<Button tone="Error" onClick={ban}>
				<Icon
					name={votedBan ? "thumb_down" : "thumb_down_off_alt"}
					tone="Overlay"
				/>
			</Button>
			<Button tone="Success" onClick={dontBan}>
				<Icon
					name={votedDontBan ? "thumb_up" : "thumb_up_off_alt"}
					tone="Overlay"
				/>
			</Button>
		</Controls>
	);
};
