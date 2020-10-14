import React from "react";

import Stack from "../../components/stack";
import Link from "../../components/link";
import Text from "../../components/text";
import { useUser } from "../authentication/user-provider";
import CommunityList from "../community/public-community-list";

export default () => {
	const user = useUser();
	return (
		<Stack space="Small">
			{user ? (
				<Link href="/community/new">
					<Text>Create Community</Text>
				</Link>
			) : null}
			<CommunityList />
		</Stack>
	);
};
