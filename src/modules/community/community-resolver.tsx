import React from "react";

import CreateCommunityForm from "./create-community-form";
import ViewCommunity from "./view-community";

interface ViewCommunityProps {
	routeParams: {
		community_id: string;
	};
}

const CommunityResolver = ({
	routeParams: { community_id = "new" },
}: ViewCommunityProps) => {
	if (community_id === "new") {
		return <CreateCommunityForm></CreateCommunityForm>;
	}

	return <ViewCommunity communityId={community_id} />;
};

export default CommunityResolver;
