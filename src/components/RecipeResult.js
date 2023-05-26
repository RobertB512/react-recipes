import React from "react";
import "./recipeResult.css";
import recipeImage from "../assets/placeholderImg.png";

export default function RecipeResult({title}) {
	return (
		<div className="recipe-result">
			<img className="result-img" src={recipeImage} alt="placeholder cupcake" />
			<div className="heading-wrapper">
				<h2 className="result-heading">{title}</h2>
			</div>
		</div>
	);
}
