export default {
  async registerRecord(context, data) {
    const userId = context.rootGetters.getUserId;
    const recordsData = {

      name: data.name,
      band: data.bandName,
      year: data.yr,
      genre: data.gnr,
      description: data.desc
    };

    const token = context.rootGetters.token;

    // USING AXIOS
    const axios = require('axios').default;

    // POST REQUEST

    axios.post(`https://recordsapp-e4425-default-rtdb.firebaseio.com/records/${userId}.json?auth=` + token, JSON.stringify(recordsData))
      .then(response => (this.info = response));

    context.commit('registerRecord', {
      ...recordsData,
      id: userId
    });


    //   // PUT REQUEST
    //   axios
    //     .put(`https://recordsapp-e4425-default-rtdb.firebaseio.com/records/${userId}.json?auth=` + token, JSON.stringify(recordsData))
    //     .then(response => (this.info = response));
    //
    //   context.commit('registerRecord', {
    //     ...recordsData,
    //     id: userId
    //   });

  },


  async loadRecords(context, payload) {

    const userId = context.rootGetters.getUserId;

    if (!payload.forceRefresh && !context.getters.timerUpdt) {
      return;
    }
    const axios = require('axios').default;

    const response = await axios.get(`https://recordsapp-e4425-default-rtdb.firebaseio.com/records/${userId}.json`
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
    context.commit('setTimer');

  }

};
