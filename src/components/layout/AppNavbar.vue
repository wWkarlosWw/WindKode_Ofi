<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { Menu, X, Sun, Moon } from '@lucide/vue'
import { useLocale } from '@/composables/useLocale'
import { useTheme } from '@/composables/useTheme'
import { WLogo, CtaLink } from '@/components/ui'

const route = useRoute()
const { t } = useI18n()
const { locale, toggle } = useLocale()
const { isDark, toggle: toggleTheme } = useTheme()
const isOpen = ref(false)
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 32
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const links = [
  { to: '/servicios', label: 'nav.servicios' },
  { to: '/nosotros', label: 'nav.nosotros' },
  { to: '/equipo', label: 'nav.equipo' },
  { to: '/proyectos', label: 'nav.proyectos' },
]
</script>

<template>
  <nav
    class="fixed inset-x-0 top-0 z-50 transition-all duration-500"
    :class="scrolled ? 'px-4 pt-3 md:px-6' : 'border-b border-ink/5 bg-abyss/80 backdrop-blur-xl'"
  >
    <div
      class="mx-auto transition-all duration-500"
      :class="
        scrolled
          ? [
              'max-w-4xl border border-ink/10 bg-graphite/80 px-5 shadow-2xl shadow-veil/50 backdrop-blur-xl',
              isOpen ? 'rounded-3xl' : 'rounded-full',
            ]
          : 'max-w-7xl px-6'
      "
    >
      <div class="flex items-center justify-between" :class="scrolled ? 'py-2.5' : 'py-3.5'">
        <!-- El logo es el inicio -->
        <RouterLink to="/" class="flex items-center gap-3 text-ink transition-opacity hover:opacity-80">
          <WLogo class="h-8 w-9" />
          <span class="font-display text-2xl tracking-[0.18em]">WIND<span class="text-steel">KODE</span></span>
        </RouterLink>

        <ul class="hidden items-center gap-8 lg:flex">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="text-xs font-medium uppercase tracking-[0.2em] transition-colors"
              :class="route.path === link.to ? 'text-ink' : 'text-silver/60 hover:text-ink'"
            >
              {{ t(link.label) }}
            </RouterLink>
          </li>
        </ul>

        <div class="flex items-center gap-3">
          <button
            class="flex size-8 items-center justify-center rounded-full border border-ink/10 text-silver/70 transition-colors hover:border-silver/40 hover:text-ink"
            :title="isDark ? 'Light mode' : 'Dark mode'"
            @click="toggleTheme"
          >
            <span class="sr-only">{{ isDark ? 'Light mode' : 'Dark mode' }}</span>
            <Sun v-if="isDark" class="size-4" :stroke-width="1.5" />
            <Moon v-else class="size-4" :stroke-width="1.5" />
          </button>

          <button
            class="rounded-full border border-ink/10 px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-silver/70 transition-colors hover:border-silver/40 hover:text-ink"
            @click="toggle"
          >
            {{ locale === 'es' ? 'EN' : 'ES' }}
          </button>

          <CtaLink to="/agenda" class="hidden md:inline-flex">{{ t('nav.agenda') }}</CtaLink>

          <button
            class="flex size-9 items-center justify-center rounded-lg text-silver/70 hover:text-ink lg:hidden"
            @click="isOpen = !isOpen"
          >
            <span class="sr-only">{{ t('nav.menu') }}</span>
            <Menu v-if="!isOpen" class="size-6" :stroke-width="1.5" />
            <X v-else class="size-6" :stroke-width="1.5" />
          </button>
        </div>
      </div>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="-translate-y-2 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="-translate-y-2 opacity-0"
      >
        <div v-if="isOpen" class="border-t border-ink/5 py-6 lg:hidden" :class="!scrolled && 'bg-abyss/95'">
          <ul class="flex flex-col gap-5">
            <li v-for="link in links" :key="link.to">
              <RouterLink
                :to="link.to"
                class="text-sm font-medium uppercase tracking-[0.2em] transition-colors"
                :class="route.path === link.to ? 'text-ink' : 'text-silver/70 hover:text-ink'"
                @click="isOpen = false"
              >
                {{ t(link.label) }}
              </RouterLink>
            </li>
            <li>
              <CtaLink to="/agenda" @click="isOpen = false">{{ t('nav.agenda') }}</CtaLink>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  </nav>
</template>
