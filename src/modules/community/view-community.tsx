import React, { createContext, useContext } from "react";

import useFindCommunity from "./hooks/use-find-community";
import AddCardForm from "./add-card-form";
import { Community } from "../../types/community";
import CardList from "./card-list";
import Stack from "../../components/stack";
import Text from "../../components/text";
import NotFound from "../../components/not-found";
import { useUser } from "../authentication/user-provider";
import InviteGenerator from "./invite-generator";
import Banner from "../../components/banner";
import Title from "../../components/title";
import Subtitle from "../../components/subtitle";

interface ViewCommunityProps {
	communityId: string;
}

const CommunityContext = createContext<Community | null>(null);

export const useCommunity = () => useContext(CommunityContext);

const ViewCommunity: React.FC<ViewCommunityProps> = ({ communityId }) => {
	const [community, loading] = useFindCommunity(communityId);
	const user = useUser();

	if (loading) {
		return (
			<Banner>
				<Text>Loading</Text>
			</Banner>
		);
	}
	if (!community) {
		return <NotFound />;
	}
	// Add expandable banner for search
	return (
		<CommunityContext.Provider value={community}>
			<Stack>
				<Banner>
					<Title>{community.name}</Title>
					<Subtitle>
						{community.isPublic ? "Public" : "Private"}
					</Subtitle>
					{user && community.admin.includes(user.uid) && (
						<InviteGenerator community={community} />
					)}
				</Banner>
				<CardList community_id={communityId} />
				<AddCardForm />
			</Stack>
		</CommunityContext.Provider>
	);
};

export default ViewCommunity;
