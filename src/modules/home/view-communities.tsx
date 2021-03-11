import React from "react";

import Stack from "../../components/stack";
import Link from "../../components/link";
import Text from "../../components/text";
import Banner from "../../components/banner";
import { useUser } from "../authentication/user-provider";
import CommunityList from "../community/public-community-list";

const ViewCommunities = () => {
	const user = useUser();
	return (
		<Stack>
			<Banner>
				<Text>Public Communities</Text>
			</Banner>
			<CommunityList />
		</Stack>
	);
};

export default ViewCommunities;
