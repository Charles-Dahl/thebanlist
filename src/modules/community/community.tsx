import React from "react";
import styled from "styled-components";

import { Community } from "../../types/community";
import Link from "../../components/link";
import Text from "../../components/text";

type CommunityProps = {
	community: Community;
};

export default ({ community }: CommunityProps) => {
	return (
		<Link href={`/community/${community.id}`}>
			<Text>{community.name}</Text>
		</Link>
	);
};
