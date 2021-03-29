import React, { createContext, useContext } from "react";
import styled from "styled-components";

import useFindCommunity from "./hooks/use-find-community";
import AddCardForm from "./add-card-form";
import { Community } from "../../types/community";
import CommunityCardList from "./community-card-list";
import Stack from "../../components/stack";
import Text from "../../components/text";
import NotFound from "../../components/not-found";
import { useUser } from "../authentication/user-provider";
import InviteGenerator from "./invite-generator";
import Banner from "../../components/banner";
import Title from "../../components/title";
import Subtitle from "../../components/subtitle";
import Preloader from "../../components/preloader";

interface ViewCommunityProps {
	communityId: string;
}

const Container = styled.div`
	--font-size-icon: var(--font-size-medium);
	--color-icon: var(--color-brand-1);
	--font-size: var(--font-size-xsmall);

	display: grid;
	grid-template-columns: repeat(2, min-content);
	grid-template-rows: repeat(2, min-content);
	width: 90%;
	position: relative;
`;

const CommunityContext = createContext<Community | null>(null);

export const useCommunity = () => useContext(CommunityContext);

const ViewCommunity: React.FC<ViewCommunityProps> = ({ communityId }) => {
	const [community, loading] = useFindCommunity(communityId);
	const user = useUser();

	if (loading) {
		return (
			<Stack>
				<Banner>
					<Title>Community</Title>
					<Subtitle>Loading</Subtitle>
				</Banner>
				<Preloader />
			</Stack>
		);
	}
	if (!community) {
		return <NotFound />;
	}

	return (
		<CommunityContext.Provider value={community}>
			<Stack spacing="large">
				<Banner>
					<Container>
						<Title style={{ gridColumn: "1 / -1" }}>
							{community.name}
						</Title>
						<Subtitle style={{ gridColumn: "1 / -1" }}>
							{community.isPublic ? "Public" : "Private"}
						</Subtitle>
						{user && community.admin.includes(user.uid) && (
							<InviteGenerator community={community} />
						)}
					</Container>
				</Banner>
				<CommunityCardList community_id={communityId} />
				<AddCardForm />
			</Stack>
		</CommunityContext.Provider>
	);
};

export default ViewCommunity;
