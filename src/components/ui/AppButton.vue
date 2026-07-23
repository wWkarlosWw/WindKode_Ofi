<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <button
    class="inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
    :class="[
      variant === 'primary' && 'bg-sky-500 text-white hover:bg-sky-600 shadow-md hover:shadow-lg',
      variant === 'secondary' && 'border border-sky-500 text-sky-400 hover:bg-sky-500/10',
      variant === 'ghost' && 'text-slate-400 hover:text-white hover:bg-white/5',
      size === 'sm' && 'px-3 py-1.5 text-sm',
      size === 'md' && 'px-5 py-2.5 text-base',
      size === 'lg' && 'px-7 py-3 text-lg',
    ]"
  >
    <slot />
  </button>
</template>
