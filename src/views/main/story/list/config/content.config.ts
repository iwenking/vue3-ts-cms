export const contentTableConfig = {
  title: '故事列表',
  // showSelectColum: true,
  showIndexColum: true,
  propList: [
    { prop: 'title', label: '故事标题', minWidth: '100' },
    { prop: 'content', label: '我的故事', minWidth: '300' },
    {
      prop: 'createAt',
      label: '更新时间',
      minWidth: '100',
      slotName: 'updateAt'
    }
  ]
}
