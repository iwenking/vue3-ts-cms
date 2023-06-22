<template>
  <div class="role">
    <page-search
      :searchFromConfig="searchFromConfig"
      @resetBtnClick="handleRestClick"
      @query-btn-click="handleQueryClick"
    />
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
      pageName="role"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      pageName="role"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
      :modalConfig="modalConfig"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="defaultProps"
          @check="handleCheckChange"
        />
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'
import { useStore } from '@/store'

import { ElTree } from 'element-plus'
import { menuMapLeafKeys } from '@/utils/map-menu'

import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import PageModal from '@/components/page-modal'

import { contentTableConfig } from './config/content.config'
import { searchFromConfig } from './config/search.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/userPageSearch'
import { usePageModal } from '@/hooks/use-page-modal'
export default defineComponent({
  name: 'role',
  components: {
    PageContent,
    PageSearch,
    PageModal
  },
  setup() {
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const [pageContentRef, handleRestClick, handleQueryClick] = usePageSearch()
    //1、处理pageModal的hook
    const editCallback = (item: any) => {
      const leafKeys = menuMapLeafKeys(item.menuList)
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }
    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal(undefined, editCallback)

    const store = useStore()
    const defaultProps = ref({
      children: 'children',
      label: 'name'
    })
    const menus = computed(() => store.state.entireMenu)
    const otherInfo = ref({})
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }
    return {
      menus,
      defaultProps,
      otherInfo,
      handleCheckChange,
      contentTableConfig,
      searchFromConfig,
      pageContentRef,
      elTreeRef,
      handleRestClick,
      handleQueryClick,
      modalConfig,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData
    }
  }
})
</script>

<style scoped lang="scss">
.menu-tree {
  margin-left: 20px;
}
</style>
