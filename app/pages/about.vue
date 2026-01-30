<template>
  <section class="bg-[#faf9f7]">
    <!-- HEADER -->
    <div class="max-w-5xl mx-auto px-6 py-20 text-center">
      <h1 class="text-3xl font-serif mb-6">O župi</h1>
      <p class="text-[#6b6b6b] max-w-2xl mx-auto">
        Župa sv. Martina biskupa u Svetom Martinu pod Okićem
        jedna je od najstarijih župa u samoborskom kraju.
      </p>
    </div>

    <!-- CONTENT -->
    <div class="max-w-5xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-12">
      <!-- TEXT -->
      <article class="prose prose-neutral max-w-none">
        <p>
          Župa <strong>sv. Martina biskupa</strong> u Svetom Martinu pod Okićem
          spominje se u pisanim izvorima već <strong>1334. godine</strong>,
          dok se pretpostavlja da je crkva postojala i ranije, još u 13. stoljeću.
        </p>

        <p>
          Župna crkva sv. Martina jedan je od najznačajnijih sakralnih spomenika
          ovoga kraja. Najstariji dio građevine je
          <strong>romanički toranj</strong>, koji je u prošlosti imao i
          obrambenu ulogu. Tijekom stoljeća crkva je dograđivana i obnavljana,
          te danas u sebi objedinjuje elemente romaničke, gotičke,
          renesansne i barokne arhitekture.
        </p>

        <p>
          Kroz povijest, crkva i župa bile su središte duhovnog i društvenog
          života mjesta. I danas se u župi redovito slave sveta misa,
          dijele sakramenti i okupljaju vjernici svih generacija.
        </p>

        <p>
          Župa slavi svoj glavni blagdan <strong>sv. Martina biskupa</strong>
          <strong>11. studenoga</strong>, kada se tradicionalno održava
          proštenje i svečano euharistijsko slavlje.
        </p>
      </article>

      <!-- IMAGE / INFO -->
      <div class="space-y-6">
        <img
            src="/slika.jpg"
            alt="Župna crkva sv. Martina"
            class="rounded-lg shadow-sm"
        />

        <div
            class="
            border border-[#e6e3dd] rounded-lg p-6
            bg-white
          "
        >
          <h2 class="text-lg font-semibold mb-4">
            Osnovne informacije
          </h2>

          <ul class="space-y-2 text-sm text-[#4b4b4b]">
            <li>
              <strong>Zaštitnik:</strong> sv. Martin biskup
            </li>
            <li>
              <strong>Prvi spomen:</strong> 1334. godina
            </li>
            <li>
              <strong>Blagdan:</strong> 11. studenoga
            </li>
            <li>
              <strong>Mjesto:</strong> Sveti Martin pod Okićem
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="max-w-5xl mx-auto px-6 pb-24">
      <h2 class="text-2xl font-serif mb-6">Lokacija</h2>
      <ParishMap />
    </div>
  </section>
</template>
