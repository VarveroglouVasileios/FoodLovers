export default {
  loadRecipes(state, payload) {
    state.recipes = payload;
  },
  loadRecipe(state, payload) {
    state.selectedRecipe = payload;
  },
};
