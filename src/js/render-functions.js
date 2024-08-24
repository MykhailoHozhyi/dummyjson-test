import { refs } from './refs';

export function renderRecipes(recipes) {
  const markup = recipes
    .map(
      ({ name, image, cuisine, difficulty, cookTimeMinutes }) => `
        <li class="recipes-list-item">
        <img src="${image}" alt="${name}">
        <div>
          <p>${name}</p>
          <p>Cuisine: ${cuisine}</p>
          <p>Difficulty: ${difficulty}</p>
          <p>Cook Time: ${cookTimeMinutes}</p>
        </div>
      </li>`
    )
    .join('');
  refs.recipesList.insertAdjacentHTML('beforeend', markup);
}
