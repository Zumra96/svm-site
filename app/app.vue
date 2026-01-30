<script setup>
useHead({
  script: [
    {
      src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
      defer: true
    }
  ]
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
