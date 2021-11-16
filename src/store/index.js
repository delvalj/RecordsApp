import {createStore} from 'vuex';

import recordsModule from './modules/records/index'

const store = createStore({
modules: {
  records: recordsModule
}
});

export default store;