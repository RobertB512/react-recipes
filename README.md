# Project Description

This is a simple recipe site using React. I recently started learning React so wanted to give it a shot in a project. This project  includes: useState, useEffect, and useParams. I am using the "Spoonacular" API to get the recipes.

The project contains a search field where the user can search for recipes that appear below the search filed. The user can then click on a recipe and get redirected to it's page, where the the recipe's ingredients and instructions will be visible.

## How to use

This site ues React with "create-react-app". After downloading this project from github, in the terminal, run "npm install" to install the dependencies.

To access this website and get access to the recipes, you'll need an API key from the Spoonacular website: [https://spoonacular.com/food-api](https://spoonacular.com/food-api). Once there, click "START NOW". and create an account. Once you're logged in, go to "Profile", click on "Show/Hide API Key", and copy the API key. In the file "Home.js" on line #18, or where ever you see "x-api-key", put the key in the quotes provided, being sure to errace what's in the quotes. Now, run using "npm start" and enjoy!
