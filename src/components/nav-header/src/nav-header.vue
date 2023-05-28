<template>
  <div class="nav-header">
    <el-icon :size="30">
      <component
        :is="isFold ? 'fold' : 'expand'"
        class="fold-menu"
        @click="handleFlodClick"
      ></component>
    </el-icon>
    <div class="content">
      <div>面包屑</div>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, handleError, ref } from 'vue'
import UserInfo from './user-info.vue'

export default defineComponent({
  emits: ['foldChange'],
  components: {
    UserInfo
  },
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFlodClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      isFold,
      handleFlodClick
    }
  }
})
</script>

<style scoped lang="scss">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    cursor: pointer;
  }
  .content {
    flex: 1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
