<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { usePortfolioStore } from '@/stores/portfolio.store'
import { AppSection } from '@/components/layout'
import { ProjectCard } from '@/components/shared'

const { t } = useI18n()
const portfolio = usePortfolioStore()

onMounted(() => {
  portfolio.fetchProjects()
})
</script>

<template>
  <div class="min-h-screen bg-slate-950 pt-24 text-white">
    <AppSection
      :title="t('proyectos.titulo')"
      :subtitle="t('proyectos.subtitulo')"
    >
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="project in portfolio.projects"
          :key="project.id"
          :project="project"
        />
      </div>

      <div v-if="!portfolio.projects.length" class="mt-12 text-center text-slate-500">
        <p>{{ t('proyectos.vacio') }}</p>
      </div>
    </AppSection>
  </div>
</template>
