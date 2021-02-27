import React, { ComponentType } from "react";

import { RouteProps } from "./types/routing";
import routes from "./config/routes";
import { NotFoundError } from "./library/errors/NotFoundError";

export default () => {
	const { pathname } = window.location;

	if (!pathname) {
		throw new NotFoundError();
	}
	const route = routes.reduce<{
		params: any;
		Component: ComponentType<RouteProps>;
	} | null>((result, [key, Component]) => {
		const routeRegex = key.match(/(([^:]+)|(:[^:\/]+)\s*)/g);
		const newRegex = `^(${routeRegex
			?.map((item) =>
				item.includes(":")
					? `(?<${item.split(":")[1]}>[^\/\\s]*)`
					: item
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
	console.log(route);

	const Component = route?.Component;
	if (!Component) {
		throw new NotFoundError();
	}

	return <Component routeParams={route?.params || {}}></Component>;
};
