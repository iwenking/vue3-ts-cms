<template>
  <div class="user">
    <div class="search">
      <hy-form v-bind="searchFromConfig" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HyForm from '@/base-ui/form/index'
import { searchFromConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    HyForm
  },
  setup() {
    return {
      searchFromConfig
    }
  }
})
</script>

<style scoped></style>
