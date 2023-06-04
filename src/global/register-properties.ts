import { App } from 'vue'
import { formUtsString } from '@/utils/date-format'
export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formaTime(value: string) {
      return formUtsString(value)
    }
  }
}
