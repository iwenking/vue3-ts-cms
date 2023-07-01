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
      label: '部门名称',
      rules: [],
      placeholder: '请输入部门名称'
    },
    {
      field: 'leader',
      type: 'input',
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      field: 'updateAt',
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
