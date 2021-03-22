import React, { ComponentType } from "react";

import { RouteProps } from "./types/routing";
import routes from "./config/routes";
import { NotFoundError } from "./library/errors/NotFoundError";

interface Route {
	params: any;
	Component: ComponentType<RouteProps>;
}

const Router = () => {
	const { pathname } = window.location;

	if (!pathname) {
		throw new NotFoundError();
	}
	const route = routes.reduce<Route | null>((result, [key, Component]) => {
		// get the segments of the route using regex
		const segments = key.match(/(([^:]+)|(:[^:\/]+)\s*)/g);

		// construct a new regex using the segments
		const newRegex = `^(${segments
			?.map(
				(item) =>
					item.includes(":")
						? `(?<${item.split(":")[1]}>[^\\/\\s]*)`
						: item.split("/").join("\\/") //escape slashes in new regex;
			)
			.join("")})$`;

		if (!newRegex) {
			return result;
		}
		const matches = pathname.match(new RegExp(newRegex));
		if (matches) {
			return { params: matches.groups, Component };
		}
		return result;
	}, null);

	const Component = route?.Component;
	if (!Component) {
		throw new NotFoundError();
	}

	return <Component routeParams={route?.params || {}}></Component>;
};

export default Router;
