import { Module } from 'vuex'
import { ISystemState } from './type'
import { IRootState } from '../type'
import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData
} from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0,
      departmentList: [],
      departmentCount: 0,
      categoryList: [],
      categoryCount: 0,
      storyList: [],
      storyCount: 0
    }
  },
  mutations: {
    changeUsersList(state, userList: any[]) {
      state.usersList = userList
    },
    changeUsersCount(state, userCount: number) {
      state.usersCount = userCount
    },
    changeRoleList(state, list: any[]) {
      state.roleList = list
    },
    changeRoleCount(state, count: number) {
      state.roleCount = count
    },
    changeGoodsList(state, list: any[]) {
      state.goodsList = list
    },
    changeGoodsCount(state, count: number) {
      state.goodsCount = count
    },
    changeMenuList(state, list: any[]) {
      state.menuList = list
    },
    changeMenuCount(state, count: number) {
      state.menuCount = count
    },
    changeDepartmentList(state, list: any[]) {
      state.departmentList = list
    },
    changeDepartmentCount(state, count: number) {
      state.departmentCount = count
    },
    changeCategoryList(state, list: any[]) {
      state.categoryList = list
    },
    changeCategoryCount(state, count: number) {
      state.categoryCount = count
    },
    changeStoryList(state, list: any[]) {
      state.storyList = list
    },
    changeStoryCount(state, count: number) {
      state.storyCount = count
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    async getPageListAction({ commit }, paylod: any) {
      //1、获取pagrUrl
      const pageName: any = paylod.pageName
      let pageUrl = `/${pageName}/list`

      //2、对页面发送请求
      const pageResult = await getPageListData(pageUrl, paylod.queryinfo)
      //3、数据储存到state中
      const { list, totalCount } = pageResult.data

      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
    },
    async deletePageDataAction({ dispatch }, paylod: any) {
      const { pageName, id } = paylod
      const pageUrl = `/${pageName}/${id}`
      await deletePageData(pageUrl)
      dispatch('getPageListAction', {
        pageName,
        queryinfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async createPageDataAction({ dispatch }, paylod: any) {
      //1、创建数据的请求
      const { pageName, newData } = paylod
      const pageUrl = `/${pageName}`
      await createPageData(pageUrl, newData)
      //2、请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        queryinfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editPageDataAction({ dispatch }, paylod: any) {
      //1、编辑数据的请求
      const { pageName, editData, id } = paylod
      const pageUrl = `/${pageName}/${id}`

      await editPageData(pageUrl, editData)
      //2、请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        queryinfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModule
