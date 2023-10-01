const url = require("url")
const express = require("express")
const router = express.Router()
const needle = require("needle")

const API_KEY_VALUE = process.env.API_KEY_VALUE

router.get('/', async (req, res) => {
  try {
    const params = new URLSearchParams({
      ...url.parse(req.url, true).query
    })

    const apiResponse = await needle("get", `https://api.spoonacular.com/recipes/complexSearch?query=${params}&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&number=20&limitLicense=true`, {headers: {"x-api-key": API_KEY_VALUE,
    "cache-control": "no-store"}})
    const  jsonRecipes = await apiResponse.body
    const recipeResults = await jsonRecipes.results
    console.log(recipeResults)
    console.log(params, recipeResults)
    res.status(200).json(recipeResults)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router