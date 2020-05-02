import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    answerList: []
  },
  getter: {
    getAnswer(state) {
      return no => {
        return state.answerList[no];
      }
    }
  },
  mutations: {
    addAnswer(state, payload) {
      state.answerList.push(payload.answer)
    },
    setAnswer(state, payload) {
      state.answerList[payload.no] = payload.answer;
    }
  },
  actions: {
  },
  modules: {
  }
})
