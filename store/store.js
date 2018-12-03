import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      name: '',
      email: ''
    })
  })
}

export default createStore
