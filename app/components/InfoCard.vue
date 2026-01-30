<template>
  <div class="bg-white border border-[#E6DCCF] rounded-xl p-8 text-center">
    <h4 class="font-serif text-lg mb-2">{{ title }}</h4>
    <p class="text-sm text-[#6F5F52]">{{ text }}</p>
  </div>
</template>


<script setup>
defineProps({ title: String, text: String })
</script>
