import { IloginSate } from './login/type'
export interface IRootState {
  name: string
  age: number
}
export interface IRootWithModule {
  login: IloginSate
}

export type IStoreType = IRootState & IRootWithModule
