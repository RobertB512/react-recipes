const express = require("express");
const cors = require("cors");
// const rateLimit = require("express-rate-limit");
const needle = require("needle");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

// const limiter = rateLimit({
// 	windowMs: 10 * 60 * 1000, // 10 minutes
// 	max: 50,
// });
// app.use(limiter);
// app.set("trust proxy", 1);

// app.use(express.static("./public"));

// app.use("/api", require("./routes"));

app.use(cors());

app.get("/recipes/:query", async (req, res) => {
	const response = await needle(
		"get",
		`https://api.spoonacular.com/recipes/complexSearch?query=${req.params.query}&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&number=20&limitLicense=true`,
		{
			headers: {
				"x-api-key": process.env.API_KEY_VALUE,
				"cache-control": "no-store",
			},
		}
	);
	const jsonRecipes = await response.body;
	// const recipeResults = await jsonRecipes.results;
	// console.log(recipeResults)
	console.log("recipe results", jsonRecipes);
	res.status(200).json(jsonRecipes);
});
// catch (error) {
//   console.log(error)
// }

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
