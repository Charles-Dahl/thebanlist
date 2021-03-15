import React from "react";

import Stack from "../../components/stack";
import Banner from "../../components/banner";
import CommunityList from "../community/public-community-list";
import Title from "../../components/title";

const ViewCommunities = () => {
	return (
		<Stack>
			<Banner>
				<Title>Public Communities</Title>
			</Banner>
			<CommunityList />
		</Stack>
	);
};

export default ViewCommunities;
