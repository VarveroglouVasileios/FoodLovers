<template>
  <div class="details" v-if="selectedRecipe">
    <h2 class="details__title">{{ selectedRecipe.title }}</h2>
    <img
      :src="selectedRecipe.image_url"
      class="details__img"
      alt="recipe image"
    />
    <ul class="details__list">
      <li
        v-for="(ingredient, index) in selectedRecipe.ingredients"
        :key="index"
      >
        {{ ingredient.quantity }}
        {{ ingredient.description }}
      </li>
    </ul>
  </div>
</template>

<style>
.details {
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.details__list {
  align-self: center;
}
.details__title {
  align-self: center;
}
.details__img {
  height: 15rem;
  align-self: center;
}
</style>

<script>
export default {
  computed: {
    selectedRecipe() {
      return this.$store.getters["recipe/getRecipe"];
    },
  },
};
</script>
