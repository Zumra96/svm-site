<template>
  <div
      class="
      border rounded-lg p-6
      bg-white
      border-[#e6e3dd]
      flex flex-col gap-4
      shadow-xl
    "
      :class="highlight && 'bg-[#f4f2ee]'"
  >
    <!-- DAY -->
    <h2 class="text-xl font-semibold">
      {{ day }}
    </h2>

    <!-- TIMES -->
    <ul class="divide-y">
      <li
          v-for="(m, i) in masses"
          :key="i"
          class="py-4 flex items-center justify-between"
      >
        <span class="text-2xl font-medium">
          {{ m.time }}
        </span>
        <span class="text-[#6b6b6b]">
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
