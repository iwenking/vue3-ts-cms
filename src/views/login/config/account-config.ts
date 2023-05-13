export const rules = {
  name: [
    {
      required: true,
      message: '用户名必传内容',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5-10个字母或者数字',
      trigger: 'bulr'
    }
  ],
  password: [
    {
      required: true,
      message: '用密码必传内容',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是5位以上字母或者数字',
      trigger: 'bulr'
    }
  ]
}
