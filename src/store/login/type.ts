export interface IloginSate {
  token: string
  userInfo: any
  userMenus: any
}

export interface IloginResult {
  id: number
  name: string
  token: string
}

export interface IDataType<T = any> {
  code: number
  data: T
}
