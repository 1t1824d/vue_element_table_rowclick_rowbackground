<template>
  <div class="Error">
    <Errorpage />
  </div>
</template>

<script>
import Errorpage from "@/pages/Errorpage/index";
export default {
  name: "Error",
  components: {
    Errorpage,
  },
};
</script>
<style lang="scss" scoped>
.Error {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
