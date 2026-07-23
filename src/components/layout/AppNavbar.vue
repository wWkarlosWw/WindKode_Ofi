<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'

const route = useRoute()
const { t } = useI18n()
const { locale, toggle } = useLocale()
const isOpen = ref(false)

const links = [
  { to: '/', label: 'nav.inicio' },
  { to: '/projects', label: 'nav.proyectos' },
  { to: '/contact', label: 'nav.contacto' },
]
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <RouterLink to="/" class="flex items-center gap-2 text-xl font-bold text-white">
        <span class="text-sky-400">&lt;</span>
        WindKode
        <span class="text-sky-400">/&gt;</span>
      </RouterLink>

      <div class="flex items-center gap-4">
        <button
          class="rounded-lg border border-white/10 px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-slate-400 transition-colors hover:border-sky-500/30 hover:text-sky-400"
          @click="toggle"
        >
          {{ locale === 'es' ? 'EN' : 'ES' }}
        </button>

        <button
          class="flex size-8 items-center justify-center rounded-lg text-slate-400 hover:text-white md:hidden"
          @click="isOpen = !isOpen"
        >
          <span class="sr-only">{{ t('nav.menu') }}</span>
          <svg class="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <ul class="hidden items-center gap-8 md:flex">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="text-sm font-medium transition-colors"
            :class="route.path === link.to ? 'text-sky-400' : 'text-slate-400 hover:text-white'"
          >
            {{ t(link.label) }}
          </RouterLink>
        </li>
      </ul>
    </div>

    <div v-if="isOpen" class="border-t border-white/10 px-6 py-4 md:hidden">
      <ul class="flex flex-col gap-4">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="text-sm font-medium transition-colors"
            :class="route.path === link.to ? 'text-sky-400' : 'text-slate-400 hover:text-white'"
            @click="isOpen = false"
          >
            {{ t(link.label) }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
