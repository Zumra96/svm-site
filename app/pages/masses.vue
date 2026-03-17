<template>
  <section class="max-w-6xl mx-auto px-6 py-20">
    <div class="text-center max-w-2xl mx-auto mb-14">
      <p class="text-xs uppercase tracking-[0.3em] text-[#c9a586] fade-in-up">Raspored misa</p>
      <h1 class="text-3xl md:text-4xl font-semibold section-title mt-4 fade-in-up stagger-1">Svete mise i sakramenti</h1>
      <p class="text-[#5a534e] mt-4 fade-in-up stagger-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis lorem vel sem
        mattis, vitae ullamcorper augue finibus. Uvijek provjerite aktualnu obavijest.
      </p>
    </div>

    <div class="grid gap-6">
      <div class="fade-in-up stagger-1">
        <MassDay
          day="Nedjelja"
          highlight
          :masses="[
            { time: weekly?.sunday || '—', note: 'Glavne nedjeljne mise' }
          ]"
        />
      </div>
      <div class="fade-in-up stagger-2">
        <MassDay
          day="Radni dan"
          :masses="[
            { time: weekly?.weekday || '—', note: 'Sveta misa u župi' }
          ]"
        />
      </div>
      <div class="fade-in-up stagger-3">
        <MassDay
          day="Blagdani"
          :masses="[
            { time: weekly?.feasts || 'Po najavi', note: 'Blagdanske mise' }
          ]"
        />
      </div>
    </div>

    <div class="mt-12 glass-panel rounded-2xl p-8 scale-in stagger-4">
      <h2 class="text-2xl font-semibold section-title">Napomena</h2>
      <p class="text-[#5a534e] mt-3">
        {{ weekly?.note || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis aliquam metus.' }}
      </p>
    </div>

    <div class="mt-16 grid md:grid-cols-2 gap-8">
      <div class="glass-panel rounded-2xl p-8 slide-right stagger-1">
        <p class="text-xs uppercase tracking-[0.3em] text-[#c9a586]">Sakramenti</p>
        <h3 class="text-2xl font-semibold section-title mt-4">Krštenja, vjenčanja i ispovijed</h3>
        <p class="text-[#5a534e] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida accumsan
          libero, in aliquet erat cursus at. Za dogovor kontaktirajte župni ured.
        </p>
      </div>
      <div class="glass-panel rounded-2xl p-8 slide-left stagger-2">
        <p class="text-xs uppercase tracking-[0.3em] text-[#c9a586]">Dodatne informacije</p>
        <h3 class="text-2xl font-semibold section-title mt-4">Molimo provjerite tjedne obavijesti</h3>
        <p class="text-[#5a534e] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere arcu sit
          amet tellus dapibus, vitae suscipit nisl varius.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import MassDay from '~/components/MassDay.vue'
import { useAsyncData } from '#app'

const { data: weekly } = await useAsyncData('masses-weekly', () =>
  queryCollection('masses').first()
)
</script>
