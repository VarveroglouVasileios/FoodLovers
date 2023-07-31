<template>
  <header class="header">
    <div>
      <input
        @input="enteredSearch"
        type="search"
        name="search"
        placeholder="Search for recipes"
        v-model.trim="searchVal"
      />
    </div>
    <div>
      <h2 class="header__title">
        {{ title }}
      </h2>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "FoodLovers",
      searchVal: "",
    };
  },
  methods: {
    enteredSearch() {
      this.$store.dispatch("recipe/loadData", this.searchVal);
    },
  },
};
</script>

<style scoped>
.header {
  background-color: rgba(157, 60, 247, 0.942);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 0;
}

.header__title {
  font-size: 2rem;
  /* text-transform: uppercase; */
  color: white;
}

input[type="search"] {
  /* border: none; */
  background: none;
  color: white;
  border: 0.2rem solid white;
  padding: 0.8rem 1.2rem;
  outline: none;
}

input[type="search"]::placeholder {
  color: white;
}

input[type="search"]::-webkit-search-cancel-button {
  cursor: pointer;
}
</style>
