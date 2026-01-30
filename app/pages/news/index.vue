<template>
  <section class="bg-[#faf9f7]">
    <div class="max-w-5xl mx-auto px-6 py-16 text-center">
      <h1 class="text-3xl font-serif mb-4">Novosti iz župe</h1>
      <p class="text-[#6b6b6b] max-w-xl mx-auto">
        Obavijesti, najave i događanja u našoj župi
      </p>
    </div>

    <div class="max-w-5xl mx-auto px-6 pb-24 space-y-6">
      <NewsCard
          v-for="(post, i) in news"
          :key="i"
          :title="post.title"
          :date="post.date"
          :excerpt="post.excerpt"
          :to="`/news/${post.slug}`"
      />
    </div>
  </section>
</template>

<script setup>
import { useAsyncData } from '#app'
import NewsCard from '~/components/NewsCard.vue'

const { data: news } = await useAsyncData('news', () =>
    $content('news').sortBy('date', 'desc').fetch()
)
</script>
