import React, { useRef } from "react";
import styled from "styled-components";

import Button from "../../components/button";
import Icon from "../../components/icon";

interface InviteDisplayProps {
	invite: string;
}

const InviteInput = styled.input`
	text-overflow: ellipsis;
	background: var(--color-light-2);
	border-radius: 3px;
	padding: var(--spacing-small);
	border: none;
	outline: none;
`;

const Container = styled.label`
	flex-direction: row;
	gap: 10px;
	--font-size-icon: 1em;
`;

export default ({ invite }: InviteDisplayProps) => {
	const inviteRef = useRef<HTMLInputElement>(null);

	const copyToClipboard = () => {
		if (inviteRef && inviteRef.current) {
			inviteRef.current.select();
			document.execCommand("copy");
		}
	};

	if (!invite) {
		return null;
	}

	return (
		<Container>
			<InviteInput
				name="invite"
				ref={inviteRef}
				value={invite}
				readOnly
			/>
			<Button onClick={copyToClipboard} title="Copy Invite to Clipboard">
				<Icon name="content_copy" />
			</Button>
		</Container>
	);
};
