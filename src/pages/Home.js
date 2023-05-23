import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Search from "../components/Search";
import RecipeResult from "../components/RecipeResult";

export default function Home() {
	const [searchedRecipe, setSearchedRecipe] = useState("");
	const [recipeResults, setRecipeResults] = useState([]);

	useEffect(() => {
		const url = `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${searchedRecipe}`;

		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": `{{put api-key here}}`,
				"X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
				"Cache-Control": "no-cache",
			},
		};

		if (searchedRecipe) {
			fetch(url, options)
				.then(response => {
					if (response.ok) {
						return response.json();
					}
				})
				.then(recipes => setRecipeResults(recipes))
				.catch(error => console.log(error));
		}
	}, [searchedRecipe]);

	const getRecipeQuery = e => {
		setSearchedRecipe(e.target.value);
	};

	return (
		<section>
			<header>
				<h1>Recipes for You</h1>

				<Search value={searchedRecipe} handleQuery={getRecipeQuery} />
			</header>

			<section className="results-container">
				<h2 className="results-heading">
					{recipeResults.length > 0 ? recipeResults.length : "no"} results
				</h2>
				<article className="results-wrapper">
					{recipeResults.map((recipe, index) => (
						<Link
							key={index}
							to={recipe.title}
							state={{
								instructions: recipe.instructions,
								ingredients: recipe.ingredients,
							}}>
							<RecipeResult title={recipe.title} />
						</Link>
					))}
				</article>
			</section>
		</section>
	);
}
