<template>
  <div class="goods">
    <page-search
      :searchFromConfig="searchFromConfig"
      @resetBtnClick="handleRestClick"
      @query-btn-click="handleQueryClick"
    />
    <page-content
      :content-table-config="contentTableConfig"
      page-name="goods"
      ref="pageContentRef"
    >
      <template #image="scope">
        <el-image
          style="width: 60px"
          :src="scope.row.imgUrl"
          :zoom-rate="1.2"
          :preview-src-list="[scope.row.imgUrl]"
          :initial-index="4"
          preview-teleported
          fit="cover"
        />
      </template>
      <template #oldPrice="scope">
        {{ '￥' + scope.row.oldPrice }}
      </template>
      <template #status="scope">
        <el-button
          plain
          :type="scope.row.status ? 'success' : 'danger'"
          size="small"
          >{{ scope.row.status ? '启用' : '禁用' }}</el-button
        >
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import { searchFromConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { usePageSearch } from '@/hooks/userPageSearch'
export default defineComponent({
  name: 'goods',
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
