import { Module } from 'vuex'
import { IloginSate } from './type'
import { IRootState } from '../type'
import LocalCache from '@/utils/cache'
import router from '@/router'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import { IAccount } from '@/service/login/type'

const loginModule: Module<IloginSate, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      UserMenus: []
    }
  },
  mutations: {
    changeToken(state, token) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, UserMenus) {
      state.UserMenus = UserMenus
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      //   //1、登录逻辑
      //   const loginResult = await accountLoginRequest(payload)
      //   const { id, token } = loginResult.data
      //   commit('changeToken', token)
      //   LocalCache.setCache('token', token)
      //   //2、请求用户信息
      //   const userInfoResult = await requestUserInfoById(id)
      //   const userInfo = userInfoResult.data
      //   commit('changeUserInfo', userInfo)
      //   LocalCache.setCache('userInfo', userInfo)
      //   //3、请求用户菜单
      //   const UserMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      //   const UserMenus = UserMenusResult.data
      //   commit('changeUserMenus', UserMenus)
      //   LocalCache.setCache('UserMenus', UserMenus)
      //4、跳到首页
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = LocalCache.getCache('token')
      const userInfo = LocalCache.getCache('userInfo')
      const UserMenus = LocalCache.getCache('UserMenus')
      if (token) {
        commit('changeToken', token)
      }
      if (userInfo) {
        commit('changeToken', userInfo)
      }
      if (UserMenus) {
        commit('changeToken', UserMenus)
      }
    }
    // phoneLoginAction({ commit }, payload: any) {
    //   console.log('phoneLoginAction', payload)
    // }
  },
  modules: {}
}

export default loginModule
