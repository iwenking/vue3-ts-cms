import hyRequest from '../../index'

enum DashboardAPI {
  amountList = '/goods/amount/list',
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addresGoodsSale = '/goods/address/sale'
}
export function getAmountList() {
  return hyRequest.get({
    url: DashboardAPI.amountList
  })
}
export function getCategoryGoodsCount() {
  return hyRequest.get({
    url: DashboardAPI.categoryGoodsCount
  })
}
export function getCategoryGoodsSale() {
  return hyRequest.get({
    url: DashboardAPI.categoryGoodsSale
  })
}
export function getCategoryGoodsFavor() {
  return hyRequest.get({
    url: DashboardAPI.categoryGoodsFavor
  })
}
export function getAddresGoodsSale() {
  return hyRequest.get({
    url: DashboardAPI.addresGoodsSale
  })
}
