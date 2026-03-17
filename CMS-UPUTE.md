# CMS Upute - Župa Sveti Martin pod Okićem

## Pristup CMS-u

1. Idite na: `https://vasa-domena.com/admin`
2. Prijavite se s Netlify Identity računom

## Kako koristiti CMS

### 1. Raspored misa

- Kliknite na **"Raspored misa"** → **"Tjedni raspored"**
- Unesite vremena za:
  - Nedjelja (npr. "08:00 · 10:30 · 18:30")
  - Radni dan (npr. "18:00")
  - Blagdani (npr. "09:00 · 11:00")
  - Napomena (bilo kakve dodatne informacije)
- Kliknite **"Publish"** → **"Publish now"**

### 2. Novosti

**Dodavanje nove obavijesti:**
1. Kliknite na **"Novosti"**
2. Kliknite **"New Novosti"**
3. Ispunite polja:
   - **Naslov**: Naslov obavijesti
   - **Datum**: Datum objave
   - **Kratki opis**: Kratak sažetak (prikazuje se na listi)
   - **Sadržaj**: Puni tekst obavijesti (podržava markdown)
4. Kliknite **"Publish"** → **"Publish now"**

**Uređivanje postojeće obavijesti:**
1. Kliknite na obavijest koju želite urediti
2. Napravite izmjene
3. Kliknite **"Publish"** → **"Publish now"**

### 3. Galerija

**Dodavanje slike:**
1. Kliknite na **"Galerija"**
2. Kliknite **"New Galerija"**
3. Ispunite polja:
   - **Naslov**: Naslov događaja/slike
   - **Kategorija**: Vrsta događaja (npr. "Krizma", "Proslava", "Okupljanje")
   - **Datum**: Datum događaja
   - **Slika**: Kliknite **"Choose an image"** i odaberite sliku s računala
   - **Opis**: Kratak opis slike/događaja (opcionalno)
4. Kliknite **"Publish"** → **"Publish now"**

**Napomena:** Slike se automatski spremaju u `public/uploads/` mapu.

## Workflow

CMS koristi **Editorial Workflow** što znači:
- **Drafts**: Nedovršeni sadržaj
- **In Review**: Sadržaj spreman za pregled
- **Ready**: Sadržaj spreman za objavu

Pritisnite **"Publish now"** da odmah objavite promjene na stranici.

## Česti problemi

**Problem: Ne vidim promjene na stranici**
- Riješenje: Provjerite jeste li kliknuli "Publish now", a ne samo "Save"
- Pričekajte 1-2 minute da se stranica ponovno izgradi (rebuild)

**Problem: Slika se ne prikazuje**
- Riješenje: Provjerite da ste uploadali sliku u CMS, a ne samo napisali putanju
- Format slike treba biti JPG, PNG ili WebP

**Problem: Greška prilikom objavljivanja**
- Riješenje: Odjavite se i ponovo prijavite
- Provjerite internet vezu

## Markdown osnove (za Novosti)

```markdown
# Veliki naslov
## Manji naslov

**podebljano**
*kurziv*

- Lista stavka 1
- Lista stavka 2

1. Numerirana lista 1
2. Numerirana lista 2
```

## Podrška

Za tehničku pomoć, kontaktirajte web administratora.
