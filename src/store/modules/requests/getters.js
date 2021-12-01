export default {
  // unused arguments _ , _2 , etc
  requests(state, _, _2, rootGetters){
    const recordId = rootGetters.getUserId;
    console.log(state.requests);
    return state.requests.filter(req => req.recordId === recordId);
  },
  hasRequests(_, getters) {
    return getters.requests && getters.requests.length > 0;
  }
}