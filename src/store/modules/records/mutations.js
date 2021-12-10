export default {
  registerRecord(state, payload) {
    state.records.push(payload);
  },
  setRecords(state, payload) {
    state.records = payload;
  },
  setTimer(state){
    state.lastFetch = new Date().getTime();
  }
};