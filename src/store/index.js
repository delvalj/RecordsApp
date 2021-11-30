import { createStore } from 'vuex';

import recordsModule from './modules/records/index';
import requestsModule from './modules/requests/index';

const store = createStore({
  modules: {
    records: recordsModule,
    requests: requestsModule
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