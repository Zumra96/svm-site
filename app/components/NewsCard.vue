<template>
  <NuxtLink
    :to="to"
    class="block glass-panel rounded-2xl p-6 md:p-8 group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(42,39,37,0.12)]"
  >
    <div class="text-xs uppercase tracking-[0.3em] text-[#c9a586] mb-3 transition-colors duration-300 group-hover:text-[#b88f7a]">
      {{ date }}
    </div>

    <h2 class="text-2xl font-semibold mb-3 text-[#3d3935] transition-colors duration-300 group-hover:text-[#4a5f54]">
      {{ title }}
    </h2>

    <p class="text-[#5a534e] leading-relaxed">
      {{ excerpt }}
    </p>

    <span class="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#4a5f54] transition-all duration-300 group-hover:gap-3">
      Pročitaj više
      <span aria-hidden="true" class="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </span>
  </NuxtLink>
</template>

<script setup>
defineProps({
  title: String,
  date: String,
  excerpt: String,
  to: String
})
</script>
