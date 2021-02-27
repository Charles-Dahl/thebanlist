import React, { useRef } from "react";
import styled from "styled-components";

import Button from "../../components/button";
import Icon from "../../components/icon";
import { FontSize } from "../../styles/common";

interface InviteDisplayProps {
	invite: string;
}

const InviteInput = styled.input`
	text-overflow: ellipsis;
	background: none;
	border: none;
	outline: none;
	font-size: ${FontSize.Small};
`;

const Container = styled.label`
	display: grid;
	grid-template-columns: max-content max-content;
	grid-gap: 10px;
`;

export default ({ invite }: InviteDisplayProps) => {
	const inviteRef = useRef<HTMLInputElement>(null);

	const copyToClipboard = () => {
		if (inviteRef && inviteRef.current) {
			inviteRef.current.select();
			document.execCommand("copy");
		}
	};

	return (
		<Container>
			<InviteInput
				name="invite"
				ref={inviteRef}
				value={invite}
				readOnly
			/>
			{invite && (
				<Button
					onClick={copyToClipboard}
					title="Copy Invite to Clipboard"
				>
					<Icon name="content_copy"></Icon>
				</Button>
			)}
		</Container>
	);
};
