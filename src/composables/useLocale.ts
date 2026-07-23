import { useLocaleStore } from '@/stores/locale.store'

export function useLocale() {
  const store = useLocaleStore()
  return { locale: store.locale, setLocale: store.setLocale, toggle: store.toggle }
}
