import React from "react";
import "./search.css"


export default function Search({value, handleQuery}) {
	const handleSearch = (e) => {
		handleQuery(e);
	};

	return (
		<article className="search-area">
			<form action="">
				<div className="search-control">
          <input placeholder="Search for a recipe" className="recipe-search" type="search" value={value} onChange={handleSearch} />
          {/* <button className="search-btn" type="submit">
            Search
          </button> */}
        </div>
        <p className="search-explanation">A maximum of 10 recipes will be shown. If your can't find what you're lookin for, try a more specific search.</p>

			</form>
		</article>
	);
}
