# DOPPER-CSIRT Web

Portal statis untuk DOPPER-CSIRT (Tim Tanggap Insiden Respon) yang menyajikan informasi mengenai mandat, layanan, serta kanal pelaporan insiden siber.

## Struktur

- `index.html` – halaman utama berbahasa Indonesia dengan navigasi, hero, layanan, pelaporan, berita, dan kontak.
- `styles.css` – gaya bertema formal layaknya portal pemerintahan.
- `script.js` – interaksi ringan (menu mobile, tombol ke atas, tahun dinamis, dan respon formulir simulasi).

## Menjalankan Secara Lokal

Gunakan server statis apa pun. Contoh dengan Python:

```bash
cd /workspaces/webTTIS
python3 -m http.server 8080
```

Kemudian buka `http://localhost:8080` di peramban untuk melihat situs.

## Penyesuaian

- Perbarui teks hero, statistik, atau berita di `index.html` sesuai perkembangan terbaru.
- Sesuaikan warna/typografi pada `styles.css` bila dibutuhkan.
- Ganti logika `script.js` untuk menghubungkan formulir ke backend aktual bila sudah tersedia.
