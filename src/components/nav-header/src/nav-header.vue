<template>
  <div class="nav-header">
    <el-icon :size="30">
      <component
        :is="isFold ? 'fold' : 'expand'"
        class="fold-menu"
        @click="handleFlodClick"
      ></component>
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, handleError, ref } from 'vue'

export default defineComponent({
  emits: ['foldChange'],
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
  .fold-menu {
    cursor: pointer;
  }
}
</style>
