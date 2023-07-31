import axios from "axios";

export default {
  async loadData(context, searchQuery) {
    try {
      const response = await axios.get(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchQuery}&key=379a9911-c821-4933-80cc-74cde3e8dcc0`
      );
      const data = response.data.data.recipes;
      console.log(data);
      context.commit("loadRecipes", data);
    } catch (err) {
      console.error(err);
    }
  },
  async loadRecipe(context, idResult) {
    try {
      const id = idResult; // ID of the "Cauliflower Pizza Crust (with BBQ Chicken Pizza)" recipe
      const response = await axios.get(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const recipe = response.data.data.recipe;
      console.log("Title: ", recipe);
      // console.log("Ingredients: ", recipe.ingredients);
      context.commit("loadRecipe", recipe);
    } catch (err) {
      console.error(err);
    }
  },
};
