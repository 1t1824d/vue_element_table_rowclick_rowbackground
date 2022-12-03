import debounce from "@/utils/debounce";
import Bus from "@/utils/bus.js";
import {
    mapGetters
} from "vuex";
import AxiosUrl from "@/config/AxiosUrl";
const mixin = {
    filters: {
        formatLongText(value) {
            if (value === undefined || value === null || value === "") {
                return "暂无";
            } else if (value.length > 8) {
                return value.substr(0, 8) + "...";
            } else {
                return value;
            }
        },

        ellipsis(value, limit) {
            if (!value) return "";
            if (value.length > limit) {
                return value.slice(0, limit) + "...";
            }
            return value;
        },
    },
    data() {
        return {
            publicPath: process.env.BASE_URL,
        }
    },
    computed: {
        ...mapGetters({
            GetTestData: "HomePageModule/GetTestData",
        }),
    },
    created() {},
    mounted() {},
    methods: {
        //初始化、定时1分钟刷新数据
        getTimeNowStausfun() {
            if (this.NowStaustimerH) {
                window.clearInterval(this.NowStaustimerH);
                this.NowStaustimerH = null;
            }
            this.GetData();

            this.NowStaustimerH = setInterval(() => {


            }, 60000);
            this.$once("hook:beforeDestroy", () => {
                console.log("清除定时器NowStaustimerH");
                window.clearInterval(this.NowStaustimerH);
                this.NowStaustimerH = null;
            });
        },

        GetData() {
            this.$axios
                .post(AxiosUrl.HomePageUrlPath + "GetPredictData")
                .then((res) => {
                    console.log("res", res);
                });
        },


    },
}
export default mixin