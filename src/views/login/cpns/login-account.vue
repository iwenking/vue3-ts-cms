<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const store = useStore()

    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAccount = (iSkeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (iSkeepPassword) {
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
            //本地缓存
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          store.dispatch('login/accountLoginAction', { ...account })
          console.log('登录')
        }
      })
    }

    return {
      account,
      rules,
      loginAccount,
      formRef
    }
  }
})
</script>

<style scoped></style>
