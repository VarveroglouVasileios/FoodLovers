<template>
  <div class="main_content">
    <div class="items">
      <base-card
        class="item__list"
        v-for="recipe in paginatedRecipes"
        :key="recipe.id"
        @click="selectRecipe(recipe.id)"
      >
        <h2>{{ recipe.title }}</h2>
      </base-card>
      <div class="pagination">
        <button
          class="pagination__pre"
          @click="prevPage"
          :disabled="currentPage === 1"
        >
          Previous
        </button>
        <button
          class="pagination__next"
          @click="nextPage"
          :disabled="currentPage === totalPages"
        >
          Next
        </button>
      </div>
    </div>
    <div class="recipe_details">
      <recipeDetails></recipeDetails>
    </div>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}
.pagination__pre,
.pagination__next {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.recipe_details {
  align-self: flex-start;
}
.main_content {
  align-items: center;
  justify-content: center;
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.items {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 0;
}
</style>

<script>
import recipeDetails from "./recipeDetails.vue";
export default {
  components: { recipeDetails },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 10,
      recipe: "",
    };
  },
  computed: {
    recipes() {
      return this.$store.getters["recipe/getRecipes"];
    },
    totalPages() {
      return Math.ceil(this.recipes.length / this.itemsPerPage);
    },
    paginatedRecipes() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.recipes.slice(start, end);
    },
  },
  methods: {
    selectRecipe(id) {
      this.$store.dispatch("recipe/loadRecipe", id);
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage += 1;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage -= 1;
    },
  },
  async created() {
    await this.$store.dispatch("recipe/loadData");
  },
};
</script>
