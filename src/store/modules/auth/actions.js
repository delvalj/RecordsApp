export default {
  async signup(context, payload) {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC-_TJlxKNQ7g0qljjxhqhMUVaFqblYe-s',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
      });

    const responseData = await response.json();

    if (!response.ok) {
      console.log(responseData, 'soy la response data de las actions del modulo auth');
      const error = new Error(responseData.message || 'Failed to Auth');
      throw error;
    }
    console.log(responseData);

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,

    })
  },

  async login(context, payload) {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC-_TJlxKNQ7g0qljjxhqhMUVaFqblYe-s',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
      });

    const responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      const error = new Error(responseData.message || 'Failed to Auth');
      throw error;
    }
    console.log(responseData);

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,


    })
  },
}