export default {
  records(state) {
    return state.records;
  },
  hasRecords(state) {
    return state.records && state.records.length > 0;
  },
  isRecord(_, getters, _2, rootGetters) {
    const records = getters.records;
    const userId = rootGetters.userId;

    return records.some(record => record.id === userId);
  },
  timerUpdt(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimer = new Date().getTime();
    //this means it takes a minute to fetch again
    return (currentTimer - lastFetch) / 1000 > 60;
  }

};