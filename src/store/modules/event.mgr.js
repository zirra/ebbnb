import { api } from '@/utils/api'
// import { storage } from '@/utils/storage'

const state = {
  events: null
}

const mutations = {
  setEvents (state, evts) {
    state.events = evts
  }
}

const actions = {
  actGetEvents: ({commit}, query) => {
    api.getRaw(`/v1/eb/events/${query}`)
    .then(response => {
      commit('setEvents', response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }
}

const getters = {
  events: state => state.events
}

export default {
  state,
  actions,
  mutations,
  getters
}
