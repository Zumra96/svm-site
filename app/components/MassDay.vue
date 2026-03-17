<template>
  <div
    class="glass-panel rounded-2xl p-6 md:p-8 flex flex-col gap-5 reveal"
    :class="highlight ? 'ring-2 ring-[#f7c57a]/60' : ''"
  >
    <div class="flex items-center justify-between">
      <h2 class="text-xl font-semibold text-[#2f2a22]">{{ day }}</h2>
      <span v-if="highlight" class="badge text-xs uppercase tracking-[0.2em] px-3 py-1 rounded-full">istaknuto</span>
    </div>

    <ul class="divide-y divide-[#e7dfd5]">
      <li
        v-for="(m, i) in masses"
        :key="i"
        class="py-4 flex items-center justify-between text-sm md:text-base"
      >
        <span class="text-2xl font-semibold text-[#1c1a17]">
          {{ m.time }}
        </span>
        <span class="text-[#5a4f45]">
          {{ m.note }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  day: String,
  masses: Array,
  highlight: Boolean
})
</script>
