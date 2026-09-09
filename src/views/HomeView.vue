<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { CalendarDays } from '@lucide/vue'
import { WLogo, CtaLink } from '@/components/ui'
import { SectionHeader } from '@/components/layout'
import { RevealOnScroll, ServiceCard, StatsBar, TechMarquee, CtaBanner, SocialLinks } from '@/components/shared'
import { services } from '@/data'

const { t } = useI18n()

const featuredServices = services.slice(0, 3)
</script>

<template>
  <main class="overflow-x-clip bg-abyss text-silver">
    <!-- ============ HERO ============ -->
    <section class="relative flex min-h-svh flex-col justify-between pt-24 md:pt-28">
      <!-- Fondo: brillos con deriva lenta -->
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div class="animate-drift absolute -top-40 right-0 size-[24rem] rounded-full bg-carbon/60 blur-[120px] md:size-[36rem]" />
        <div
          class="animate-drift absolute bottom-0 left-0 size-[18rem] rounded-full bg-steel/10 blur-[120px] md:size-[28rem]"
          style="animation-delay: -9s; animation-direction: alternate-reverse"
        />
      </div>

      <div
        class="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center gap-8 px-6 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:gap-x-12 lg:gap-y-0"
      >
        <!-- Texto -->
        <div class="pt-6 lg:col-start-1 lg:row-start-1 lg:self-end lg:pt-0">
          <p
            class="animate-fade-up mb-5 text-xs font-medium uppercase tracking-[0.35em] text-steel md:mb-6"
            style="animation-delay: 100ms"
          >
            {{ t('hero.kicker') }}
          </p>

          <h1 class="font-display leading-[0.9]">
            <span class="block overflow-hidden">
              <span
                class="animate-rise text-metal block text-[clamp(3.5rem,14vw,11rem)]"
                style="animation-delay: 200ms"
              >
                {{ t('hero.titulo_l1') }}
              </span>
            </span>
            <span class="block overflow-hidden">
              <span
                class="animate-rise text-metal block text-[clamp(3.5rem,14vw,11rem)]"
                style="animation-delay: 340ms"
              >
                {{ t('hero.titulo_l2') }}
              </span>
            </span>
          </h1>

          <p
            class="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-silver/70 md:mt-8 md:text-lg"
            style="animation-delay: 500ms"
          >
            {{ t('hero.subtitulo') }}
          </p>
        </div>

        <!-- Botones y redes (en móvil van después del logo) -->
        <div class="order-3 flex flex-col gap-8 lg:col-start-1 lg:row-start-2 lg:mt-10 lg:self-start">
          <div
            class="animate-fade-up flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start"
            style="animation-delay: 650ms"
          >
            <CtaLink to="/agenda" size="lg" :icon="CalendarDays" class="justify-center">
              {{ t('hero.cta_agenda') }}
            </CtaLink>
            <CtaLink to="/servicios" variant="outline" size="lg" class="justify-center">
              {{ t('hero.cta_servicios') }}
            </CtaLink>
          </div>
          <SocialLinks label class="animate-fade-up justify-center lg:justify-start" style="animation-delay: 800ms" />
        </div>

        <!-- Logo protagonista con órbita (en móvil entre texto y botones) -->
        <div
          class="animate-fade-in relative order-2 mx-auto my-6 flex min-h-[17rem] w-full max-w-[16rem] items-center justify-center sm:my-8 sm:min-h-[21rem] sm:max-w-[20rem] lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:my-0 lg:min-h-0 lg:max-w-none lg:self-center"
          style="animation-delay: 450ms"
        >
          <div
            class="animate-spin-slow pointer-events-none absolute size-[15rem] rounded-full border border-ink/10 sm:size-[19rem] lg:size-[26rem]"
          >
            <span class="absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-silver/80" />
          </div>
          <div
            class="pointer-events-none absolute size-[11rem] rounded-full border border-dashed border-ink/5 sm:size-[14rem] lg:size-[19rem]"
          />
          <div class="animate-float-y relative">
            <WLogo
              class="animate-float-x h-24 w-[6.6rem] text-silver drop-shadow-[0_20px_50px_var(--logo-glow)] sm:h-32 sm:w-[8.75rem] lg:h-44 lg:w-48"
            />
          </div>
        </div>
      </div>

      <TechMarquee class="mt-10 md:mt-16" />
    </section>

    <!-- ============ STATS ============ -->
    <section class="mx-auto max-w-7xl px-6 pt-14 md:pt-20">
      <RevealOnScroll>
        <StatsBar />
      </RevealOnScroll>
    </section>

    <!-- ============ SERVICIOS (adelanto) ============ -->
    <section class="mx-auto max-w-7xl px-6 py-16 md:py-32">
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
    <section class="mx-auto max-w-7xl px-6 pb-16 md:pb-32">
      <RevealOnScroll>
        <CtaBanner />
      </RevealOnScroll>
    </section>
  </main>
</template>
