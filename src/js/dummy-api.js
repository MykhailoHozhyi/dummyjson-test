import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com/recipes';

export async function getAllRecipes() {
  const { data } = await axios();
  console.log(data);
  return data;
}

export async function getRecipeById(id) {
  const { data } = await axios(`/${id}`);
  console.log(data);
  return data;
}
