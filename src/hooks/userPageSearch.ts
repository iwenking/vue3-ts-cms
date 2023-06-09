import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleRestClick = () => {
    pageContentRef.value?.getPageData()
  }
  const handleQueryClick = (queryinfo: any) => {
    pageContentRef.value?.getPageData(queryinfo)
  }

  return [pageContentRef, handleRestClick, handleQueryClick]
}
