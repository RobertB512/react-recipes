import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";

export default function RecipePage(props) {
	const { chosenRecipe } = useParams();
	const { state } = useLocation();
	return (
		<section className="recipe-page">
			<header>
				<Link to="/" className="back-link">
					Back
				</Link>

				<h2 className="recipe-page-heading">{chosenRecipe}</h2>
			</header>

			<div className="recipe-img-wrapper">
				<img src="" alt="" />
			</div>

			<div className="recipe-info-wrapper">
				<section className="info-container ingredients-container">
					<h3 className="recipe-info-heading">Ingredients</h3>

					<div className="ingredients-wrapper">
						<ul>
							{state.ingredients.split("|").map(ingredient => (
								<li>{ingredient}</li>
							))}
						</ul>
					</div>
				</section>

				<section className="info-container instructions-container">
					<h3 className="recipe-info-heading">Instructions</h3>

					<div className="instructions-wrapper">
						<ol>
							{state.instructions
								.split(".")
								.map(step => (step ? <li>{step}</li> : null))}
						</ol>
					</div>
				</section>
			</div>
		</section>
	);
}
