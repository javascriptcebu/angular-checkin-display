import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseMutations, firebaseAction } from 'vuexfire'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    attendees: []
  },

  mutations: {
    ...firebaseMutations,
  },

  actions: {
    bindRef: firebaseAction(({ bindFirebaseRef }, { name, ref }) => {
      bindFirebaseRef(name, ref)
    }),

    init: firebaseAction(({ bindFirebaseRef }) => {
      bindFirebaseRef('attendees', firestore.collection('attendees'))
    }),
  }
})
