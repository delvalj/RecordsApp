import { createStore } from 'vuex';

import recordsModule from './modules/records/index';

const store = createStore({
  modules: {
    records: recordsModule
  },
  state() {
    return {
      userId: 'r3'
    };
  },
  getters: {
    getUserId(state) {
      return state.userId;
    }
  }
});

export default store;