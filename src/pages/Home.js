import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";

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
				"X-RapidAPI-Key": `{{api-key}}`,
				"X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
				"Cache-Control": "no-cache",
			},
		};

		if (searchedRecipe) {
			try {
				fetch(url, options)
					.then(response => {
						try {
							if (response.ok) {
								return response.json();
							} else {
								console.log(
									"Error, you might need an api key. Make sure the api key, url, and headers are valid."
								);
							}
						} catch (error) {
							console.log("May be 403 (forbidden). Did you put in api key?");
						}
					})
					.then(recipes => setRecipeResults(recipes))
					.catch(error => console.log("could not fetch data"));
			} catch (error) {
				console.log("Error: did you put in an api key?");
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

				<Search handleQuery={getRecipeQuery} />
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
										instructions: recipe.instructions,
										ingredients: recipe.ingredients,
									}}>
									<RecipeResult title={recipe.title} />
								</Link>
						  ))
						: null}
				</article>
			</section>
		</section>
	);
}
