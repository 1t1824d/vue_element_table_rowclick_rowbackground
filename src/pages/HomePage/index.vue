<template>
  <div class="HomePage">
    <div class="HomePageOutbox">
      <component :is="'tablecpt'" :TableData="chargeInfoList"></component>
    </div>
  </div>
</template>
<script>
import debounce from "@/utils/debounce";
import Bus from "@/utils/bus.js";
import { mapGetters } from "vuex";
import AxiosUrl from "@/config/AxiosUrl";
import { setTheme, themeList } from "@/themeConfig/setTheme.js";
import mixin from "@/pages/HomePage/mixin";
import tablecpt from "./tablecpt/index.vue";
export default {
  name: "HomePage",
  mixins: [mixin],
  components: {
    tablecpt,
  },
  computed: {
    ...mapGetters({
     
    }),
  },
  data() {
    return {
      themeList: themeList,
      setTheme: setTheme,
      chargeInfoList: [
        {
          rate: 1280,
          chargeUrl: "热狗",
          chargeMessage: "2022-05-02",
          chargeType:2,
        },
        {
          rate: 1920,
          chargeUrl: "姚中仁",
          chargeMessage: "2021-05-02",
          chargeType: 3,
        },
        {
          rate: 3200,
          chargeUrl: "哈狗帮",
          chargeMessage: "2019-05-02",
          chargeType: 0,
        },
        {
          rate: 9990,
          chargeUrl: "遥远的梦",
          chargeMessage: "2016-05-02",
          chargeType: 1,
        },
      ],
    };
  },
  mounted() {
    //this.getTimeNowStausfun()
    // this.$store.commit('HomePageModule/set_TestData', "data")
    // this.$store.dispatch('HomePageModule/TestDatafun', data)
  },
  methods: {
   
  },
};
</script>
<style lang="scss" scoped>
.HomePage {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .HomePageOutbox {
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    background: rgba(0, 0, 71, 0.825);
  }
}
</style>
