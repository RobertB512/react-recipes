import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";

import Search from "../components/Search";
import RecipeResult from "../components/RecipeResult";

export default function Home() {
	const [searchedRecipe, setSearchedRecipe] = useState("");
	const [recipeResults, setRecipeResults] = useState([]);
  // const [query, setQuery] = useState("hamburger")

	const numberOfResults = 20;

	useEffect(() => {
		const url = `http://localhost:5000/recipes/${searchedRecipe}`;

		// const options = {
		// 	method: "GET",
		// 	headers: {
		// 		"x-api-key": `{{api-key goes here}}`,
		//     "cache-control": "no-store"
		// 	},
		// };

		if (searchedRecipe) {
			try {
				fetch(url, {headers: {"cache-control": "no-store"}})
					.then(response => response.json())
					.then(data => setRecipeResults(data.results));
			} catch (error) {
				console.log(error);
			}
		}
	}, [searchedRecipe]);

	const getRecipeQuery = e => {
		setSearchedRecipe(e.target.search.value);
	};

	return (
		<section>
			<header>
				<h1>Recipes for You</h1>

				<Search
					handleQuery={getRecipeQuery}
					numberOfResults={numberOfResults}
				/>
			</header>

			<section className="results-container">
				<h2 className="results-heading">
					{searchedRecipe === ""
						? null
						: recipeResults && recipeResults.length > 0
						? `${recipeResults.length} results`
						: recipeResults.length <= 0
						? `no results`
						: null}
				</h2>
				<article className="results-wrapper">
					{recipeResults && searchedRecipe !== ""
						? recipeResults.map((recipe, index) => (
								<Link
									className="result-link"
									key={index}
									to={recipe.title}
									state={{
										instructions: recipe.analyzedInstructions,
										ingredients: recipe.extendedIngredients,
										image: recipe.image,
										source: recipe.sourceUrl,
									}}>
									<RecipeResult title={recipe.title} image={recipe.image} />
								</Link>
						  ))
						: null}
				</article>
			</section>
		</section>
	);
}
