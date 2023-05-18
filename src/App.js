import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import RecipePage from "./pages/RecipePage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/:recipe" Component={RecipePage} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
