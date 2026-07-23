<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const year = new Date().getFullYear();
</script>

<template>
  <footer
    class="border-t border-white/10 py-8 text-center text-sm text-slate-500"
  >
    <p>{{ t("footer.copyright", { year }) }}</p>
    <p class="mt-1">
      {{ t("footer.hecho") }} <span class="text-sky-400">&lt; / &gt;</span>
      {{ t("footer.hecho_sufijo") }}
    </p>
  </footer>
</template>
