<script setup lang="ts">
defineProps<{
  hover?: boolean
}>()
</script>

<template>
  <article
    class="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300"
    :class="hover && 'hover:-translate-y-1 hover:border-sky-500/30 hover:shadow-lg hover:shadow-sky-500/5'"
  >
    <slot />
  </article>
</template>
