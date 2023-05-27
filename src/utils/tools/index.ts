import { MenuItem } from './type'
export function removeIconPrefix(data: MenuItem[]): MenuItem[] {
  return data.map((item) => {
    const updatedIcon = item.icon.substring(8) // 去掉前面的 'el-icon-'
    return {
      ...item,
      icon: updatedIcon
    }
  })
}
