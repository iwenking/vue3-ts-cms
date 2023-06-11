<template>
  <div class="user">
    <page-search
      :searchFromConfig="searchFromConfig"
      @resetBtnClick="handleRestClick"
      @query-btn-click="handleQueryClick"
    />
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { searchFromConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

import { usePageSearch } from '@/hooks/userPageSearch'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const [pageContentRef, handleRestClick, handleQueryClick] = usePageSearch()
    return {
      contentTableConfig,
      searchFromConfig,
      pageContentRef,
      handleRestClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped lang="scss"></style>
