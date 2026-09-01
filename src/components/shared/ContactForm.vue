<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { CheckCircle2, Send } from '@lucide/vue'
import { AppButton } from '@/components/ui'
import { sendContactForm } from '@/services'

const { t } = useI18n()

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const sent = ref(false)

async function handleSubmit() {
  await sendContactForm(form)
  sent.value = true
}
</script>

<template>
  <form v-if="!sent" @submit.prevent="handleSubmit" class="mx-auto max-w-lg space-y-6">
    <div>
      <label for="name" class="mb-2 block text-sm font-medium text-silver">{{ t('formulario.nombre.label') }}</label>
      <input
        id="name"
        v-model="form.name"
        type="text"
        required
        class="w-full rounded-xl border border-ink/10 bg-ink/5 px-4 py-3 text-ink placeholder-steel/60 outline-none transition-colors focus:border-silver/50"
        :placeholder="t('formulario.nombre.placeholder')"
      />
    </div>

    <div>
      <label for="email" class="mb-2 block text-sm font-medium text-silver">{{ t('formulario.email.label') }}</label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        required
        class="w-full rounded-xl border border-ink/10 bg-ink/5 px-4 py-3 text-ink placeholder-steel/60 outline-none transition-colors focus:border-silver/50"
        :placeholder="t('formulario.email.placeholder')"
      />
    </div>

    <div>
      <label for="message" class="mb-2 block text-sm font-medium text-silver">{{ t('formulario.mensaje.label') }}</label>
      <textarea
        id="message"
        v-model="form.message"
        required
        rows="5"
        class="w-full resize-none rounded-xl border border-ink/10 bg-ink/5 px-4 py-3 text-ink placeholder-steel/60 outline-none transition-colors focus:border-silver/50"
        :placeholder="t('formulario.mensaje.placeholder')"
      ></textarea>
    </div>

    <AppButton type="submit" variant="primary" size="lg" class="btn-shine w-full">
      <Send class="size-4" :stroke-width="1.5" />
      {{ t('formulario.enviar') }}
    </AppButton>
  </form>

  <div v-else class="text-center">
    <CheckCircle2 class="mx-auto size-10 text-silver" :stroke-width="1.5" />
    <p class="mt-4 text-lg text-ink">{{ t('formulario.exito.titulo') }}</p>
    <p class="mt-2 text-silver/60">{{ t('formulario.exito.mensaje') }}</p>
  </div>
</template>
