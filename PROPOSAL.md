# PROPOSAL PROJECT WEBSITE
## Tourged.id — Platform Digital Wisata Jepang

---

**Nama Usaha** : Tourged.id  
**Tagline** : Memberikan Experience Perjalanan Jepang Kamu Makin Berkesan  
**Perusahaan** : CV. Liburan Bahagia Bersama  
**Tanggal** : April 2026  

---

## 1. RINGKASAN EKSEKUTIF

CV. Liburan Bahagia Bersama melalui brand **Tourged.id** mengembangkan platform website resmi sebagai pusat informasi, pemasaran, dan konten wisata Jepang yang ditujukan untuk traveler Indonesia. Website ini dibangun di atas teknologi modern berbasis Next.js dengan sistem manajemen konten (CMS) terintegrasi, serta optimasi gambar dan performa tinggi untuk mendukung pertumbuhan bisnis secara digital.

---

## 2. LATAR BELAKANG

Meningkatnya minat wisatawan Indonesia ke Jepang pasca-pandemi menciptakan peluang besar bagi tour operator yang mampu hadir secara digital dengan pengalaman pengguna yang baik. Tourged.id hadir untuk mengisi ruang tersebut dengan pendekatan yang personal, informatif, dan mudah diakses melalui website yang cepat, SEO-friendly, dan mudah dikelola tanpa keahlian teknis khusus.

---

## 3. TUJUAN PROJECT

1. Membangun kehadiran digital resmi Tourged.id yang profesional dan terpercaya
2. Menyediakan platform konten blog & artikel wisata Jepang yang mudah diperbarui
3. Mengoptimalkan performa website untuk pencarian Google (SEO)
4. Mengelola galeri foto destinasi wisata secara efisien
5. Mendukung proses konversi calon pelanggan menjadi konsumen aktif

---

## 4. RUANG LINGKUP PEKERJAAN

### 4.1 Halaman yang Dibangun

| Halaman | Keterangan | Status |
|---------|-----------|--------|
| Beranda (Home) | Hero, Layanan, Cara Kerja, Testimoni, Blog Preview, CTA | Selesai |
| Blog — Daftar Artikel | Listing semua artikel dengan kategori | Selesai |
| Blog — Detail Artikel | Konten artikel lengkap, SEO per artikel | Selesai |
| Paket Private Trip | Detail paket, harga, CTA WhatsApp | Selesai |
| Paket One Day Tour | Detail paket & informasi | Perlu dibuat |
| Paket Company Trip | Detail paket & informasi | Perlu dibuat |
| Paket Honeymoon | Detail paket & informasi | Perlu dibuat |
| Tentang Kami (About) | Profil perusahaan, tim, visi misi | Selesai |
| Galeri Foto | Tampilan foto destinasi dari ImageKit | Perlu dibuat |
| Kontak | Form & informasi kontak | Perlu dibuat |

### 4.2 Sistem CMS (Content Management System)

- Manajemen artikel blog (tambah, edit, hapus, jadwalkan publish)
- Manajemen halaman paket wisata
- Manajemen testimoni pelanggan
- Manajemen galeri foto per destinasi
- Upload & optimasi gambar otomatis
- SEO per konten (meta title, description, OG image)

### 4.3 Integrasi Pihak Ketiga

| Layanan | Fungsi |
|---------|--------|
| Sanity.io | Headless CMS — manajemen konten & artikel |
| ImageKit | CDN & optimasi gambar — galeri foto destinasi |
| Vercel | Hosting & deployment website |
| WhatsApp API | Tombol konsultasi langsung ke nomor bisnis |
| Google Analytics | Tracking pengunjung & perilaku user |

---

## 5. ARSITEKTUR SISTEM

```
┌─────────────────────────────────────────────┐
│              ADMIN / TIM KONTEN              │
│                                             │
│  Sanity Studio (CMS)    ImageKit Dashboard  │
│  • Tulis artikel        • Upload foto       │
│  • Edit konten          • Kelola galeri     │
└──────────────┬──────────────────┬───────────┘
               │                  │
               ▼                  ▼
┌─────────────────────────────────────────────┐
│           NEXT.JS (di Vercel)               │
│                                             │
│  Fetch data dari Sanity API                 │
│  Fetch gambar dari ImageKit CDN             │
│  Generate halaman statis (SSG/ISR)          │
│  Optimasi SEO per halaman                   │
└──────────────────────────────┬──────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────┐
│           PENGUNJUNG / USER                 │
│                                             │
│  tourged.id  →  Website cepat, SEO tinggi  │
│  blog.tourged.id  →  Blog lama (Hostinger) │
└─────────────────────────────────────────────┘
```

---

## 6. TECH STACK

| Layer | Teknologi | Alasan |
|-------|-----------|--------|
| **Framework** | Next.js 16 + TypeScript | SSR/SSG, SEO optimal, performa tinggi |
| **Styling** | Bootstrap 5 | Responsif, konsisten, cepat develop |
| **CMS** | Sanity.io | Headless CMS, mudah digunakan, gratis |
| **Image CDN** | ImageKit | Optimasi & kompresi otomatis, CDN global |
| **Hosting** | Vercel | Gratis, deploy otomatis dari Git, CDN global |
| **Domain** | Hostinger | Registrar domain + email bisnis |
| **Analytics** | Google Analytics 4 | Tracking performa konten & iklan |

---

## 7. FITUR UNGGULAN

### Website
- Desain responsif — optimal di mobile, tablet, dan desktop
- Loading cepat — skor PageSpeed 90+ target
- HTTPS otomatis via Vercel SSL
- Integrasi tombol WhatsApp untuk konversi langsung

### Blog & Konten
- Artikel dengan rich text (heading, gambar, list, link)
- Kategori artikel (Musim Bunga, Kuliner, Budaya, Tips Perjalanan, dll)
- Estimasi waktu baca
- Related articles di tiap artikel
- Sitemap otomatis untuk Google

### SEO
- Meta title & description per halaman
- Open Graph image untuk share di media sosial
- Schema markup untuk artikel (structured data)
- URL slug yang bersih dan deskriptif
- Sitemap XML otomatis

### Galeri
- Foto per destinasi (Tokyo, Kyoto, Osaka, dll)
- Optimasi otomatis — convert ke WebP
- Lazy loading gambar
- Lightbox untuk tampilan fullscreen

---

## 8. STRUKTUR URL

```
tourged.id/                        → Beranda
tourged.id/about                   → Tentang Kami
tourged.id/blog                    → Semua Artikel
tourged.id/blog/[slug-artikel]     → Detail Artikel
tourged.id/packages/private-trip   → Paket Private Trip
tourged.id/packages/one-day-tour   → Paket One Day Tour
tourged.id/packages/company-trip   → Paket Company Trip
tourged.id/packages/honeymoon      → Paket Honeymoon
tourged.id/gallery                 → Galeri Foto
tourged.id/contact                 → Kontak

blog.tourged.id/                   → Blog lama (Hostinger — existing)
```

---

## 9. ESTIMASI BIAYA

### 9.1 Biaya Jasa Pengembangan

| Item | Biaya | Keterangan |
|------|-------|-----------|
| Desain & Development Website | Rp 2.000.000 | Frontend semua halaman, responsif, Bootstrap 5 |
| Integrasi CMS & ImageKit | Rp 700.000 | Setup Sanity, koneksi ke Next.js, galeri foto |
| Setup Deployment & Domain | Rp 300.000 | Vercel, DNS, subdomain, SSL |
| **TOTAL JASA** | **Rp 3.000.000** | Pembayaran sesuai kesepakatan |

### 9.2 Biaya Operasional Tahunan

| Item | Biaya/Tahun | Keterangan |
|------|-------------|-----------|
| Domain `.id` | ~Rp 200.000 | Di Hostinger (sudah ada) |
| Hosting Hostinger | Sudah ada | Digunakan untuk email & blog lama |
| Vercel | Rp 0 | Free plan — cukup untuk skala ini |
| Sanity.io | Rp 0 | Free plan — 10GB storage |
| ImageKit | Rp 0 | Free plan — 20GB storage |
| Google Analytics | Rp 0 | Gratis |
| **TOTAL OPERASIONAL** | **~Rp 200.000/tahun** | Hanya perpanjangan domain |

### 9.3 Skema Pembayaran

| Termin | Persentase | Nominal | Waktu |
|--------|-----------|---------|-------|
| DP | 50% | Rp 1.500.000 | Sebelum pengerjaan dimulai |
| Pelunasan | 50% | Rp 1.500.000 | Setelah website selesai & disetujui |

---

## 10. TAHAPAN PENGERJAAN

### Fase 1 — Setup Infrastruktur (Estimasi: 3-5 hari)
- [ ] Setup akun Sanity.io & konfigurasi schema konten
- [ ] Setup akun ImageKit & konfigurasi CDN
- [ ] Deploy website ke Vercel
- [ ] Connect domain tourged.id ke Vercel
- [ ] Setup subdomain blog.tourged.id ke Hostinger

### Fase 2 — Integrasi CMS (Estimasi: 5-7 hari)
- [ ] Integrasi Next.js + Sanity untuk halaman blog
- [ ] Integrasi Next.js + ImageKit untuk galeri foto
- [ ] Migrasi data artikel statis ke Sanity
- [ ] Testing CMS — pastikan admin bisa update konten

### Fase 3 — Halaman Tambahan (Estimasi: 3-5 hari)
- [ ] Halaman Galeri Foto
- [ ] Halaman Kontak
- [ ] Halaman Paket (One Day Tour, Company Trip, Honeymoon)

### Fase 4 — SEO & Optimasi (Estimasi: 2-3 hari)
- [ ] Setup Google Analytics 4
- [ ] Generate sitemap otomatis
- [ ] Submit ke Google Search Console
- [ ] Audit performa (PageSpeed Insights)

### Fase 5 — Training & Handover (Estimasi: 1 hari)
- [ ] Pelatihan penggunaan Sanity CMS untuk tim konten
- [ ] Pelatihan upload gambar di ImageKit
- [ ] Dokumentasi cara update konten

**Total Estimasi Pengerjaan: 2-3 Minggu**

---

## 11. KEBUTUHAN DARI KLIEN

Untuk kelancaran pengerjaan, dibutuhkan:

1. **Konten** — Teks final untuk halaman About, Paket, Kontak
2. **Foto** — Foto tim, foto destinasi (minimal 20 foto resolusi tinggi)
3. **Nomor WhatsApp** — Nomor bisnis aktif untuk tombol konsultasi
4. **Email bisnis** — Email resmi (misal `hello@tourged.id`)
5. **Akses domain** — Akses ke panel Hostinger untuk setting DNS
6. **Logo** — File logo dalam format PNG/SVG

---

## 12. KESIMPULAN

Platform digital Tourged.id yang dibangun dengan stack Next.js + Sanity + ImageKit + Vercel memberikan fondasi yang kuat, scalable, dan tanpa biaya operasional tambahan untuk jangka pendek. Website ini dirancang untuk tumbuh bersama bisnis — mudah dikelola oleh tim non-teknis, cepat diakses pengguna, dan ramah mesin pencari Google.

Dengan infrastruktur ini, CV. Liburan Bahagia Bersama memiliki aset digital yang kompetitif dan siap mendukung pertumbuhan bisnis wisata Jepang secara berkelanjutan.

---

*Dokumen ini disiapkan untuk keperluan internal CV. Liburan Bahagia Bersama.*  
*Tourged.id — Memberikan Experience Perjalanan Jepang Kamu Makin Berkesan*
