import { Module } from 'vuex'

import {
  getAmountList,
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSale,
  getAddresGoodsSale
} from '@/service/main/analysis/dashboard'
import { IDashboardState } from './type'
import { IRootState } from '../type'

const dashboardMoudle: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      topPanelDatas: [],
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addresGoodsSale: []
    }
  },
  mutations: {
    changeTopPanelDatas(state, list) {
      state.topPanelDatas = list
    },
    changeCategoryCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeAddresGoodsSale(state, list) {
      state.addresGoodsSale = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const resultTopPanelDatas = await getAmountList()
      commit('changeTopPanelDatas', resultTopPanelDatas.data)

      const categoryCountResult = await getCategoryGoodsCount()
      commit('changeCategoryCount', categoryCountResult.data)

      const categoryGoodsSaleResult = await getCategoryGoodsSale()
      commit('changeCategoryGoodsSale', categoryGoodsSaleResult.data)

      const categoryGoodsFavorResult = await getCategoryGoodsFavor()
      commit('changeCategoryGoodsFavor', categoryGoodsFavorResult.data)

      const addresGoodsSaleResult = await getAddresGoodsSale()
      commit('changeAddresGoodsSale', addresGoodsSaleResult.data)
    }
  }
}
export default dashboardMoudle
