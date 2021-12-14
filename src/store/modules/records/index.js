import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      records: [

      //   id: 'r1',
      //   name: 'Room on Fire',
      //   band: 'The Strokes',
      //   year: 2003,
      //   genre: ['rock', 'indie'],
      //   description: 'Room on Fire is the second studio album by American rock band the Strokes,' +
      //     ' released on October 28, 2003, through RCA Records.' +
      //     ' Its title is drawn from a lyric in "Reptilia": "The room is on fire as she\'s fixing her hair."' +
      //     ' ... Three singles were released from the album: "12:51", "Reptilia", and "The End Has No End".',
      //   price: 8
      //
      // },
      //   {
      //     id: 'r2',
      //     name: 'In Through the Out Door',
      //     band: 'Led Zeppelin',
      //     year: 1979,
      //     genre: ['rock'],
      //     description: 'In Through the Out Door —en español: Entrando por la salida— es el octavo y último disco de estudio ' +
      //       'realizado por Led Zeppelin, y publicado por Swan Song Records el 15 de agosto de 1979.' +
      //       ' El álbum fue nombrado de tal manera por el grupo a causa de sus recientes problemas y el auge de la música punk.',
      //     price: 16.99
      //
      //   },
      //   {
      //     id: 'r4',
      //     name: 'The New Abnormal',
      //     band: 'The Strokes',
      //     year: 2020,
      //     genre: ['indie'],
      //     description: 'El Mejor disco de los Strokes AGUANTE STROKES PERRO!',
      //     price: 9.89
      //
      //   }

      ]
    };

  },
  mutations: mutations,
  actions: actions,
  getters: getters
};