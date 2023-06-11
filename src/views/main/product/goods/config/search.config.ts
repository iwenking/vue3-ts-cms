import HyForm, { IForm } from '@/base-ui/form/index'

export const searchFromConfig: IForm = {
  labelWidth: '120px',
  itemStyle: {
    padding: '10px 40px'
  },
  colLayout: {
    span: 8
  },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品姓名',
      rules: [],
      placeholder: '请输入商品姓名'
    },
    {
      field: 'status',
      type: 'select',
      label: '商品状态',
      rules: [],
      placeholder: '请选择用户状态',
      options: [
        {
          title: '启动',
          value: 1
        },
        {
          title: '禁用',
          value: 0
        }
      ]
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      rules: [],
      OtherOption: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
