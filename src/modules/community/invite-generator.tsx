import React, { useState } from "react";
import styled from "styled-components";

import Checkbox from "../../components/checkbox";
import Button from "../../components/button";
import Stack from "../../components/stack";
import Text from "../../components/text";
import InviteDisplay from "./invite-display";
import generateInvite from "../../library/generate-invite";

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

const StyledLabel = styled.label`
	display: grid;
	grid-template-columns: max-content max-content;
	grid-gap: 10px;
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
		<Stack>
			<StyledLabel>
				<Checkbox value={admin} onChange={setAdmin}></Checkbox>
				<Text>Administration</Text>
			</StyledLabel>
			<StyledLabel>
				<Checkbox value={voter} onChange={setVoter}></Checkbox>
				<Text>Vote on Cards</Text>
			</StyledLabel>
			<StyledLabel>
				<Checkbox value={addCards} onChange={setAddCards}></Checkbox>
				<Text>Nominate Cards</Text>
			</StyledLabel>
			<Button disabled={!admin && !voter && !addCards} onClick={generate}>
				<Text>Generate Invite</Text>
			</Button>
			{loading ? (
				<Text>Generating...</Text>
			) : (
				<InviteDisplay invite={invite} />
			)}
		</Stack>
	);
};
