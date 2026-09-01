<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";
import { WLogo } from "@/components/ui";

const { t } = useI18n();
const year = new Date().getFullYear();

const links = [
  { to: "/servicios", label: "nav.servicios" },
  { to: "/nosotros", label: "nav.nosotros" },
  { to: "/equipo", label: "nav.equipo" },
  { to: "/proyectos", label: "nav.proyectos" },
  { to: "/agenda", label: "nav.agenda" },
];
</script>

<template>
  <footer class="border-t border-ink/5 bg-abyss">
    <div class="mx-auto max-w-7xl px-6 py-14">
      <div
        class="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start"
      >
        <div class="flex flex-col items-center gap-3 md:items-start">
          <RouterLink
            to="/"
            class="flex items-center gap-3 text-ink transition-opacity hover:opacity-80"
          >
            <WLogo class="h-8 w-9" />
            <span class="font-display text-2xl tracking-[0.18em]"
              >WIND<span class="text-steel">KODE</span></span
            >
          </RouterLink>
          <p class="text-xs uppercase tracking-[0.2em] text-silver/40">
            {{ t("footer.tagline") }}
          </p>
        </div>

        <ul class="flex flex-wrap items-center justify-center gap-6">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="text-xs font-medium uppercase tracking-[0.2em] text-silver/50 transition-colors hover:text-ink"
            >
              {{ t(link.label) }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <div
        class="mt-10 flex flex-col items-center justify-between gap-3 border-t border-ink/5 pt-8 text-xs text-silver/40 md:flex-row"
      >
        <p>{{ t("footer.copyright", { year }) }}</p>
        <p>
          {{ t("footer.hecho") }}
          <span class="text-steel">&lt; / &gt;</span>
          {{ t("footer.hecho_sufijo") }}
        </p>
      </div>
    </div>
  </footer>
</template>
