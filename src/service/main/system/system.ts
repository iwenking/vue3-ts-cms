import hyRequest from '../../index'

export function getPageListData(url: string, queryInfo: any) {
  return hyRequest.post({
    url: url,
    data: queryInfo
  })
}
export function deletePageData(url: string) {
  return hyRequest.delete({
    url: url
  })
}
export function createPageData(url: string, newData: any) {
  return hyRequest.post({
    url: url,
    data: newData
  })
}
export function editPageData(url: string, editData: any) {
  return hyRequest.patch({
    url: url,
    data: editData
  })
}
