<template>
  <div class="category">
    <page-search
      :searchFromConfig="searchFromConfig"
      @resetBtnClick="handleRestClick"
      @query-btn-click="handleQueryClick"
    />
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="category"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    >
      <template #status="scope">
        <el-button
          plain
          :type="scope.row.enable ? 'success' : 'danger'"
          size="small"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
    </page-content>
    <!-- <page-modal
      ref="pageModalRef"
      pageName="department"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfigRef"
    ></page-modal> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { searchFromConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
import PageModal from '@/components/page-modal'

import { usePageSearch } from '@/hooks/userPageSearch'
import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  name: 'category',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const [pageContentRef, handleRestClick, handleQueryClick] = usePageSearch()

    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal()

    return {
      contentTableConfig,
      // modalConfigRef,
      searchFromConfig,
      pageContentRef,
      handleRestClick,
      handleQueryClick,
      handleEditData,
      handleNewData,
      pageModalRef,
      defaultInfo
    }
  }
})
</script>

<style scoped></style>
