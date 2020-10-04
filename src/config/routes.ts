import { Routes } from "../types/routing";

import Home from "../modules/home/view";
import Community from "../modules/community/view";

const routes: Routes = [
	["/", Home],
	["/community/:community_id", Community],
	["/community/:community_id/card/:card_id", Community],
];

export default routes;
