<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { SectionHeader } from '@/components/layout'
import { RevealOnScroll, TeamCard, CtaBanner } from '@/components/shared'
import { team } from '@/data'

const { t } = useI18n()
</script>

<template>
  <main class="min-h-screen bg-abyss pt-28 md:pt-36 text-silver">
    <div class="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
      <RevealOnScroll>
        <SectionHeader
          :kicker="t('equipo.kicker')"
          :title="t('equipo.titulo')"
          :subtitle="t('equipo.subtitulo')"
        />
      </RevealOnScroll>

      <div class="grid gap-5 md:grid-cols-3">
        <RevealOnScroll v-for="(member, i) in team" :key="member.name" :delay="i * 120">
          <TeamCard :member="member" />
        </RevealOnScroll>
      </div>

      <RevealOnScroll :delay="150">
        <CtaBanner class="mt-20" />
      </RevealOnScroll>
    </div>
  </main>
</template>
