import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    alerts: [
      { id: 1, status: "prealert", title: "Alerte 1", user: 1, beginingDate: "", endingDate: "" },
      { id: 2, status: "alert", title: "Alerte 2", user: 1, beginingDate: "", endingDate: "" },
      { id: 3, status: "closed", title: "Alerte 3", user: 1, beginingDate: "", endingDate: "" },
      { id: 4, status: "closed", title: "Alerte 4", user: 1, beginingDate: "", endingDate: "" },
      { id: 5, status: "closed", title: "Alerte 5", user: 1, beginingDate: "", endingDate: "" },
    ],
    users: [
      { id: 5, name: "David", response: true, lastname: "DeSousa", mail: "desousamail@valide.fr", fonction: "dev", administrateur: false, password: "coucou" },
      { id: 1, name: "Johan", response: true, lastname: "Charpentier", mail: "Charpentiermail@valide.fr", fonction: "dev", administrateur: false, password: "coucou" },
      { id: 2, name: "Eve", response: true, lastname: "Andre-Brenner", mail: "mail@valide.fr", fonction: "dev", administrateur: false, password: "coucou" },
      { id: 3, name: "Flan", response: false, lastname: "By", mail: "mail@valide.fr", fonction: "dev", administrateur: false, password: "coucou" },
      { id: 4, name: "Bidule", response: false, lastname: "Zouh", mail: "mail@valide.fr", fonction: "dev", administrateur: false, password: "coucou" },
      { id: 6, name: "admin", response: false, lastname: "Zouh", mail: "mail@valide.fr", fonction: "dev", administrateur: true, password: "admin" },
    ],
    isConnected: false,

  },
  mutations: {
    ADD_ALERT(state, alert) {
      state.alerts.push(alert);
    },

    IMPORT_ALERTS(state, alerts) {
      state.alerts = alerts;
    },

    UPDATE_IS_CONNECTED(state, isConnected) {
      // mutate state
      state.isConnected = isConnected;
    }
  },
  actions: {
    loadalerts ({ commit }) {

      axios
          .get('http://localhost:8000/alert/', {
              headers: {
                //  'Ocp-Apim-Subscription-Key': 'your key',
              }
          })
          .then(response => response.data)
          .then(items => {
              console.log(items);
          commit('IMPORT_ALERTS', items)
      })
  }
  },
  modules: {
  }
})
