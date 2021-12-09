export default {
  registerRecord(state, payload) {
    state.records.push(payload);
  },
  setRecords(state, payload) {
    state.records = payload;
  }
};