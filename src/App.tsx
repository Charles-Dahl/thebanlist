import React from "react";
import { createGlobalStyle } from "styled-components";

import UserProvider from "./modules/authentication/user-provider";
import NotFoundErrorBoundary from "./library/not-found-error-boundary";
import Router from "./router";
import Page from "./components/page";

const GlobalStyles = createGlobalStyle`
body {
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
		"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background: #eeeeee;
}

code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
		monospace;
}

html,
body,
#root {
	width: 100%;
	height: 100%;
}

body *:not(script) {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
    justify-content: space-between;
}
`;

export default () => {
	return (
		<NotFoundErrorBoundary>
			<GlobalStyles></GlobalStyles>
			<UserProvider>
				<Page>
					<Router></Router>
				</Page>
			</UserProvider>
		</NotFoundErrorBoundary>
	);
};
