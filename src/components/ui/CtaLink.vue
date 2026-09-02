<script setup lang="ts">
import type { Component } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import { ArrowUpRight } from '@lucide/vue'

withDefaults(
  defineProps<{
    to: RouteLocationRaw
    variant?: 'solid' | 'outline'
    size?: 'md' | 'lg'
    icon?: Component
  }>(),
  { variant: 'solid', size: 'md', icon: undefined },
)
</script>

<template>
  <RouterLink
    :to="to"
    class="group inline-flex items-center gap-2 rounded-full font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:-translate-y-0.5"
    :class="[
      variant === 'solid' &&
        'btn-shine bg-platinum text-abyss hover:bg-halo hover:shadow-xl hover:shadow-ink/10',
      variant === 'outline' &&
        'border border-ink/15 text-silver hover:border-silver/50 hover:text-ink',
      size === 'md' && 'px-5 py-2 text-xs',
      size === 'lg' && 'px-7 py-3.5 text-sm',
    ]"
  >
    <slot />
    <component
      :is="icon ?? ArrowUpRight"
      class="size-4 transition-transform duration-300"
      :class="icon ? 'group-hover:scale-110' : 'group-hover:-translate-y-0.5 group-hover:translate-x-0.5'"
      :stroke-width="2"
    />
  </RouterLink>
</template>
