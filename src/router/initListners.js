/**
 * 
 * 
 * @param {Router} router 
 * @param  {...any} listners 
 */
import router from "@/router";
import store from '@/store'



export default function initListners(router, ...listners) {
    return router;
};