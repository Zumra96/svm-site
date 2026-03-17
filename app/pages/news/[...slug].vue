<template>
  <section class="max-w-3xl mx-auto px-6 py-20">
    <NuxtLink to="/news" class="text-sm font-medium text-[#5a534e] transition-colors duration-300 hover:text-[#4a5f54] inline-flex items-center gap-2">
      <span>←</span> Povratak na novosti
    </NuxtLink>

    <div class="mt-8 glass-panel rounded-3xl p-8 md:p-12 fade-in-up">
      <p class="text-xs uppercase tracking-[0.3em] text-[#c9a586]">Obavijest</p>
      <h1 class="text-3xl md:text-4xl font-semibold mt-4 text-[#3d3935]">
        {{ post?.title }}
      </h1>
      <div class="text-sm text-[#6b635d] mt-2">
        {{ formattedDate }}
      </div>

      <article class="prose prose-neutral max-w-none mt-8 text-[#5a534e]">
        <ContentRenderer :value="post" />
      </article>
    </div>

    <div class="mt-12 text-sm text-[#6b635d] fade-in-up stagger-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at libero et
      lorem lacinia dapibus. Za dodatne informacije kontaktirajte župni ured.
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { data: post } = await useAsyncData(`news-${route.path}`, () =>
  queryContent('news').where('_path', route.path).findOne()
)

const formattedDate = computed(() =>
  post.value?.date
    ? new Date(post.value.date).toLocaleDateString('hr-HR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    : ''
)
</script>
