export default {
  records(state) {
    return state.records;
  },
  hasRecords(state) {
    return state.records && state.records.length > 0;
  }
};