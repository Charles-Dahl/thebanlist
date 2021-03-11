import { Routes } from "../types/routing";

import ViewCommunities from "../modules/home/view-communities";
import RegisterUser from "../modules/home/register-user";
import SignIn from "../modules/home/sign-in";
import AcceptInvite from "../modules/home/accept-invite";
import CompleteSignUp from "../modules/home/complete-sign-up";
import CommunityResolver from "../modules/community/community-resolver";

const routes: Routes = [
	["/", ViewCommunities],
	["/sign-in", SignIn],
	["/register", RegisterUser],
	["/complete-sign-up", CompleteSignUp],
	["/accept-invite", AcceptInvite],
	["/community/:community_id", CommunityResolver],
];

export default routes;
