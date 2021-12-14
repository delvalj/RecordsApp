export default {
  // unused arguments _ , _2 , etc
  requests(state){
    // const recordId = rootGetters.getUserId;
    console.log(state.requests);
    return state.requests;
  },
  hasRequests(_, getters) {
    return getters.requests && getters.requests.length > 0;
  }
}