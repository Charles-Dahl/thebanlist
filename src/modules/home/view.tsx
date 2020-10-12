import React from "react";

import Link from "../../components/link";
import { useUser } from "../authentication/user-provider";

export default () => {
	const user = useUser();
	return user ? <Link href="/community/new">Create Community</Link> : null;
};
