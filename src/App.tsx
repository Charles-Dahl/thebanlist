import React from "react";

import UserProvider from "./modules/authentication/user-provider";
import NotFoundErrorBoundary from "./library/not-found-error-boundary";
import Router from "./router";

export default () => {
	return (
		<NotFoundErrorBoundary>
			<UserProvider>
				<Router></Router>
			</UserProvider>
		</NotFoundErrorBoundary>
	);
};
