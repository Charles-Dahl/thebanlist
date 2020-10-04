import React from "react";
import NotFoundErrorBoundary from "./library/not-found-error-boundary";
import Router from "./router";

export default () => {
	return (
		<NotFoundErrorBoundary>
			<Router></Router>
		</NotFoundErrorBoundary>
	);
};
