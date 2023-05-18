import React from "react";
import { Link } from "react-router-dom";

import Search from "../components/Search";
import RecipeResult from "../components/RecipeResult";

export default function Home() {
	return (
		<section>
			<header>
				<h1>Recipes for You</h1>
			</header>

			<Search />

			<section className="results-container">
				<h2 className="results-heading">Results</h2>
				<article className="results-wrapper">
					<Link to="">
						<RecipeResult />
					</Link>
				</article>
			</section>
		</section>
	);
}
