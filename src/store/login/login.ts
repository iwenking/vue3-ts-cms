import { Module } from 'vuex'
import { IloginSate } from './type'
import { IRootState } from '../type'
import LocalCache from '@/utils/cache'
import router from '@/router'
import { removeIconPrefix } from '@/utils/tools/index'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import { IAccount } from '@/service/login/type'
import { mapMenusToRoutes, mapMenusToPermission } from '@/utils/map-menu'

const loginModule: Module<IloginSate, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permissions: []
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
      state.userMenus = UserMenus
      //UserMenus =>routes
      const routes = mapMenusToRoutes(UserMenus)
      // console.log(routes)
      //将routes=>router.main.children
      routes.map((route) => {
        router.addRoute('main', route)
      })
      //获取用户按钮权限
      const permissions = mapMenusToPermission(UserMenus)
      state.permissions = permissions
      // console.log(permissions)
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      //1、登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      LocalCache.setCache('token', token)
      //发送初始化请求(完整的role/department)
      dispatch('getInitialDataAction', null, { root: true })
      //2、请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      LocalCache.setCache('userInfo', userInfo)
      //3、请求用户菜单
      const UserMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const UserMenus = removeIconPrefix(UserMenusResult.data)

      commit('changeUserMenus', UserMenus)
      LocalCache.setCache('UserMenus', UserMenus)
      //4、跳到首页
      router.push('/main')
    },
    loadLocalLogin({ commit, dispatch }) {
      const token = LocalCache.getCache('token')
      //发送初始化请求(完整的role/department)
      dispatch('getInitialDataAction', null, { root: true })
      const userInfo = LocalCache.getCache('userInfo')
      const UserMenus = LocalCache.getCache('UserMenus')
      if (token) {
        commit('changeToken', token)
      }
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      if (UserMenus) {
        commit('changeUserMenus', UserMenus)
      }
    }
    //手机验证码登录
    // phoneLoginAction({ commit }, payload: any) {
    //   console.log('phoneLoginAction', payload)
    // }
  },
  modules: {}
}

export default loginModule
