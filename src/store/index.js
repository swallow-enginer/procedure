import Vue from 'vue'
import Vuex from 'vuex'
import { Qa } from '@/util/Qa'
import { Title } from '@/util/Title'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    qaList: [],
    steps: 0,
    title: "",
    titleList: []
  },
  getters: {
    titleList: (state) => (count) => {
      if (state.stepList.length != count) {
        return state.titleList;
      }
      let result = []
      for (let i in count) {
        result.push(new Title(i + 1, "タイトル", "5/6"));
      }
      state.titleList = result;
      return state.titleList;
    }
  },
  mutations: {
    addQa(state, payload) {
      let q = new Qa(payload.question, payload.description, payload.answer);
      state.qaList.push(q);
    },
    setAnswer(state, payload) {
      state.qaList[payload.no].answer = payload.answer;
    },
    setSteps(state, payload) {
      state.steps = payload.steps;
    },
    addSteps(state) {
      state.steps++;
    },
    addRegister(state, payload) {
      let q = new Qa(payload.title, payload.description, payload.answer);
      state.qaList.push(q);
    },
    setSubTitle(state, payload) {
      state.qaList[payload.no].title = payload.title;
    },
    setDescription(state, payload) {
      state.qaList[payload.no].description = payload.description;
    },
    setTitle(state, payload) {
      state.title = payload.title;
    },
  },
  actions: {
  },
  modules: {
  }
})
