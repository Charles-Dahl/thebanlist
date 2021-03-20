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
	--font-size-icon: 2rem;
	--color-icon: var(--color-light-2);
	--menu-toggle-width: 4rem;

	width: 90%;
	position: relative;
	padding: 0 var(--menu-toggle-width);
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
					<Text>Loading</Text>
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
			<Stack>
				<Banner>
					<Container>
						<Title>{community.name}</Title>
						<Subtitle>
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
