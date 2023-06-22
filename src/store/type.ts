import { IloginSate } from './login/type'
import { ISystemState } from './system/type'
import { IDashboardState } from './analysis/type'
export interface IRootState {
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}
export interface IRootWithModule {
  login: IloginSate
  system: ISystemState
  dashboard: IDashboardState
}

export type IStoreType = IRootState & IRootWithModule
