<template>
  <NuxtLink
      :to="to"
      class="
      block border border-[#e6e3dd] rounded-lg p-6
      bg-white
      hover:bg-[#f4f2ee]
      transition
    "
  >
    <div class="mb-2 text-sm text-[#6b6b6b]">
      {{ date }}
    </div>

    <h2 class="text-xl font-semibold mb-2">
      {{ title }}
    </h2>

    <p class="text-[#4b4b4b]">
      {{ excerpt }}
    </p>

    <span class="inline-block mt-4 text-sm underline">
      Pročitaj više
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
