import React, { createContext, useContext } from "react";

import CreateCommunityForm from "./create-community-form";
import useFindCommunity from "./hooks/use-find-community";
import AddCardForm from "./add-card-form";
import { Community } from "../../types/community";
import CardList from "./card-list";

type Props = {
	routeParams: {
		community_id: string;
	};
};

const CommunityContext = createContext<Community | null>(null);

export const useCommunity = () => useContext(CommunityContext);

export default ({ routeParams: { community_id } }: Props) => {
	if (community_id === "new") {
		return <CreateCommunityForm></CreateCommunityForm>;
	}

	const community = useFindCommunity(community_id);

	if (!community) {
		return <p>Loading</p>;
	}

	return (
		<CommunityContext.Provider value={community}>
			<div>
				<p>{community.name}</p>
				<CardList community_id={community_id} />
				<AddCardForm></AddCardForm>
			</div>
		</CommunityContext.Provider>
	);
};
