<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Project } from '@/types/project'
import { AppCard, AppBadge } from '@/components/ui'

defineProps<{
  project: Project
}>()

const { t } = useI18n()
</script>

<template>
  <AppCard hover class="flex flex-col gap-4">
    <div class="flex aspect-video items-center justify-center rounded-lg bg-white/5 text-slate-600">
      <svg class="size-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    </div>

    <div>
      <h3 class="text-lg font-semibold text-white">{{ project.title }}</h3>
      <p class="mt-2 text-sm leading-relaxed text-slate-400">{{ project.description }}</p>
    </div>

    <div class="mt-auto flex flex-wrap gap-2">
      <AppBadge v-for="tag in project.tags" :key="tag" variant="skill">{{ tag }}</AppBadge>
    </div>

    <div class="flex gap-3">
      <a v-if="project.url" :href="project.url" target="_blank" class="text-sm text-sky-400 hover:text-sky-300 transition-colors">
        {{ t('proyecto.ver') }}
      </a>
      <a v-if="project.repo" :href="project.repo" target="_blank" class="text-sm text-slate-500 hover:text-slate-300 transition-colors">
        {{ t('proyecto.repositorio') }}
      </a>
    </div>
  </AppCard>
</template>
