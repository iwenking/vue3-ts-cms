<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import { IBreadcrumb } from './types'

export default defineComponent({
  props: {
    breadcrumbs: {
      type: Array as PropType<IBreadcrumb[]>
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
