<template>
  <section class="bg-[#faf9f7]">
    <!-- PAGE HEADER -->
    <div class="max-w-5xl mx-auto px-6 py-16 text-center">
      <h1 class="text-3xl font-serif mb-4">Raspored svetih misa</h1>
      <p class="text-[#6b6b6b] max-w-xl mx-auto">
        Redoviti raspored misa u župi sv. Martin pod Okićem
      </p>
    </div>

    <!-- MASSES -->
    <div class="max-w-5xl mx-auto px-6 pb-24 space-y-6">
      <!-- WEEKDAY -->
      <MassDay
          day="Ponedjeljak – Petak"
          :masses="[
          { time: '18:00', note: 'Sveta misa' }
        ]"
      />

      <!-- SATURDAY -->
      <MassDay
          day="Subota"
          :masses="[
          { time: '18:00', note: 'Nedjeljna misa' }
        ]"
      />

      <!-- SUNDAY -->
      <MassDay
          day="Nedjelja"
          highlight
          :masses="[
          { time: '08:00', note: 'Jutarnja misa' },
          { time: '11:00', note: 'Glavna misa' }
        ]"
      />
    </div>
  </section>
</template>

<script setup>
import MassDay from '~/components/MassDay.vue'
</script>
