<template>
  <section class="bg-[#faf9f7]">
    <div class="max-w-3xl mx-auto px-6 py-20">
      <NuxtLink
          to="/news"
          class="text-sm underline text-[#6b6b6b]"
      >
        ← Povratak na novosti
      </NuxtLink>

      <h1 class="text-3xl font-serif mt-6 mb-2">
        Svibanjska pobožnost
      </h1>

      <div class="text-sm text-[#6b6b6b] mb-8">
        1. – 31. svibnja 2026.
      </div>

      <article class="prose prose-neutral max-w-none">
        <p>
          Tijekom mjeseca svibnja u našoj župi svake večeri u 18:00 sati
          moli se krunica Blaženoj Djevici Mariji, nakon čega slijedi sveta misa.
        </p>

        <p>
          Pozivamo sve vjernike da se uključe u ovu pobožnost.
        </p>
      </article>
    </div>
  </section>
</template>

<script setup>
const { data: post } = await useAsyncData('newsPost', () =>
    $content('news', params.slug).fetch()
)
</script>
