/**
 * 
 * @param {VueX.Store} store 
 */
import router from "@/router";
import store from '@/store'



export default function() {
    return (to, _, next) => {
        console.log("beforeEach")

    };
};