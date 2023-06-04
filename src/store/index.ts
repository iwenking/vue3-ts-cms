import { createStore, Store, useStore as useVuxStore } from 'vuex'
import login from './login/login'
import system from './system/system'
import { IRootState, IStoreType } from './type'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'wangsiyuan',
      age: 18
    }
  },
  mutations: {},
  actions: {},
  modules: {
    login,
    system
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuxStore()
}

export default store
