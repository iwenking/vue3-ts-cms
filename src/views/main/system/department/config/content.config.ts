export const contentTableConfig = {
  title: '部门列表',
  showSelectColum: true,
  showIndexColum: true,
  propList: [
    { prop: 'name', label: '部门名字', minWidth: '100' },
    { prop: 'leader', label: '部门领导', minWidth: '100' },
    { prop: 'parentId', label: '上级部门', minWidth: '100' },

    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '120',
      slotName: 'handle'
    }
  ]
}
