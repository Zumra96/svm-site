<template>
  <section class="max-w-6xl mx-auto px-6 py-20">
    <div class="text-center max-w-2xl mx-auto mb-14">
      <p class="text-xs uppercase tracking-[0.3em] text-[#c9a586] fade-in-up">Kontakt</p>
      <h1 class="text-3xl md:text-4xl font-semibold section-title mt-4 fade-in-up stagger-1">Javite nam se</h1>
      <p class="text-[#5a534e] mt-4 fade-in-up stagger-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Za dogovor termina
        i pitanja ispunite obrazac ili nas nazovite.
      </p>
    </div>

    <div class="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
      <div class="space-y-6">
        <div class="glass-panel rounded-3xl p-8 slide-right">
          <h2 class="text-2xl font-semibold section-title">Župni ured</h2>
          <p class="text-[#5a534e] mt-3">Ulica mira 4, 10430 Samobor</p>
          <p class="text-[#5a534e] mt-3">Telefon: +385 (0)1 123 4567</p>
          <p class="text-[#5a534e] mt-3">Email: zupa@sveti-martin.hr</p>
          <div class="mt-6 grid gap-4">
            <div class="bg-white/80 rounded-2xl p-4 transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-[1.02]">
              <p class="text-xs uppercase tracking-[0.3em] text-[#c9a586]">Radno vrijeme</p>
              <p class="font-semibold mt-2 text-[#3d3935]">Pon - Pet: 09:00 - 12:00</p>
              <p class="text-[#5a534e] mt-1">Subota: po dogovoru</p>
            </div>
            <div class="bg-white/80 rounded-2xl p-4 transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-[1.02]">
              <p class="text-xs uppercase tracking-[0.3em] text-[#c9a586]">Hitni slučajevi</p>
              <p class="text-[#5a534e] mt-2">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="glass-panel rounded-3xl p-8 md:p-10 slide-left">
        <h2 class="text-2xl font-semibold section-title">Pošaljite poruku</h2>
        <form name="kontakt" method="POST" data-netlify="true" class="mt-6 grid gap-4">
          <input type="hidden" name="form-name" value="kontakt" />
          <div class="grid md:grid-cols-2 gap-4">
            <input
              name="ime"
              type="text"
              placeholder="Ime i prezime"
              class="w-full rounded-xl border border-[#d4d0cb] bg-white/80 px-4 py-3 transition-all duration-300 focus:border-[#4a5f54] focus:outline-none focus:ring-2 focus:ring-[#4a5f54]/20"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              class="w-full rounded-xl border border-[#d4d0cb] bg-white/80 px-4 py-3 transition-all duration-300 focus:border-[#4a5f54] focus:outline-none focus:ring-2 focus:ring-[#4a5f54]/20"
              required
            />
          </div>
          <input
            name="telefon"
            type="text"
            placeholder="Telefon"
            class="w-full rounded-xl border border-[#d4d0cb] bg-white/80 px-4 py-3 transition-all duration-300 focus:border-[#4a5f54] focus:outline-none focus:ring-2 focus:ring-[#4a5f54]/20"
          />
          <textarea
            name="poruka"
            rows="5"
            placeholder="Vaša poruka"
            class="w-full rounded-xl border border-[#d4d0cb] bg-white/80 px-4 py-3 transition-all duration-300 focus:border-[#4a5f54] focus:outline-none focus:ring-2 focus:ring-[#4a5f54]/20"
            required
          />
          <button type="submit" class="btn-primary px-6 py-3 rounded-xl font-semibold w-full md:w-auto">
            Pošalji poruku
          </button>
        </form>
        <p class="text-xs text-[#6b635d] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odgovaramo u najkraćem roku.
        </p>
      </div>
    </div>
  </section>
</template>
