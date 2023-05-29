import React from "react";
import "./search.css";

export default function Search({handleQuery }) {
	const handleSearch = e => {
    e.preventDefault();
		handleQuery(e);
	};

	return (
		<article className="search-area">
			<form action="" onSubmit={handleSearch}>
				<div className="search-control">
					<input
						placeholder="Search for a recipe"
						className="recipe-search"
						type="search"
            name="search"
					/>
					<button className="search-btn" type="submit">
						Search
					</button>
				</div>
				<p className="search-explanation">
					A maximum of 10 recipes will be shown. If your can't find what you're
					lookin for, try a more specific search.
				</p>
			</form>
		</article>
	);
}
