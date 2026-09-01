<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { stats } from '@/data'

const { t } = useI18n()
</script>

<template>
  <div class="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/5 lg:grid-cols-4">
    <div
      v-for="stat in stats"
      :key="stat.labelKey"
      class="flex flex-col items-center gap-2 bg-abyss px-6 py-10 text-center transition-colors hover:bg-carbon/60"
    >
      <span class="font-display text-metal text-5xl md:text-6xl">{{ stat.value }}</span>
      <span class="text-xs uppercase tracking-[0.25em] text-silver/50">{{ t(stat.labelKey) }}</span>
    </div>
  </div>
</template>
