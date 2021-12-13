import { createStore } from 'vuex';

import recordsModule from './modules/records/index';
import requestsModule from './modules/requests/index';
import authModule from './modules/auth/index';

const store = createStore({
  modules: {
    records: recordsModule,
    requests: requestsModule,
    auth: authModule
  },


});

export default store;