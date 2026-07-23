<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ContactForm } from '@/components/shared'

const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen bg-slate-950 pt-24 text-white">
    <div class="mx-auto max-w-6xl px-6 py-20">
      <div class="mb-16 text-center">
        <h2 class="text-3xl font-bold text-white md:text-4xl">{{ t('contacto.titulo') }}</h2>
        <p class="mt-4 text-lg text-slate-400">{{ t('contacto.subtitulo') }}</p>
      </div>

      <ContactForm />
    </div>
  </div>
</template>
