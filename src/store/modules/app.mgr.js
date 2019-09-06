// import { api } from '@/utils/api'
// import { storage } from '@/utils/storage'
const moment = require ('moment')

const state = {
  isAnonymous: true,
  today: moment().format('MMMM DD YYYY hh:mm'),
  city: 'austin'
}

const mutations = {
  setCity (state, val) {
    state.city = val
  }
}

const actions = {

}

const getters = {
  isAnonymous: state => state.isAnonymous,
  today: state => state.today,
  city: state => state.city
}

export default {
  state,
  actions,
  mutations,
  getters
}
