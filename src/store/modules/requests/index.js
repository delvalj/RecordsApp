import actions from '@/store/modules/requests/actions';
import getters from '@/store/modules/requests/getters';
import mutations from '@/store/modules/requests/mutations';

export default {
  namespaced: true,
  state() {
    return {
      requests: []
    };

  },
  mutations: mutations,
  actions: actions,
  getters: getters
};

