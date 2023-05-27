export interface MenuItem {
  id: number
  name: string
  type: number
  url: string
  icon: string
  sort: number
  children?: MenuItem[]
}
