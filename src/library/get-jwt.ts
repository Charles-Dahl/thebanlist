import { sign } from "jsonwebtoken";

import { secret } from "../config/invites";
import { Community, Permission } from "../types/community";

export default (permissions: Array<Permission>, community: Community) => {
	const payload = {
		permissions,
		community_id: community.id,
	};

	return sign(payload, secret, { expiresIn: "1 day" });
};
