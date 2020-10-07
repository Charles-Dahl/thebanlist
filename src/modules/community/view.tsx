import React, { createContext, useContext } from "react";

import CreateCommunity from "./create";
import useFindCommunity from "./hooks/use-find-community";
import AddCardForm from "./add-card-form";
import { CommunityType } from "./types";
import CardList from "./card-list";

type Props = {
	routeParams: {
		community_id: string;
	};
};

const CommunityContext = createContext<CommunityType | null>(null);

export const useCommunity = () => useContext(CommunityContext);

export default ({ routeParams: { community_id } }: Props) => {
	if (community_id === "new") {
		return <CreateCommunity></CreateCommunity>;
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
