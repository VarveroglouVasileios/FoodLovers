import { createStore } from "vuex";
import recipeModules from "./modules/index";
const store = createStore({
  modules: {
    recipe: recipeModules,
  },
});

export default store;
