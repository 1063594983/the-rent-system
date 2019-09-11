import Vue from 'vue';
import Vuex from 'vuex'
// 使用Vuex
Vue.use(Vuex);

// 导入HouseOrder
import HouseOrder from './HouseOrder'
// 导入HouseSource
import HouseSource from './HouseSource'
// 导入User
import User from './User'

// 创建Vuex实例
const store = new Vuex.Store({
    modules: {
        HouseOrder, HouseSource, User
    }
})

// 导出store
export default store;