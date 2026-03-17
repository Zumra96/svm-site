<template>
  <div>


  <section class="relative overflow-hidden">
    <div class="absolute inset-0">
      <div class="absolute -top-10 right-0 w-[520px] h-[520px] bg-[#c9a586]/15 rounded-full blur-3xl animate-pulse" style="animation-duration: 8s;" />
      <div class="absolute bottom-0 left-0 w-[520px] h-[520px] bg-[#8b9a8f]/10 rounded-full blur-3xl animate-pulse" style="animation-duration: 10s;" />
    </div>

    <div class="relative max-w-7xl mx-auto px-6 pt-24 pb-28 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
      <div class="space-y-8">
        <p class="badge inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] px-4 py-2 rounded-full reveal">
          Živa zajednica
        </p>
        <h1 class="text-4xl md:text-6xl font-semibold leading-tight reveal reveal-delay-1">
          Mirno središte vjere, susreta i zajedništva
        </h1>
        <p class="text-base md:text-lg text-[#4a3f36] max-w-xl reveal reveal-delay-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae est in leo
          tincidunt varius. Nulla facilisi. Suspendisse non sem vitae lectus interdum
          sollicitudin.
        </p>
        <div class="flex flex-wrap gap-4 reveal reveal-delay-3">
          <NuxtLink to="/masses" class="btn-primary px-6 py-3 rounded-xl font-semibold inline-block">Raspored misa</NuxtLink>
          <NuxtLink to="/news" class="btn-secondary px-6 py-3 rounded-xl font-semibold inline-block">Najnovije obavijesti</NuxtLink>
        </div>
        <div class="flex items-center gap-6 text-sm text-[#5a534e] reveal reveal-delay-3">
          <div class="scale-in stagger-4">
            <p class="text-xs uppercase tracking-[0.3em] text-[#c9a586]">Lokacija</p>
            <p class="font-semibold text-[#3d3935]">Sveti Martin pod Okićem</p>
          </div>
          <div class="h-10 w-px bg-[#d4d0cb]" />
          <div class="scale-in stagger-5">
            <p class="text-xs uppercase tracking-[0.3em] text-[#c9a586]">Telefon</p>
            <p class="font-semibold text-[#3d3935]">+385 (0)1 123 4567</p>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="glass-panel rounded-[32px] p-6 md:p-8 reveal group">
          <div class="overflow-hidden rounded-2xl">
            <img src="/slika.jpg" alt="Župna crkva" class="rounded-2xl w-full h-[360px] object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div class="mt-6 space-y-3">
            <p class="text-xs uppercase tracking-[0.3em] text-[#c9a586]">Duhovni ritam</p>
            <h2 class="text-2xl font-semibold text-[#3d3935]">Tjedni raspored u jednoj kartici</h2>
            <p class="text-sm text-[#5a534e]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien id risus.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="max-w-7xl mx-auto px-6 py-20">
    <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
      <div class="slide-right">
        <p class="text-xs uppercase tracking-[0.3em] text-[#c9a586]">U fokusu</p>
        <h2 class="text-3xl md:text-4xl font-semibold section-title">Ritam župnog života</h2>
      </div>
      <p class="max-w-xl text-[#5a534e] slide-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet nisl non
        arcu congue tempor. Vivamus sit amet leo id lorem varius dapibus.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      <div class="fade-in-up stagger-1">
        <InfoCard title="Nedjelja" text="08:00 · 10:30 · 18:30" note="Lorem ipsum dolor sit amet, consectetur." />
      </div>
      <div class="fade-in-up stagger-2">
        <InfoCard title="Radni dan" text="18:00" note="Suspendisse potenti. Integer vitae." />
      </div>
      <div class="fade-in-up stagger-3">
        <InfoCard title="Blagdani" text="09:00 · 11:00" note="Pellentesque habitant morbi tristique." />
      </div>
    </div>
  </section>

  <section class="max-w-7xl mx-auto px-6 pb-24">
    <div class="glass-panel rounded-[32px] p-8 md:p-12 grid lg:grid-cols-[1fr_1fr] gap-10 items-center reveal">
      <div class="space-y-6 slide-right">
        <p class="text-xs uppercase tracking-[0.3em] text-[#c9a586]">Otvoreni poziv</p>
        <h2 class="text-3xl md:text-4xl font-semibold section-title">Uključite se u zajednicu</h2>
        <p class="text-[#5a534e]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a metus in nisl
          porttitor posuere. Aliquam erat volutpat. Integer at augue in ante posuere
          venenatis.
        </p>
        <NuxtLink to="/contact" class="btn-primary px-6 py-3 rounded-xl font-semibold inline-block">Kontaktirajte nas</NuxtLink>
      </div>
      <div class="grid gap-4">
        <div class="flex items-center gap-4 bg-white/80 rounded-2xl p-4 transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-[1.02] fade-in-up stagger-1">
          <div class="w-12 h-12 rounded-2xl bg-[#4a5f54]/10 text-[#4a5f54] grid place-items-center font-semibold transition-all duration-300">1</div>
          <div>
            <p class="font-semibold text-[#3d3935]">Volonterski tim</p>
            <p class="text-sm text-[#5a534e]">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </div>
        </div>
        <div class="flex items-center gap-4 bg-white/80 rounded-2xl p-4 transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-[1.02] fade-in-up stagger-2">
          <div class="w-12 h-12 rounded-2xl bg-[#c9a586]/15 text-[#b88f7a] grid place-items-center font-semibold transition-all duration-300">2</div>
          <div>
            <p class="font-semibold text-[#3d3935]">Zbor i glazba</p>
            <p class="text-sm text-[#5a534e]">Sed do eiusmod tempor incididunt ut labore.</p>
          </div>
        </div>
        <div class="flex items-center gap-4 bg-white/80 rounded-2xl p-4 transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-[1.02] fade-in-up stagger-3">
          <div class="w-12 h-12 rounded-2xl bg-[#8b9a8f]/15 text-[#4a5f54] grid place-items-center font-semibold transition-all duration-300">3</div>
          <div>
            <p class="font-semibold text-[#3d3935]">Karitativne akcije</p>
            <p class="text-sm text-[#5a534e]">Ut enim ad minim veniam, quis nostrud.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script setup>
import InfoCard from '~/components/InfoCard.vue'
</script>
