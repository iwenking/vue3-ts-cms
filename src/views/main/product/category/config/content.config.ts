export const contentTableConfig = {
  title: '类别列表',
  showSelectColum: true,
  showIndexColum: true,
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '100' },

    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
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
