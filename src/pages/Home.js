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
				"X-RapidAPI-Key": `{{put your api-key here}}`,
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
              }
            } catch (error){
              console.log("May be 403 (forbidden). Did you put in api key?")
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
					{recipeResults && recipeResults.length > 0
						? recipeResults.length
						: "no"}{" "}
					results
				</h2>
				<article className="results-wrapper">
					{recipeResults
						? recipeResults.map((recipe, index) => (
								<Link
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
