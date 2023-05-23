import React from "react";
import {Link, useParams} from "react-router-dom";


export default function RecipePage() {
  const {chosenRecipe} = useParams()
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
						<ul></ul>
					</div>
				</section>

				<section className="info-container instructions-container">
					<h3 className="recipe-info-heading">Instructions</h3>

					<div className="instructions-wrapper">
						<ol></ol>
					</div>
				</section>
			</div>
		</section>
	);
}
