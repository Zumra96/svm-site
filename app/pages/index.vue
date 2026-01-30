<template>
  <!-- HERO -->
  <section class="relative h-[90vh]">
    <img src="/slika.jpg" class="absolute inset-0 w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black/40" />


    <div class="relative h-full flex items-center">
      <div class="max-w-4xl mx-auto px-6 text-center text-white">
        <p class="uppercase tracking-widest text-xs mb-4">Dobrodošli u župu</p>
        <h2 class="text-4xl md:text-6xl font-serif mb-6">Sveti Martin pod Okićem</h2>
        <p class="max-w-xl mx-auto text-sm md:text-base text-white/90 mb-8">
          Mjesto vjere, zajedništva i duhovnog rasta u podnožju Okića.
        </p>
        <div class="flex justify-center gap-4">
          <NuxtLink to="/mise" class="btn">Raspored misa</NuxtLink>
          <NuxtLink to="/o-zupi" class="border border-white/40 px-6 py-3 rounded-lg">Saznajte više</NuxtLink>
        </div>
      </div>
    </div>
  </section>


  <!-- MISNI RASPORED PREVIEW -->
  <section class="max-w-7xl mx-auto px-6 py-24">
    <h3 class="text-2xl font-serif mb-12 text-center">Svete mise i sakramenti</h3>
    <div class="grid md:grid-cols-3 gap-6">
      <Card title="Nedjelja" text="08:00 · 10:00 · 18:00" />
      <Card title="Radni dan" text="18:00" />
      <Card title="Subota" text="08:00 · 18:00" />
    </div>
  </section>
</template>

<script setup>
import InfoCard from '~/components/InfoCard.vue'
</script>
