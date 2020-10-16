import React, { createContext, useContext } from "react";

import CreateCommunityForm from "./create-community-form";
import useFindCommunity from "./hooks/use-find-community";
import AddCardForm from "./add-card-form";
import { Community } from "../../types/community";
import CardList from "./card-list";
import Stack from "../../components/stack";
import Text from "../../components/text";
import NotFound from "../../components/not-found";
import { BackgroundColor, Spacing } from "../../styles/common";
import styled from "styled-components";
import { useUser } from "../authentication/user-provider";
import InviteGenerator from "./invite-generator";

type Props = {
	routeParams: {
		community_id: string;
	};
};

const NameContainer = styled.div`
	background-color: ${BackgroundColor.Overlay};
	border: black solid 2px;
	border-top-width: 0;
	border-radius: 0 0 10px 10px;
	padding: ${Spacing.Small};
	margin-top: -${Spacing.Medium};
	min-width: 50vw;
`;

const CommunityContext = createContext<Community | null>(null);

export const useCommunity = () => useContext(CommunityContext);

export default ({ routeParams: { community_id } }: Props) => {
	if (community_id === "new") {
		return <CreateCommunityForm></CreateCommunityForm>;
	}

	const [community, loading] = useFindCommunity(community_id);
	const user = useUser();

	if (loading) {
		return <Text>Loading</Text>;
	}
	if (!community) {
		return <NotFound />;
	}
	// Add expandable banner for search
	return (
		<CommunityContext.Provider value={community}>
			<Stack space="Large">
				<NameContainer>
					<Text>{community.name}</Text>
					<Text size="Small" tone="Overlay">{`${
						community.isPublic ? "Public" : "Private"
					} Community`}</Text>
					{user && community.admin.includes(user.uid) && (
						<InviteGenerator community={community} />
					)}
				</NameContainer>
				<div>
					<CardList community_id={community_id} />
					<AddCardForm></AddCardForm>
				</div>
			</Stack>
		</CommunityContext.Provider>
	);
};
