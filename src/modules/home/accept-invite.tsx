import { useEffect, useState } from "react";
import { verify } from "jsonwebtoken";

import { secret } from "../../config/invites";
import { NotFoundError } from "../../library/errors/NotFoundError";
import { useUser } from "../authentication/user-provider";
import useUpdatePermissions from "../community/hooks/use-update-permissions";
import { Permission } from "../../types/community";

class PermissionsConfig {
	constructor(data?: any) {
		console.log(data);
		if (data) {
			if (data.community_id) {
				this.community_id = data.community_id;
			}
			if (data.permissions) {
				this.permissions = data.permissions;
			}
		}
	}

	community_id: string = "";
	permissions: Array<Permission> = [];

	isValid = () => this.community_id !== "" && this.permissions.length > 0;
}

export default () => {
	const [decodedToken, setDecodedToken] = useState<PermissionsConfig>(
		new PermissionsConfig()
	);
	const updatePermissions = useUpdatePermissions();
	const user = useUser();

	const token = new URLSearchParams(window.location.search).get("token");
	console.log(token);
	if (!token) {
		throw new NotFoundError();
	}

	useEffect(() => {
		try {
			const result = new PermissionsConfig(verify(token, secret));
			console.log(result);
			setDecodedToken(result);
		} catch (error) {
			throw new NotFoundError();
		}
	}, []);
	console.log(decodedToken);
	if (!decodedToken) {
		return null;
	}
	if (!decodedToken.isValid()) {
		throw new NotFoundError();
	}

	if (user) {
		updatePermissions({ ...decodedToken, uid: user.uid }).then(
			() =>
				(window.location.href = `/community/${decodedToken.community_id}`)
		);
	}

	return null;
};
