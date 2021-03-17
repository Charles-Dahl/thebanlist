import React, { MouseEvent, useRef, useState } from "react";
import styled from "styled-components";

import Checkbox from "../../components/checkbox";
import Button from "../../components/button";
import Text from "../../components/text";
import InviteDisplay from "./invite-display";
import generateInvite from "../../library/generate-invite";
import Icon from "../../components/icon";

export type Community = {
	id: string;
	name: string;
	admin: Array<string>;
	voter: Array<string>;
	add_cards: Array<string>;
	isPublic: boolean;
};

export enum Permission {
	Admin = "admin",
	Voter = "voter",
	AddCards = "add_cards",
}

interface InviteGeneratorProps {
	community: Community;
}

const StyledLabel = styled.label.attrs({ tabIndex: -1 })`
	display: grid;
	grid-template-columns: max-content max-content;
	grid-gap: 10px;
	outline: none;
`;

const Container = styled.div`
	position: relative;
	--menu-transform: scaleY(0);
	--menu-opacity: 0;

	:focus-within {
		--menu-transform: scaleY(1);
		--menu-opacity: 1;
	}
`;

const FocusToggle: React.FC = ({ children }) => {
	const labelRef = useRef<HTMLLabelElement>(null);

	const handleClick = (event: MouseEvent<HTMLLabelElement>) => {
		event.preventDefault();
		if (document.activeElement && labelRef.current) {
			if (document.activeElement === labelRef.current) {
				return labelRef.current.blur();
			}
			return labelRef.current.focus();
		}
	};

	return (
		<label ref={labelRef} onMouseDown={handleClick} tabIndex={-1}>
			{children}
		</label>
	);
};

const MenuContainer = styled.div`
	position: absolute;
	top: 100%;
	background-color: var(--color-overlay);
	transform: var(--menu-transform);
	transform-origin: top;
	transition: transform 250ms ease-in-out;

	> * {
		opacity: var(--menu-opacity);
		transition: opacity 150ms ease-in 150ms;
	}
`;

export default ({ community }: InviteGeneratorProps) => {
	const [admin, setAdmin] = useState(false);
	const [voter, setVoter] = useState(true);
	const [addCards, setAddCards] = useState(false);
	const [invite, setInvite] = useState("");
	const [loading, setLoading] = useState(false);

	const generate = () => {
		const permissions = [
			...(admin ? [Permission.Admin] : []),
			...(voter ? [Permission.Voter] : []),
			...(addCards ? [Permission.AddCards] : []),
		];
		if (permissions.length > 0) {
			setLoading(true);
			generateInvite(permissions, community)
				.then(({ shortLink }) => setInvite(shortLink))
				.finally(() => setLoading(false));
		}
	};

	return (
		<Container>
			<FocusToggle>
				<Icon name="settings" />
			</FocusToggle>
			<MenuContainer>
				<StyledLabel htmlFor="toggle-admin">
					<Checkbox
						id="toggle-admin"
						value={admin}
						onChange={setAdmin}
					></Checkbox>
					<Text>Administration</Text>
				</StyledLabel>
				<StyledLabel htmlFor="toggle-voter">
					<Checkbox
						id="toggle-voter"
						value={voter}
						onChange={setVoter}
					></Checkbox>
					<Text>Vote on Cards</Text>
				</StyledLabel>
				<StyledLabel htmlFor="toggle-add">
					<Checkbox
						id="toggle-add"
						value={addCards}
						onChange={setAddCards}
					></Checkbox>
					<Text>Add Cards</Text>
				</StyledLabel>
				<Button
					disabled={!admin && !voter && !addCards}
					onClick={generate}
				>
					<Text>Generate Invite</Text>
				</Button>
				{loading ? (
					<Text>Generating...</Text>
				) : (
					<InviteDisplay invite={invite} />
				)}
			</MenuContainer>
		</Container>
	);
};
