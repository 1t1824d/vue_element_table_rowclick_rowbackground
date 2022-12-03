// 引入mockjs
const Mock = require("mockjs");

import GetPredictData from './data/GetPredictData.json'



// Mock.mock( url, post/get , 返回的数据)；

Mock.mock("/api/GetPredictData", "post", GetPredictData);