import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const examples = [
  {
    level: 1, operators: ['Add'], operands: [1, 1], result: 2, example: '1+1=2',
  },
  {
    level: 1, operators: ['Sub'], operands: [1, 1], result: 0, example: '1-1=0',
  },
  {
    level: 1, operators: ['Mul'], operands: [1, 1], result: 1, example: '1*1=1',
  },
  {
    level: 1, operators: ['Div'], operands: [1, 1], result: 1, example: '1/1=1',
  },
  {
    level: 1, operators: ['Pow'], operands: [1, 1], result: 1, example: '1^1=1',
  },
  {
    level: 2, operators: ['Add'], operands: [14, 7], result: 21, example: '14+7=21',
  },
  {
    level: 2, operators: ['Sub'], operands: [14, 7], result: 7, example: '14-7=7',
  },
  {
    level: 2, operators: ['Mul'], operands: [14, 7], result: 98, example: '14*7=98',
  },
  {
    level: 2, operators: ['Div'], operands: [14, 7], result: 2, example: '14/7=2',
  },
  {
    level: 2, operators: ['Pow'], operands: [14, 2], result: 196, example: '14^2=196',
  },
  {
    level: 3, operators: ['Add', 'Div'], operands: [14, 7, 7], result: 15, example: '14+7/7=15',
  },
  {
    level: 3, operators: ['Sub', 'Mul'], operands: [14, 7, 2], result: 0, example: '14-7*3=0',
  },
  {
    level: 3, operators: ['Mul', 'Add'], operands: [14, 7, 2], result: 100, example: '14*7+2=100',
  },
  {
    level: 3, operators: ['Div', 'Mul'], operands: [14, 7, 5], result: 10, example: '14/7*5=10',
  },
  {
    level: 3, operators: ['Pow', 'Div'], operands: [14, 2, 4], result: 49, example: '14^2/4=49',
  },
];

export default new Vuex.Store({
  state: {
    settings: {
      duration: 5,
      level: 5,
      operations: ['Add', 'Sub'],
    },
    examples,
  },
  getters: {
    getExamplesSelf: (state) => {
      if (state.examples) {
        return state.examples.filter((ex) => ex.level <= state.settings.level
          && ex.operators.reduce((a: boolean, v: string) => a
            && state.settings.operations.includes(v), true));
      }
      return [];
    },
  },
  actions: {
    setSettings({ commit }, newSettings) {
      commit('setSettings', newSettings);
    },
  },
  mutations: {
    setSettings(state, newSettings) {
      state.settings = newSettings;
    },
  },

  modules: {
  },
});
