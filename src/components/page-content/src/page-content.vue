<template>
  <div class="page-content">
    <hy-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <!-- 1.header中的插槽 -->
      <template #headerHandler>
        <el-button
          v-if="isCreate"
          type="primary"
          sizt="small"
          @click="handleNewClick"
          >新建用户</el-button
        >
        <el-button>
          <el-icon><Refresh /></el-icon>
          刷新
        </el-button>
      </template>
      <!-- 2.列中的操作 -->
      <template #createAt="scope">
        <span>{{ $filters.formaTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formaTime(scope.row.updateAt) }}</span>
      </template>
      <template #handle="scope">
        <div class="handle-btns">
          <el-button
            size="small"
            text
            type="primary"
            v-if="isUpdate"
            @click="handleEditClick(scope.row)"
          >
            <el-icon>
              <Edit />
            </el-icon>
            编辑</el-button
          >
          <el-button
            size="small"
            text
            type="primary"
            v-if="isDelete"
            @click="handleDeleteClick(scope.row)"
          >
            <el-icon>
              <Delete />
            </el-icon>
            删除</el-button
          >
        </div>
      </template>
      <!-- 栽page-content中动态插入剩余的插槽 -->
      <template
        v-for="item in otherPropsSlots"
        ::key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, ref } from 'vue'
import { useStore } from '@/store'
import { usePermission } from '@/hooks/use-permission'

import HyTable from '@/base-ui/table'

export default defineComponent({
  components: {
    HyTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      require: true
    }
  },
  emits: ['newBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    const store = useStore()
    //0、获取操作权限
    const isCreate = usePermission(props.pageName ?? '', 'create')
    const isUpdate = usePermission(props.pageName ?? '', 'update')
    const isDelete = usePermission(props.pageName ?? '', 'delete')
    const isQuery = usePermission(props.pageName ?? '', 'query')

    //1、双向绑定的pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })

    watch(pageInfo, () => getPageData())
    //2、发送网络请求

    const getPageData = (queryinfo: any = {}) => {
      if (!isQuery) return
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryinfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryinfo
        }
      })
    }
    getPageData()
    //3、vuex中获取数据
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    )

    //4、获取其他的动态插槽名称
    const otherPropsSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        // if (item.slotName === 'status') return false
        if (item.slotName === 'createAt') return false
        if (item.slotName === 'updateAt') return false
        if (item.slotName === 'handle') return false
        return true
      }
    )
    //5、删除/编辑/新建操作
    const handleDeleteClick = (item: any) => {
      store.dispatch('system/deletePageDataAction', {
        pageName: props.pageName,
        id: item.id
      })
    }
    const handleNewClick = () => {
      emit('newBtnClick')
    }
    const handleEditClick = (item: any) => {
      emit('editBtnClick', item)
    }
    return {
      dataList,
      dataCount,
      pageInfo,
      otherPropsSlots,
      isCreate,
      isUpdate,
      isDelete,
      getPageData,
      handleDeleteClick,
      handleNewClick,
      handleEditClick
    }
  }
})
</script>

<style scoped lang="scss">
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
