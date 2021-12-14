export default {
  async contactStore(context, payload) {
    const newRequest = {
      // recordId: payload.recordId,
      userEmail: payload.email,
      message: payload.message
    };

    const response = await fetch(`https://recordsapp-e4425-default-rtdb.firebaseio.com/requests/${payload.recordId}.json`, {
      method: 'POST',
      body: JSON.stringify(newRequest)
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to Send Request');
      throw error;
    }

    console.log(responseData, 'response data');

    newRequest.id = responseData.name;
    newRequest.recordId = payload.recordId;

    context.commit('addRequest', newRequest);
  },


  async fetchReq(context) {
    const token = context.rootGetters.token;

    const response = await fetch(`https://recordsapp-e4425-default-rtdb.firebaseio.com/requests.json?auth=` + token);
    // const response = await fetch(`https://recordsapp-e4425-default-rtdb.firebaseio.com/requests.json`);

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || 'Failed to fetch requests');
    }

    const requests = [];

    for (const record in responseData) {
      for (const request in responseData[record]) {

        console.log(responseData[record][request]);

        const newRequest = {
          id: `${record}-${request}`,
          recordId: record,
          userEmail: responseData[record][request].userEmail,
          message: responseData[record][request].message
        };
        requests.push(newRequest);
      }

      context.commit('setRequests', requests);
    }

  }
};