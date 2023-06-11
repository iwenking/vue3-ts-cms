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
      pageName="role"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import { contentTableConfig } from './config/content.config'
import { searchFromConfig } from './config/search.config'
import { usePageSearch } from '@/hooks/userPageSearch'
export default defineComponent({
  name: 'role',
  components: {
    PageContent,
    PageSearch
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

<style scoped></style>
