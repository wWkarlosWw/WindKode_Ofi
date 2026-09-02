<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Mail, Clock } from '@lucide/vue'
import { SectionHeader } from '@/components/layout'
import { ContactForm, RevealOnScroll } from '@/components/shared'

const { t } = useI18n()
</script>

<template>
  <main class="relative min-h-screen overflow-hidden bg-abyss pt-28 md:pt-36 text-silver">
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute left-1/2 top-0 h-72 w-[50rem] -translate-x-1/2 rounded-full bg-carbon/60 blur-[120px]" />
    </div>

    <div class="relative mx-auto max-w-7xl px-6 pb-24 md:pb-32">
      <div class="grid items-center gap-14 lg:grid-cols-2">
        <RevealOnScroll>
          <div>
            <SectionHeader align="left" class="mb-0" :kicker="t('agenda.kicker')">
              <template #title>
                <span class="block">{{ t('agenda.titulo_l1') }}</span>
                <span class="block">{{ t('agenda.titulo_l2') }}</span>
              </template>
            </SectionHeader>
            <p class="mt-6 max-w-md leading-relaxed text-silver/70">{{ t('agenda.subtitulo') }}</p>

            <div class="mt-10 flex flex-col gap-3 text-sm text-silver/70">
              <a
                href="mailto:hola@windkode.dev"
                class="group inline-flex items-center gap-3 transition-colors hover:text-ink"
              >
                <span
                  class="flex size-10 items-center justify-center rounded-full border border-ink/10 transition-colors group-hover:border-silver/40"
                >
                  <Mail class="size-4" :stroke-width="1.5" />
                </span>
                hola@windkode.dev
              </a>
              <p class="inline-flex items-center gap-3">
                <span class="flex size-10 items-center justify-center rounded-full border border-ink/10">
                  <Clock class="size-4" :stroke-width="1.5" />
                </span>
                {{ t('agenda.respuesta') }}
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll :delay="150">
          <div class="rounded-3xl border border-ink/10 bg-ink/[0.03] p-6 backdrop-blur-sm sm:p-8 md:p-10">
            <ContactForm />
          </div>
        </RevealOnScroll>
      </div>
    </div>
  </main>
</template>
