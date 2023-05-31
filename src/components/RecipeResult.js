import React from "react";
import "./recipeResult.css";

export default function RecipeResult({title, image}) {
	return (
		<div className="recipe-result">
			<img className="result-img" src={image} alt={title} />
			<div className="heading-wrapper">
				<h2 className="result-heading">{title}</h2>
			</div>
		</div>
	);
}
