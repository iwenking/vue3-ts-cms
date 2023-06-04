<template>
  <div class="page.search">
    <hy-form v-bind="searchFromConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #fotter>
        <div class="handle-btns">
          <el-button type="primary">
            <el-icon>
              <Refresh />
            </el-icon>
            重置</el-button
          >
          <el-button type="primary">
            <el-icon> <Search /> </el-icon>搜索</el-button
          >
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HyForm from '@/base-ui/form/index'
export default defineComponent({
  props: {
    searchFromConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    HyForm
  },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      formData
    }
  }
})
</script>

<style scoped lang="scss">
.header {
  color: red;
  text-align: left;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
