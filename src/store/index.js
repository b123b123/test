import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const wd = 'www'
export default new Vuex.Store({
  state: {
	  q:'1',
	  w:2
  },
  mutations: {
	  [wd] (state,data){
		  console.log(state);
		  console.log(data);
	  },
	  test(state){
		console.log(state);
	  }
  },
  actions: {
  },
  modules: {
  }
})
