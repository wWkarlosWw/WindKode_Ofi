<script setup lang="ts">
import { RouterView } from 'vue-router'
import { AppNavbar, AppFooter } from '@/components/layout'
</script>

<template>
  <AppNavbar />
  <RouterView />
  <AppFooter />
</template>
