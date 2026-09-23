# 🚀 Personal Portfolio Landing Page

Selamat datang di repositori kode sumber (*source code*) untuk landing page portfolio pribadi saya! Website ini dirancang dengan standar modern untuk menampilkan profil, keterampilan, serta proyek-proyek terbaik saya kepada calon klien atau perekrut.

Proyek ini dibangun menggunakan arsitektur komponen modular agar kode tetap bersih, mudah dipelihara, dan dikembangkan di masa mendatang.

---

## 🛠️ Tech Stack (Teknologi yang Digunakan)

Website portfolio ini dibangun menggunakan kombinasi teknologi modern web development berikut:

* **Framework:** [Next.js](https://next.js.org/) (dengan App Router)
* **Library UI:** [React](https://react.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Bahasa Pemrograman:** [TypeScript](https://www.typescriptlang.org/)
* **Backend & Database:** [Firebase Firestore](https://firebase.google.com/) (untuk penyimpanan data kontak/pesan)

---

## 📂 Struktur Komponen Proyek

Proyek ini dibagi menjadi beberapa komponen terisolasi agar lebih terstruktur:

1. **`Navbar.tsx`** - Bilah navigasi responsif di bagian atas halaman untuk memudahkan perpindahan antar bagian.
2. **`Hero.tsx`** - Bagian sambutan utama (*banner*) di halaman teratas yang memperkenalkan identitas singkat Anda.
3. **`About.tsx`** - Bagian biografi, latar belakang, serta daftar keahlian (*skills*) yang dikuasai.
4. **`Portfolio.tsx`** - Galeri interaktif yang memamerkan daftar proyek atau karya yang telah dikerjakan.
5. **`Contact.tsx`** - Formulir kontak interaktif yang terhubung langsung dengan Firebase Firestore untuk mengirim pesan.
6. **`Footer.tsx`** - Bagian penutup halaman yang berisi hak cipta (*copyright*) dan tautan media sosial.

---

## ⚙️ Cara Menjalankan Proyek Secara Lokal

Jika Anda ingin menjalankan atau menguji kode ini di komputer Anda sendiri, ikuti langkah-langkah mudah di bawah ini:

### Prasyarat
Pastikan komputer Anda sudah menginstal:
* [Node.js](https://nodejs.org/) (versi LTS direkomendasikan)
* Git (untuk mengunduh repositori)

### Langkah-langkah Instalasi:

1. **Clone repositori ini ke komputer Anda**
   ```bash
   git clone https://github.com/gyenisasyofiaa/portofolio.git
   ```

2. **Masuk ke direktori proyek**
   ```bash
   cd portofolio
   ```

3. **Install semua *dependencies* yang diperlukan**
   ```bash
   npm install
   ```
   *(Atau Anda bisa menggunakan `yarn install` / `pnpm install`)*

4. **Konfigurasi Environment Variables (Opsional / Jika menggunakan Firebase)**
   Buat file bernama `.env.local` di akar direktori proyek Anda, lalu masukkan konfigurasi Firebase Anda:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

5. **Jalankan server lokal (development mode)**
   ```bash
   npm run dev
   ```

6. **Buka di Browser**
   Buka browser Anda dan akses tautan berikut:
   `http://localhost:3000`

---

## 🌐 Live Demo

Anda dapat melihat hasil *deployment* (versi online) dari portfolio ini melalui tautan berikut:
👉 [https://gyenisa.vercel.app] 

---

## 🤝 Kontribusi & Kontak

Jika Anda memiliki pertanyaan, saran, atau ingin berkolaborasi, silakan hubungi saya melalui:
* **Email:** gyenisasyofiaa@gmail.com
* **LinkedIn:** https://linkedin/in/gyenisa-syofia
* **WhatsApp:** 082286764277
