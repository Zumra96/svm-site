<template>
  <section class="max-w-6xl mx-auto px-6 py-20">
    <div class="text-center max-w-2xl mx-auto mb-14">
      <p class="text-xs uppercase tracking-[0.3em] text-[#c9a586] fade-in-up">Novosti</p>
      <h1 class="text-3xl md:text-4xl font-semibold section-title mt-4 fade-in-up stagger-1">Obavijesti iz župe</h1>

    </div>

    <div class="grid gap-6" v-if="news.length > 0">
      <div
        v-for="(post, i) in news"
        :key="post.path || post._path || i"
        class="fade-in-up"
        :class="`stagger-${Math.min(i + 1, 6)}`"
      >
        <NewsCard
          :title="post.title"
          :date="formatDate(post.meta.date)"
          :excerpt="post.excerpt"
          :to="post.path || post._path"
        />
      </div>
    </div>
    <div v-else class="text-center py-20">
      Nema novih obavijesti.
    </div>
  </section>
</template>

<script setup>
import NewsCard from '~/components/NewsCard.vue'

const { data: news } = await useAsyncData( () =>
  queryCollection('news').all()
)
console.log('news', news.value)
const formatDate = (value) => {
  if (!value) return ''
  return new Date(value).toLocaleDateString('hr-HR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}
</script>
