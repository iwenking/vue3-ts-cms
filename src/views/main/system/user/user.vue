<template>
  <div class="user">
    <page-search :searchFromConfig="searchFromConfig" />
    <div class="content">
      <hy-tbale
        :listData="userList"
        :title="title"
        :propList="propList"
        :showIndexColum="showIndexColum"
        :showSelectColum="showSelectColum"
      >
        <!-- 1.header中的插槽 -->
        <template #headerHandler>
          <el-button type="primary" sizt="small">新建用户</el-button>
          <el-button>
            <el-icon><Refresh /></el-icon>
            刷新
          </el-button>
        </template>
        <!-- 2.列中的操作 -->
        <template #status="scope">
          <el-button
            plain
            :type="scope.row.enable ? 'success' : 'danger'"
            size="small"
            >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
          >
        </template>
        <template #createAt="scope">
          <span>{{ $filters.formaTime(scope.row.createAt) }}</span>
        </template>
        <template #updateAt="scope">
          <span>{{ $filters.formaTime(scope.row.updateAt) }}</span>
        </template>
        <template #handle>
          <div class="handle-btns">
            <el-button size="small" text type="primary">
              <el-icon>
                <Edit />
              </el-icon>
              编辑</el-button
            >
            <el-button size="small" text type="primary">
              <el-icon>
                <Delete />
              </el-icon>
              删除</el-button
            >
          </div>
        </template>
      </hy-tbale>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import PageSearch from '@/components/page-search'
import { searchFromConfig } from './config/search.config'
import HyTbale from '@/base-ui/table'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    HyTbale
  },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryinfo: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)
    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100', slotName: 'name' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '用户名', minWidth: '100' },
      { prop: 'enable', label: '状态', minWidth: '120', slotName: 'status' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '250',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '250',
        slotName: 'updateAt'
      },
      {
        label: '操作',
        minWidth: '120',
        slotName: 'handle'
      }
    ]
    const showIndexColum = true
    const showSelectColum = true
    const title = '用户列表'
    return {
      title,
      userList,
      propList,
      showIndexColum,
      showSelectColum,
      searchFromConfig
    }
  }
})
</script>

<style scoped lang="scss">
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
