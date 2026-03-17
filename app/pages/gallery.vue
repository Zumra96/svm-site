<template>
  <section class="max-w-6xl mx-auto px-6 py-20">
    <div class="text-center max-w-2xl mx-auto mb-14">
      <p class="text-xs uppercase tracking-[0.3em] text-[#c9a586] fade-in-up">Galerija</p>
      <h1 class="text-3xl md:text-4xl font-semibold section-title mt-4 fade-in-up stagger-1">Trenuci zajedništva</h1>
      <p class="text-[#5a534e] mt-4 fade-in-up stagger-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel tortor
        facilisis, eleifend lorem sed, dignissim neque.
      </p>
    </div>

    <div v-if="gallery && gallery.length > 0" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(item, i) in gallery"
        :key="item._id || i"
        class="glass-panel rounded-3xl overflow-hidden group cursor-pointer scale-in"
        :class="`stagger-${Math.min(i + 1, 6)}`"
      >
        <div class="overflow-hidden">
          <img
            :src="item.meta.image"
            :alt="item.meta.title"
            class="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div class="p-5">
          <p class="text-xs uppercase tracking-[0.3em] text-[#c9a586]">{{ item.meta.category || 'Događaj' }}</p>
          <h3 class="text-lg font-semibold mt-2 text-[#3d3935] transition-colors duration-300 group-hover:text-[#4a5f54]">{{ item.meta.title }}</h3>
          <p v-if="item.meta.description" class="text-sm text-[#5a534e] mt-2">{{ item.meta.description }}</p>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-20">
      <p class="text-[#5a534e]">Galerija je trenutno prazna. Slike će se uskoro dodati.</p>
    </div>
  </section>
</template>

<script setup>
const { data: gallery } = await useAsyncData('gallery', () =>
  queryCollection('gallery').all()
)
console.log('gallery', gallery.value)
</script>
