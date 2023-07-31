<template>
  <div class="main_content">
    <TheHeader></TheHeader>
    <MainContent></MainContent>
  </div>
</template>

<script>
import MainContent from "./components/pages/MainContent.vue";
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  components: {
    TheHeader,
    MainContent,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  padding: 3rem;
  font-family: fantasy;
}
</style>
