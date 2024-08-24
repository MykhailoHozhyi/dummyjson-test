import { getAllRecipes, getRecipeById } from './js/dummy-api';
import { renderRecipes } from './js/render-functions';

getAllRecipes().then(({recipes})=>{renderRecipes(recipes)});
// getRecipeById(1);
