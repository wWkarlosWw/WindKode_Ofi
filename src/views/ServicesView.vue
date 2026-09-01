<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { SectionHeader } from '@/components/layout'
import { RevealOnScroll, ServiceCard, CtaBanner } from '@/components/shared'
import { services } from '@/data'

const { t } = useI18n()
</script>

<template>
  <main class="min-h-screen bg-abyss pt-36 text-silver">
    <div class="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
      <RevealOnScroll>
        <SectionHeader
          align="split"
          :kicker="t('servicios.kicker')"
          :title="t('servicios.titulo')"
          :subtitle="t('servicios.subtitulo')"
        />
      </RevealOnScroll>

      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <RevealOnScroll v-for="(service, i) in services" :key="service.key" :delay="i * 90">
          <ServiceCard :service="service" :index="i" />
        </RevealOnScroll>
      </div>

      <RevealOnScroll :delay="150">
        <CtaBanner class="mt-20" />
      </RevealOnScroll>
    </div>
  </main>
</template>
