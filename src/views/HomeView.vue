<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { WLogo, CtaLink } from '@/components/ui'
import { SectionHeader } from '@/components/layout'
import { RevealOnScroll, ServiceCard, StatsBar, TechMarquee, CtaBanner } from '@/components/shared'
import { services } from '@/data'

const { t } = useI18n()

const featuredServices = services.slice(0, 3)
</script>

<template>
  <main class="overflow-x-clip bg-abyss text-silver">
    <!-- ============ HERO ============ -->
    <section class="relative flex min-h-svh flex-col justify-between pt-24">
      <!-- Fondo: brillos sutiles -->
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute -top-40 right-0 size-[36rem] rounded-full bg-carbon/60 blur-[120px]" />
        <div class="absolute bottom-0 left-0 size-[28rem] rounded-full bg-steel/10 blur-[120px]" />
      </div>

      <div class="relative mx-auto grid w-full max-w-7xl flex-1 items-center gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p
            class="animate-fade-up mb-6 text-xs font-medium uppercase tracking-[0.35em] text-steel"
            style="animation-delay: 100ms"
          >
            {{ t('hero.kicker') }}
          </p>

          <h1 class="font-display leading-[0.9]">
            <span class="animate-fade-up text-metal block text-[clamp(4.5rem,13vw,11rem)]" style="animation-delay: 200ms">
              {{ t('hero.titulo_l1') }}
            </span>
            <span class="animate-fade-up text-metal block text-[clamp(4.5rem,13vw,11rem)]" style="animation-delay: 320ms">
              {{ t('hero.titulo_l2') }}
            </span>
          </h1>

          <p
            class="animate-fade-up mt-8 max-w-xl text-base leading-relaxed text-silver/70 md:text-lg"
            style="animation-delay: 450ms"
          >
            {{ t('hero.subtitulo') }}
          </p>

          <div class="animate-fade-up mt-10 flex flex-wrap items-center gap-4" style="animation-delay: 580ms">
            <CtaLink to="/agenda" size="lg">{{ t('hero.cta_agenda') }}</CtaLink>
            <CtaLink to="/proyectos" variant="outline" size="lg">{{ t('hero.cta_proyectos') }}</CtaLink>
          </div>
        </div>

        <!-- Logo protagonista con órbita -->
        <div class="animate-fade-in relative hidden items-center justify-center lg:flex" style="animation-delay: 400ms">
          <div class="animate-spin-slow absolute size-[26rem] rounded-full border border-ink/10" />
          <div class="absolute size-[26rem]">
            <span class="absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-silver/80" />
          </div>
          <div class="absolute size-[19rem] rounded-full border border-dashed border-ink/5" />
          <WLogo class="animate-float relative h-44 w-48 text-silver drop-shadow-[0_20px_50px_var(--logo-glow)]" />
        </div>
      </div>

      <TechMarquee class="mt-16" />
    </section>

    <!-- ============ STATS ============ -->
    <section class="mx-auto max-w-7xl px-6 pt-20">
      <RevealOnScroll>
        <StatsBar />
      </RevealOnScroll>
    </section>

    <!-- ============ SERVICIOS (adelanto) ============ -->
    <section class="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <RevealOnScroll>
        <SectionHeader
          align="split"
          :kicker="t('servicios.kicker')"
          :title="t('servicios.titulo')"
          :subtitle="t('servicios.subtitulo')"
        />
      </RevealOnScroll>

      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <RevealOnScroll v-for="(service, i) in featuredServices" :key="service.key" :delay="i * 90">
          <ServiceCard :service="service" :index="i" />
        </RevealOnScroll>
      </div>

      <RevealOnScroll :delay="200">
        <div class="mt-10 flex justify-center">
          <CtaLink to="/servicios" variant="outline">{{ t('home.ver_servicios') }}</CtaLink>
        </div>
      </RevealOnScroll>
    </section>

    <!-- ============ AGENDA (banner) ============ -->
    <section class="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
      <RevealOnScroll>
        <CtaBanner />
      </RevealOnScroll>
    </section>
  </main>
</template>
