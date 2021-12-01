export default {


  async registerRecord(context, data) {
    const userId = context.rootGetters.getUserId;
    const recordsData = {
      // id: newDate().toISOString(),
      // id: context.rootGetters.getUserId,
      // id: 'r3',
      name: data.name,
      band: data.bandName,
      year: data.yr,
      genre: data.gnr,
      description: data.desc
    };

    // HTTP REQ USING FETCH

    // const response = await fetch(`https://recordsapp-e4425-default-rtdb.firebaseio.com/records/${userId}.json`,
    //   {
    //     method: 'PUT',
    //     body: JSON.stringify(recordsData)
    //   });
    //
    // if (!response.ok) {
    //   // error
    // }

    // USING AXIOS
    const axios = require('axios').default;
    axios
      .put(`https://recordsapp-e4425-default-rtdb.firebaseio.com/records/${userId}.json`, JSON.stringify(recordsData))
      .then(response => (this.info = response))


    context.commit('registerRecord', {
      ...recordsData,
      id: userId
    });

  }
};