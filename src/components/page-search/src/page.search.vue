<template>
  <div class="page.search">
    <hy-form v-bind="searchFromConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #fotter>
        <div class="handle-btns">
          <el-button type="primary" @click="handleResetClick">
            <el-icon>
              <Refresh />
            </el-icon>
            重置</el-button
          >
          <el-button type="primary" @click="handleQueryClick">
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
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    const fromItems = props.searchFromConfig?.formItems ?? []

    const fromOriginData: any = {}
    for (const item of fromItems) {
      fromOriginData[item.field] = ''
    }
    const formData = ref(fromOriginData)

    const handleResetClick = () => {
      for (const key in fromOriginData) {
        formData.value[`${key}`] = fromOriginData[key]
      }
      emit('resetBtnClick')
    }
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }
    return {
      formData,
      handleResetClick,
      handleQueryClick
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
