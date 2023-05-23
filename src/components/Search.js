import React from "react";

export default function Search({value, handleQuery}) {
	const handleSearch = (e) => {
		handleQuery(e);
	};

	return (
		<article className="search-area">
			<form action="">
				<input className="recipe-search" type="search" value={value} onChange={handleSearch} />
				{/* <button className="search-btn" type="submit">
					Search
				</button> */}
			</form>
		</article>
	);
}