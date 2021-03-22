import React from "react";
import { createGlobalStyle } from "styled-components";

import UserProvider from "./modules/authentication/user-provider";
import NotFoundErrorBoundary from "./library/not-found-error-boundary";
import Router from "./router";
import Page from "./components/page";
import PageErrorBoundary from "./library/page-error-boundary";

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
}


/* default values */
body {
    --spacing: var(--spacing-none);
    --font-size: var(--font-size-medium);
    --font-family: var(--font-family-primary);
    --border-radius: 3px;
    --border-radius-button: 3px;
    --color: #000000;
    --direction: column;
    --color-background: var(--color-light-2);
    --color-background-nav: var(--color-dark-2);
}

body *:not(script) {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
    justify-content: space-between;
}

:root {
    --spacing-none: 0;
	--spacing-xsmall: 3px;
	--spacing-small: 6px;
	--spacing-medium: 10px;
	--spacing-large: 20px;
	--spacing-xlarge: 50px;

    --page-width-small: 500px;
    --page-width-medium: 1000px;
    --page-width-large: 1500px;

    --font-size-xsmall: clamp(.5rem, 1vw, 1rem);
    --font-size-small: clamp(.8rem, 1.5vw, 1.5rem);
	--font-size-medium: clamp(1rem, 2vw, 2rem);
	--font-size-large: clamp(1.5rem, 3vw, 3rem);
	--font-size-xlarge: clamp(2rem, 3.5vw, 4rem);

    --font-family-primary: 'Raleway', sans-serif;
    --font-family-accent: 'Mulish', sans-serif;
    --font-family-serif: 'Della Respira', serif;

    --color-light-1: #FFFFFF;
    --color-light-2: #EBEBEB;
    --color-light-3: #D6D6D6;

    --color-dark-1: #474747;
    --color-dark-2: #282828;
    --color-dark-3: #000000;

    --color-brand-1: #C3FEF1;
    --color-brand-2: #33EACC;
    --color-brand-3: #0a6e97;

    --color-accent: #5D23BB;

    --color-overlay: #28282877;
    --color-error: #FF3333;
    --color-success: green;

    --gradient-primary: linear-gradient(
		135deg,
		rgba(93, 35, 187, 1) 0%,
		rgba(0, 119, 147, 1) 66%,
		rgba(99, 186, 171, 1) 100%
	);

    --gradient-radial: radial-gradient(
		circle at center,
		rgba(93, 35, 187, 1) 0%,
		rgba(0, 119, 147, 1) 66%,
		rgba(99, 186, 171, 1) 100%
	);
}
`;

export default () => {
	return (
		<NotFoundErrorBoundary>
			<GlobalStyles />
			<UserProvider>
				<Page>
					<PageErrorBoundary>
						<Router />
					</PageErrorBoundary>
				</Page>
			</UserProvider>
		</NotFoundErrorBoundary>
	);
};
