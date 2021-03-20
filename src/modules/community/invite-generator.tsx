import React, { useState } from "react";

import CheckboxLabelled from "../../components/checkbox-labelled";
import Button from "../../components/button";
import Stack from "../../components/stack";
import Text from "../../components/text";
import InviteDisplay from "./invite-display";
import generateInvite from "../../library/generate-invite";
import DropdownMenu from "../../components/dropdown-menu";

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
		<DropdownMenu icon="settings">
			<Stack>
				<fieldset>
					<CheckboxLabelled
						id="toggle-admin"
						value={admin}
						onChange={setAdmin}
						label="Administrator"
					/>
					<CheckboxLabelled
						id="toggle-voter"
						value={voter}
						onChange={setVoter}
						label="Voting"
					/>
					<CheckboxLabelled
						id="toggle-add"
						value={addCards}
						onChange={setAddCards}
						label="Add Cards"
					/>
				</fieldset>
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
			</Stack>
		</DropdownMenu>
	);
};
