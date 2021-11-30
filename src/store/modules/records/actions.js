export default {
  registerRecord(context, data) {
    const recordsData = {
      // id: newDate().toISOString(),
      // id: context.rootGetters.userId,
      id: 'r3',
      name: data.name,
      band: data.bandName,
      year: data.yr,
      genre: data.gnr,
      description: data.desc
    };

    context.commit('registerRecord', recordsData);

  }
};