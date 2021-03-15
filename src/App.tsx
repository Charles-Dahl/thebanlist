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
	background: var(--color-background);
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

    /* default values */
    --spacing: var(--spacing-none);
    --font-size: var(--font-size-medium);
    --border-radius: 3px;
    --border-radius-button: 3px;
    --color: #000000;
    --direction: column;
    --color-background: var(--color-light-2);
    --color-background-nav: var(--color-dark-1);
}

body *:not(script) {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
    justify-content: space-between;
}

:root {
    --background-color: #eeeeee;

    --spacing-none: 0;
	--spacing-xsmall: 3px;
	--spacing-small: 6px;
	--spacing-medium: 10px;
	--spacing-large: 20px;
	--spacing-xlarge: 50px;

    --font-size-xsmall: 12px;
    --font-size-small: 18px;
	--font-size-medium: 24px;
	--font-size-large: 36px;
	--font-size-xlarge: 48px;

    --color-light-1: #FFFFFF;
    --color-light-2: #EBEBEB;
    --color-light-3: #D6D6D6;

    --color-dark-1: #282828;
    --color-dark-2: #000000;
    --color-dark-3: #474747;

    --color-brand-1: #C4FCF0;
    --color-brand-2: #63BAAB;
    --color-brand-3: #4C8077;

    --color-accent: #5D23BB;

    --color-overlay: #28282877;
    --color-error: red;

    --gradient-primary: linear-gradient(
		135deg,
		rgba(93, 35, 187, 1) 0%,
		rgba(0, 119, 147, 1) 66%,
		rgba(99, 186, 171, 1) 100%
	);
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
