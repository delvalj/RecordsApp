export default {
  records(state) {
    return state.records;
  },
  hasRecords(state) {
    return state.records && state.records.length > 0;
  },
  isRecord(_, getters, _2, rootGetters ) {
    const records = getters.records;
    const userId = rootGetters.userId;

    return records.some(record => record.id === userId);

  }
};