import { Routes } from "../types/routing";

import Home from "../modules/home/view";
import SignUp from "../modules/home/sign-up";
import Community from "../modules/community/view";
import CompleteSignUp from "../modules/home/complete-sign-up";

const routes: Routes = [
	["/", Home],
	["/sign-up", SignUp],
	["/complete-sign-up", CompleteSignUp],
	["/community/:community_id", Community],
	["/community/:community_id/card/:card_id", Community],
];

export default routes;
