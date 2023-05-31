import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import "./recipePage.css";

export default function RecipePage(props) {
	const { chosenRecipe } = useParams();
	const { state } = useLocation();

	const markAsComplete = e => {
		e.target.classList.toggle("complete");
	};

	return (
		<section className="recipe-page">
			<header>
				<Link to="/" className="back-link">
					Back
				</Link>

				<h2 className="recipe-page-heading">{chosenRecipe}</h2>
			</header>

			<div className="recipe-img-wrapper">
				<img className="recipe-image" src={state.image} alt="placeholder" />
			</div>

			<div className="recipe-info-container">
				<p className="cross-out-explanation">
					NOTE: tap an ingredient or direction to cross it out. Tap it again to
					undo the cross out.
				</p>
				<div className="recipe-info-wrapper">
					<section className="info-container ingredient-container">
						<h3 className="recipe-info-heading">Ingredients</h3>
						<div className="ingredients-wrapper">
							<ul>
								{state.ingredients.map((ingredient, index) => (
									<li key={index} onClick={markAsComplete}>
										{ingredient.original}
									</li>
								))}
							</ul>
						</div>
					</section>
					<section className="info-container instructions-container">
						<h3 className="recipe-info-heading">Instructions</h3>
						<div className="instructions-wrapper">
							<ol>
								{state.instructions
									.map(instruction => instruction.steps)
									.map(steps =>
										steps
											.filter(steps => steps.step)
											.map((step, index) => (
												<li key={index} onClick={markAsComplete}>
													{step.step}
												</li>
											))
									)}
							</ol>
						</div>
					</section>
				</div>
			</div>
			<footer>
				<p>
					Source: <a href={state.source}>{state.source}</a>
				</p>
			</footer>
		</section>
	);
}
