import { ComponentType } from "react";

interface RouteProps {
	routeParams: any;
}

type Route = [string, ComponentType<RouteProps>];

type Routes = Array<Route>;

export const Routes;

export const Param;

export const RouteProps;
