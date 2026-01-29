<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
useHead({
  script: [
    {
      src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
      defer: true
    }
  ]
})

if (process.client) {
  window.netlifyIdentity?.on("login", () => {
    window.location.href = "/admin/";
  })
}
</script>
