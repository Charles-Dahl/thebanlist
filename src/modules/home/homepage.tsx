import React from "react";

import Link from "../../components/link";
import { sitename } from "../../config/content";

const Homepage = () => {
	return (
		<div>
			<section>
				<h1>Welcome to {sitename}!</h1>
				<p>
					{sitename} is a place where communities of like-minded
					people can manage personalised banlists for their favorite
					formats.
				</p>
				<h2>Get started:</h2>
				<Link href="/community">Browse public communities</Link>
				<p>or</p>
				<Link href="/register">Sign up to create your own</Link>
			</section>
			<section>
				<h1>How to use:</h1>
				<ol>
					<li>Create or join a Community</li>
					<li>Search for cards for the community to vote on</li>
					<li>Vote for cards you would like to be banned</li>
				</ol>
			</section>
		</div>
	);
};

export default Homepage;
