import { IloginSate } from './login/type'
import { ISystemState } from './system/type'
export interface IRootState {
  entireDepartment: any[]
  entireRole: any[]
}
export interface IRootWithModule {
  login: IloginSate
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
