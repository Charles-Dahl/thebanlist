import React, { ComponentType } from "react";
import routes from "./config/routes";

export default () => {
	const { pathname } = window.location;

	if (!pathname) {
		throw new Error("Not Found");
	}

	const route = routes.reduce<{
		params: any;
		Component: ComponentType;
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
		throw new Error("Not Found");
	}

	return <Component></Component>;
};
