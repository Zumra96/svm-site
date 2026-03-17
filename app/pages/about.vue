<template>
  <section class="max-w-6xl mx-auto px-6 py-20">
    <div class="text-center max-w-2xl mx-auto mb-14">
      <p class="text-xs uppercase tracking-[0.3em] text-[#c9a586] fade-in-up">O župi</p>
      <h1 class="text-3xl md:text-4xl font-semibold section-title mt-4 fade-in-up stagger-1">Povijest i zajednica</h1>
      <p class="text-[#5a534e] mt-4 fade-in-up stagger-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed erat ut
        sapien pulvinar tincidunt. Suspendisse potenti.
      </p>
    </div>

    <div class="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
      <article class="glass-panel rounded-3xl p-8 md:p-10 slide-right">
        <h2 class="text-2xl font-semibold text-[#3d3935]">Župa kroz stoljeća</h2>
        <p class="text-[#5a534e] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum
          interdum mi, id consequat arcu tincidunt id. Nullam euismod velit vitae
          magna pellentesque, vitae facilisis felis dapibus.
        </p>
        <p class="text-[#5a534e] mt-4">
          Nunc vel augue sed turpis pulvinar aliquet. Aliquam erat volutpat. Sed
          posuere, ipsum eu laoreet commodo, magna lacus vulputate lacus, vitae
          volutpat sapien nunc nec mi.
        </p>
        <div class="mt-8 grid sm:grid-cols-2 gap-4">
          <div class="bg-white/80 rounded-2xl p-4 transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-[1.02] scale-in stagger-1">
            <p class="text-xs uppercase tracking-[0.3em] text-[#c9a586]">Zaštitnik</p>
            <p class="font-semibold mt-2 text-[#3d3935]">Sv. Martin biskup</p>
          </div>
          <div class="bg-white/80 rounded-2xl p-4 transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-[1.02] scale-in stagger-2">
            <p class="text-xs uppercase tracking-[0.3em] text-[#c9a586]">Blagdan</p>
            <p class="font-semibold mt-2 text-[#3d3935]">11. studenoga</p>
          </div>
          <div class="bg-white/80 rounded-2xl p-4 transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-[1.02] scale-in stagger-3">
            <p class="text-xs uppercase tracking-[0.3em] text-[#c9a586]">Prvi spomen</p>
            <p class="font-semibold mt-2 text-[#3d3935]">1334. godina</p>
          </div>
          <div class="bg-white/80 rounded-2xl p-4 transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-[1.02] scale-in stagger-4">
            <p class="text-xs uppercase tracking-[0.3em] text-[#c9a586]">Zajednica</p>
            <p class="font-semibold mt-2 text-[#3d3935]">Lorem ipsum dolor</p>
          </div>
        </div>
      </article>

      <div class="space-y-6">
        <div class="glass-panel rounded-3xl p-6 md:p-8 slide-left group">
          <div class="overflow-hidden rounded-2xl">
            <img src="/slika.jpg" alt="Župna crkva" class="rounded-2xl w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <h3 class="text-xl font-semibold mt-6 text-[#3d3935]">Život zajednice</h3>
          <p class="text-[#5a534e] mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien
            vitae lorem dignissim ullamcorper.
          </p>
        </div>
        <div class="glass-panel rounded-3xl p-6 md:p-8 slide-left stagger-1">
          <h3 class="text-xl font-semibold text-[#3d3935]">Duhovni program</h3>
          <ul class="mt-4 space-y-3 text-[#5a534e]">
            <li class="transition-all duration-300 hover:translate-x-2 hover:text-[#4a5f54]">• Lorem ipsum dolor sit amet, ut enim ad minim.</li>
            <li class="transition-all duration-300 hover:translate-x-2 hover:text-[#4a5f54]">• Vestibulum ante ipsum primis in faucibus.</li>
            <li class="transition-all duration-300 hover:translate-x-2 hover:text-[#4a5f54]">• Mauris laoreet, nisl in posuere viverra.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mt-16 glass-panel rounded-3xl p-8 md:p-10 fade-in-up">
      <h2 class="text-2xl font-semibold section-title">Lokacija</h2>
      <p class="text-[#5a534e] mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta
        dignissim lacus, sed viverra massa posuere a.
      </p>
      <div class="mt-6">
        <ParishMap />
      </div>
    </div>
  </section>
</template>

<script setup>
import ParishMap from '~/components/ParishMap.vue'
</script>
