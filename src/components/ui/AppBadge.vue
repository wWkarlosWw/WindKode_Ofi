<script setup lang="ts">
defineProps<{
  variant?: 'default' | 'skill'
}>()
</script>

<template>
  <span
    class="inline-block rounded-full px-3 py-1 text-xs font-medium"
    :class="[
      variant === 'skill' && 'bg-sky-500/10 text-sky-400 border border-sky-500/20',
      variant === 'default' && 'bg-white/10 text-slate-300',
    ]"
  >
    <slot />
  </span>
</template>
