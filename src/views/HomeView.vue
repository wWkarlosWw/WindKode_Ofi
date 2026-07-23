<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { usePortfolioStore } from '@/stores/portfolio.store'
import { AppButton } from '@/components/ui'
import { AppSection } from '@/components/layout'
import { ProjectCard } from '@/components/shared'

const { t } = useI18n()
const portfolio = usePortfolioStore()

onMounted(() => {
  portfolio.fetchProjects()
})
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-white">
    <AppSection>
      <div class="flex flex-col items-center justify-center pt-20 text-center md:pt-32">
        <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5 text-sm text-sky-400">
          <span class="relative flex size-2">
            <span class="absolute inline-flex size-full animate-ping rounded-full bg-sky-400 opacity-75" />
            <span class="relative inline-flex size-2 rounded-full bg-sky-500" />
          </span>
          {{ t('hero.badge') }}
        </div>

        <h1 class="max-w-4xl text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
          {{ t('hero.titulo1') }}
          <br />
          {{ t('hero.titulo2') }}
          <span class="text-sky-400"> {{ t('hero.titulo3') }}</span>
        </h1>

        <p class="mt-6 max-w-2xl text-lg text-slate-400 md:text-xl">
          {{ t('hero.subtitulo') }}
        </p>

        <div class="mt-10 flex gap-4">
          <AppButton variant="primary" size="lg" @click="$router.push('/projects')">
            {{ t('hero.cta_primary') }}
          </AppButton>
          <AppButton variant="secondary" size="lg" @click="$router.push('/contact')">
            {{ t('hero.cta_secondary') }}
          </AppButton>
        </div>
      </div>
    </AppSection>

    <AppSection
      :title="t('section.proyectos.titulo')"
      :subtitle="t('section.proyectos.subtitulo')"
    >
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="project in portfolio.projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </AppSection>

    <AppSection
      :title="t('section.filosofia.titulo')"
      :subtitle="t('section.filosofia.subtitulo')"
    >
      <div class="grid gap-8 md:grid-cols-3">
        <div class="text-center">
          <div class="mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400">
            <svg class="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white">{{ t('filosofia.rapido.titulo') }}</h3>
          <p class="mt-2 text-sm text-slate-400">{{ t('filosofia.rapido.descripcion') }}</p>
        </div>

        <div class="text-center">
          <div class="mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400">
            <svg class="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white">{{ t('filosofia.seguro.titulo') }}</h3>
          <p class="mt-2 text-sm text-slate-400">{{ t('filosofia.seguro.descripcion') }}</p>
        </div>

        <div class="text-center">
          <div class="mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400">
            <svg class="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white">{{ t('filosofia.colaborativo.titulo') }}</h3>
          <p class="mt-2 text-sm text-slate-400">{{ t('filosofia.colaborativo.descripcion') }}</p>
        </div>
      </div>
    </AppSection>
  </div>
</template>
