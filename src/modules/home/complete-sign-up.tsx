import { useEffect } from "react";
import { URLSearchParams } from "url";

import auth from "../../library/firebase/auth";

export default () => {
	useEffect(() => {
		const url = window.location.href;
		if (auth().isSignInWithEmailLink(url)) {
			let email = window.localStorage.getItem("emailForSignIn");
			if (!email) {
				email = window.prompt(
					"Please provide your email for confirmation"
				);
			}
			if (email) {
				auth()
					.signInWithEmailLink(email, url)
					.then(({ user, additionalUserInfo }) => {
						window.localStorage.removeItem("emailForSignIn");
						if (additionalUserInfo?.isNewUser) {
							const displayName = new URL(
								window.location.href
							).searchParams.get("displayName");
							if (displayName) {
								return user?.updateProfile({ displayName });
							}
						}
					});
			}
		}
	}, []);

	return null;
};
