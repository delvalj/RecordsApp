import actions from '@/store/modules/auth/actions';
import mutations from '@/store/modules/auth/mutations';
import getters from '@/store/modules/auth/getters';

export default {
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null,
      registered: null
    };
  },

  actions: actions,
  mutations: mutations,
  getters:getters
};



