<template>
  <div class="glass-panel rounded-2xl p-8 text-left group cursor-default">
    <p class="text-xs uppercase tracking-[0.3em] text-[#c9a586] mb-3 transition-all duration-300 group-hover:text-[#b88f7a]">{{ title }}</p>
    <h4 class="text-xl font-semibold mb-2 text-[#3d3935] transition-colors duration-300 group-hover:text-[#4a5f54]">{{ text }}</h4>
    <p class="text-sm text-[#5a534e]">{{ note }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  text: String,
  note: {
    type: String,
    default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
})
</script>
