# Project Description

This is a simple recipe site using React. I recently started learning React so wanted to give it a shot in a project. This project  includes: useState, useEffect, and useParams. I am using the [Spoonacular API](https://spoonacular.com/food-api) to get the recipes.

This project has a search field where the user can search for recipes that will then appear below the search filed. The user can then click on a recipe and get redirected to it's page, where the the recipe's ingredients and instructions will be visible.

## How to use

You will need Node to access this site. If you do not have Node installed, go to [https://nodejs.org/en](https://nodejs.org/en) to get it installed.

This site was built with "create-react-app". After downloading this project from [github](https://github.com/RobertB512/react-recipes), in the terminal, navigate inside of the folder you downloaded and run "npm install" to install the dependencies.

To view this website and get access to the recipes, you'll also need an API key from the [Spoonacular website](https://spoonacular.com/food-api). Once there, click "START NOW", and create an account. After you're logged in, go to "Profile", click "Show/Hide API Key", and copy the API key. In a code editor open the folder you downloaded and in the file "Home.js" on line #18, or wherever you see "x-api-key", put the key inside the quotes provided, being sure to errace what's already inside the quotes (don't errace the quotes themselves). Go back to the terminal and run "npm start" and enjoy (you might have to copy the link the terminal gives you and paste it into your web broser)!
