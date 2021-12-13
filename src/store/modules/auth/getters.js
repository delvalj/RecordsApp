export default {
  getUserId(state) {
    return state.userId;
  },
  // para utilizar el token en partes de la pagina donde sea necesario debido a las reglas del backend (estar logeado etc) , creo este getter
  // para que pueda llamar al token desde cualquier otro module de vuex.
  token(state) {
    return state.token;
  },
  isAuth(state) {
    return !!state.token;
  },
  didAutoLogout(state) {
    return state.didAutoLogout;
  }
};


