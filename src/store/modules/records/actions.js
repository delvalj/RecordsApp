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
      .then(response => (this.info = response));


    context.commit('registerRecord', {
      ...recordsData,
      id: userId
    });
  },

  // ARREGLAR ACA ESTO
  async loadRecords(context) {
    const axios = require('axios').default;

    const response = await axios.get(`https://recordsapp-e4425-default-rtdb.firebaseio.com/records.json`
    );
    const responseData = await response.data;

    console.log(responseData, 'soy la response data BRO');

    if (!response) {
      throw new Error(responseData.message || 'Failed To Fetch');
    }

    const records = [];

    for (const key in responseData) {
      const record = {
        id: key,
        name: responseData[key].name,
        band: responseData[key].band,
        year: responseData[key].year,
        genre: responseData[key].genre,
        description: responseData[key].description
      };

      records.push(record);
    }

    context.commit('setRecords', records);

  }

};
