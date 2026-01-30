<template>
  <div class="min-h-screen flex flex-col bg-[#F6EFE7] text-[#2B1F16]">
    <!-- HEADER -->
    <header class="bg-[#F6EFE7]/90 backdrop-blur border-b border-[#E6DCCF] sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img src="/slika.jpg" class="w-10 h-10" />
          <div class="leading-tight">
            <h1 class="text-sm font-semibold tracking-wide">Sveti Martin</h1>
            <p class="text-xs text-[#6F5F52]">pod Okićem</p>
          </div>
        </div>
        <nav class="hidden md:flex items-center gap-8 text-sm">
          <NuxtLink to="/" class="nav">Početna</NuxtLink>
          <NuxtLink to="/about" class="nav">O župi</NuxtLink>
          <NuxtLink to="/masses" class="nav">Mise</NuxtLink>
          <NuxtLink to="/news" class="nav">Novosti</NuxtLink>
          <NuxtLink to="/kontakt" class="btn">Kontaktirajte nas</NuxtLink>
        </nav>
      </div>
    </header>


    <main class="flex-1">
      <slot />
    </main>


    <!-- FOOTER -->
    <footer class="bg-[#EFE6DB] border-t border-[#E6DCCF]">
      <div class="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 text-sm">
        <div>
          <strong>Župni ured</strong>
          <p class="mt-2 text-[#6F5F52]">Martin pod Okićem</p>
        </div>
        <div>
          <strong>Kontakt</strong>
          <p class="mt-2 text-[#6F5F52]">Telefon i email</p>
        </div>
        <div>
          <strong>Radno vrijeme</strong>
          <p class="mt-2 text-[#6F5F52]">Po dogovoru</p>
        </div>
      </div>
      <div class="text-center text-xs py-6 text-[#6F5F52]">
        © 2024 Župa sv. Martin pod Okićem
      </div>
    </footer>
  </div>
</template>


<style scoped>
.nav {
  color: #6F5F52;
}
.nav.router-link-active {
  color: #2B1F16;
}
.btn {
  background: #8B5E34;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}
</style>
