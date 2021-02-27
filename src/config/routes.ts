import { Routes } from "../types/routing";

import Home from "../modules/home/view";
import Register from "../modules/home/register";
import SignIn from "../modules/home/sign-in";
import Community from "../modules/community/view";
import AcceptInvite from "../modules/home/accept-invite";
import CompleteSignUp from "../modules/home/complete-sign-up";

const routes: Routes = [
	["/", Home],
	["/sign-in", SignIn],
	["/register", Register],
	["/complete-sign-up", CompleteSignUp],
	["/accept-invite", AcceptInvite],
	["/community/:community_id", Community],
];

export default routes;
