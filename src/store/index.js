import Vue from 'vue';
import Vuex from 'vuex';
import global from './global/index';
import userinfo from './userinfo/index';
Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		global,
		user: userinfo
	}
});
