<template>
  <div class="Home">
    <component :is="'HomePage'"></component>
  </div>
</template>

<script>
import HomePage from "@/pages/HomePage/index";
export default {
  name: "Home",
  components: {
    HomePage,
  },
};
</script>
<style lang="scss" scoped>
.Home {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
