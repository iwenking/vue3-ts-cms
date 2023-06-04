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
      <hy-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import UserInfo from './user-info.vue'
import HyBreadcrumb, { IBreadcrumb } from '@/base-ui/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menu'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

export default defineComponent({
  emits: ['foldChange'],
  components: {
    UserInfo,
    HyBreadcrumb
  },
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFlodClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    const store = useStore()

    const breadcrumbs = computed(() => {
      const route = useRoute()
      const userMenus = store.state.login.userMenus
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })
    // const breadcrumbs: IBreadcrumb[] = pathMapBreadcrumbs(
    //   userMenus,
    //   currentPath
    // )

    return {
      isFold,
      breadcrumbs,
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
