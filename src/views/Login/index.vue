<template>
  <div class="Login">
    <component :is="'LoginPage'"></component>
  </div>
</template>

<script>
import LoginPage from "@/pages/LoginPage/index";

export default {
  name: "Login",
  components: {
    LoginPage,
  },
};
</script>
<style lang="scss" scoped>
.Login {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
