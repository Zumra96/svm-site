<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <div class="min-h-screen flex flex-col page-shell text-[#2a2725]">
    <header class="sticky top-0 z-50">
      <div class="bg-[#faf8f5]/85 border-b border-[#d4d0cb]/30 backdrop-blur-md transition-all duration-300">
        <div class="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <NuxtLink to="/" class="flex items-center gap-3 group" @click="closeMenu">
            <div class="w-11 h-11 rounded-2xl bg-[#4a5f54] text-white grid place-items-center font-semibold transition-all duration-300 group-hover:scale-105 group-hover:bg-[#8b9a8f]">SM</div>
            <div class="leading-tight">
              <p class="text-xs uppercase tracking-[0.3em] text-[#c9a586] transition-colors duration-300">Župa</p>
              <h1 class="text-lg font-semibold transition-colors duration-300 group-hover:text-[#4a5f54]">Sveti Martin pod Okićem</h1>
            </div>
          </NuxtLink>

          <nav class="hidden lg:flex items-center gap-8 text-sm font-medium">
            <NuxtLink to="/" class="nav-link">Početna</NuxtLink>
            <NuxtLink to="/about" class="nav-link">O župi</NuxtLink>
            <NuxtLink to="/masses" class="nav-link">Mise</NuxtLink>
            <NuxtLink to="/news" class="nav-link">Novosti</NuxtLink>
            <NuxtLink to="/gallery" class="nav-link">Galerija</NuxtLink>
            <NuxtLink to="/contact" class="nav-cta">Kontakt</NuxtLink>
          </nav>

          <button
            class="lg:hidden w-11 h-11 rounded-xl border border-[#e7dfd5] bg-white/80"
            type="button"
            @click="toggleMenu"
            aria-label="Otvorite izbornik"
          >
            <span class="block w-5 h-0.5 bg-[#1c1a17] mx-auto mb-1" />
            <span class="block w-5 h-0.5 bg-[#1c1a17] mx-auto mb-1" />
            <span class="block w-5 h-0.5 bg-[#1c1a17] mx-auto" />
          </button>
        </div>
      </div>

      <Transition
        enter-active-class="transition-all duration-300"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="menuOpen"
          class="lg:hidden border-b border-[#d4d0cb]/30 bg-[#faf8f5]"
        >
          <div class="px-6 py-6 flex flex-col gap-4 text-sm font-medium">
          <NuxtLink to="/" class="nav-link" @click="closeMenu">Početna</NuxtLink>
          <NuxtLink to="/about" class="nav-link" @click="closeMenu">O župi</NuxtLink>
          <NuxtLink to="/masses" class="nav-link" @click="closeMenu">Mise</NuxtLink>
          <NuxtLink to="/news" class="nav-link" @click="closeMenu">Novosti</NuxtLink>
          <NuxtLink to="/gallery" class="nav-link" @click="closeMenu">Galerija</NuxtLink>
          <NuxtLink to="/contact" class="nav-cta" @click="closeMenu">Kontakt</NuxtLink>
          </div>
        </div>
      </Transition>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="mt-20 border-t border-[#d4d0cb]/30 bg-[#f0ebe6]">
      <div class="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3 text-sm">
        <div class="fade-in-up stagger-1">
          <p class="text-xs uppercase tracking-[0.25em] text-[#c9a586]">Župni ured</p>
          <p class="mt-4 font-semibold text-[#3d3935]">Sveti Martin pod Okićem</p>
          <p class="mt-2 text-[#5a534e]">Ulica mira 4, 10430 Samobor</p>
        </div>
        <div class="fade-in-up stagger-2">
          <p class="text-xs uppercase tracking-[0.25em] text-[#c9a586]">Kontakt</p>
          <p class="mt-4 font-semibold text-[#3d3935]">+385 (0)1 123 4567</p>
          <p class="mt-2 text-[#5a534e]">zupa@sveti-martin.hr</p>
        </div>
        <div class="fade-in-up stagger-3">
          <p class="text-xs uppercase tracking-[0.25em] text-[#c9a586]">Radno vrijeme</p>
          <p class="mt-4 font-semibold text-[#3d3935]">Pon - Pet: 09:00 - 12:00</p>
          <p class="mt-2 text-[#5a534e]">Po dogovoru u hitnim situacijama</p>
        </div>
      </div>
      <div class="text-center text-xs py-6 text-[#6b635d] border-t border-[#d4d0cb]/20">
        © 2026 Župa sv. Martin pod Okićem. Sva prava pridržana.
      </div>
    </footer>
  </div>
</template>

<style scoped>
.nav-link {
  color: #5a534e;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: #4a5f54;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover {
  color: #2a2725;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.router-link-active {
  color: #2a2725;
  font-weight: 600;
}

.nav-link.router-link-active::after {
  width: 100%;
}

.nav-cta {
  background: #4a5f54;
  color: #faf8f5;
  padding: 0.55rem 1.1rem;
  border-radius: 0.75rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(74, 95, 84, 0.2);
}

.nav-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(74, 95, 84, 0.3);
  background: #8b9a8f;
}
</style>
