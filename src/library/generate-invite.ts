import callApi from "./call-api";

import config, { dynamicLinkDomain } from "../config/firebase";
import { acceptInviteUrl } from "../config/invites";
import { Community, Permission } from "../types/community";
import getJwt from "./get-jwt";

const generateInvite = (
	permissions: Array<Permission>,
	community: Community
) => {
	const token = getJwt(permissions, community);
	const destinationURL = `${acceptInviteUrl}?token=${token}`;

	const googleDynamicLinkAPI = `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${config.apiKey}`;
	const longDynamicLink = `https://${dynamicLinkDomain}/?link=${encodeURIComponent(
		destinationURL
	)}`;

	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ longDynamicLink }),
	};

	return callApi(googleDynamicLinkAPI, options);
};

export default generateInvite;
