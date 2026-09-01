<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { SectionHeader } from '@/components/layout'
import { RevealOnScroll, StatsBar, CtaBanner } from '@/components/shared'
import { pillars } from '@/data'

const { t } = useI18n()
</script>

<template>
  <main class="min-h-screen bg-abyss pt-36 text-silver">
    <div class="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
      <div class="grid gap-14 lg:grid-cols-2">
        <RevealOnScroll>
          <div>
            <SectionHeader
              align="left"
              class="mb-0"
              :kicker="t('nosotros.kicker')"
              :title="t('nosotros.titulo')"
            />
            <p class="mt-8 max-w-xl leading-relaxed text-silver/70">{{ t('nosotros.p1') }}</p>
            <p class="mt-4 max-w-xl leading-relaxed text-silver/70">{{ t('nosotros.p2') }}</p>
          </div>
        </RevealOnScroll>

        <div class="flex flex-col justify-center gap-4">
          <RevealOnScroll v-for="(pillar, i) in pillars" :key="pillar.key" :delay="i * 120">
            <div
              class="group flex items-start gap-5 rounded-2xl border border-ink/10 bg-graphite/60 p-6 transition-all duration-300 hover:border-silver/30"
            >
              <span
                class="flex size-12 shrink-0 items-center justify-center rounded-xl border border-ink/10 bg-ink/5 text-silver transition-colors group-hover:border-silver/40 group-hover:text-ink"
              >
                <component :is="pillar.icon" class="size-6" :stroke-width="1.5" />
              </span>
              <div>
                <h3 class="font-semibold text-ink">{{ t(`filosofia.${pillar.key}.titulo`) }}</h3>
                <p class="mt-1.5 text-sm leading-relaxed text-silver/60">
                  {{ t(`filosofia.${pillar.key}.descripcion`) }}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <RevealOnScroll :delay="150">
        <StatsBar class="mt-20" />
      </RevealOnScroll>

      <RevealOnScroll :delay="150">
        <CtaBanner class="mt-20" />
      </RevealOnScroll>
    </div>
  </main>
</template>
