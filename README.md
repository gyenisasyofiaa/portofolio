🚀 Personal Portfolio Landing Page

Selamat datang di repositori kode sumber (source code) untuk landing page portfolio pribadi saya! Website ini dirancang dengan standar modern untuk menampilkan profil, keterampilan, serta proyek-proyek terbaik saya kepada calon klien atau perekrut.

Proyek ini dibangun menggunakan arsitektur komponen modular agar kode tetap bersih, mudah dipelihara, dan dikembangkan di masa mendatang.

🛠️ Tech Stack (Teknologi yang Digunakan)

Website portfolio ini dibangun menggunakan kombinasi teknologi modern web development berikut:
Framework: Next.js (dengan App Router)
Library UI: React
Styling: Tailwind CSS
Bahasa Pemrograman: TypeScript
Backend & Database: Firebase Firestore (untuk penyimpanan data kontak/pesan)

📂 Struktur Komponen Proyek

Proyek ini dibagi menjadi beberapa komponen terisolasi agar lebih terstruktur:

Navbar.tsx - Bilah navigasi responsif di bagian atas halaman untuk memudahkan perpindahan antar bagian.
Hero.tsx - Bagian sambutan utama (banner) di halaman teratas yang memperkenalkan identitas singkat Anda.
About.tsx - Bagian biografi, latar belakang, serta daftar keahlian (skills) yang dikuasai.
Portfolio.tsx - Galeri interaktif yang memamerkan daftar proyek atau karya yang telah dikerjakan.
Contact.tsx - Formulir kontak interaktif yang terhubung langsung dengan Firebase Firestore untuk mengirim pesan.
Footer.tsx - Bagian penutup halaman yang berisi hak cipta (copyright) dan tautan media sosial.

⚙️ Cara Menjalankan Proyek Secara Lokal

Jika Anda ingin menjalankan atau menguji kode ini di komputer Anda sendiri, ikuti langkah-langkah mudah di bawah ini:

Prasyarat
Pastikan komputer Anda sudah menginstal:
Node.js (versi LTS direkomendasikan)
Git (untuk mengunduh repositori)

Langkah-langkah Instalasi:
Clone repositori ini ke komputer Anda
git clone https://github.com/gyenisasyofiaa/portofolio.git

Masuk ke direktori proyek
cd nama-repo-anda

Install semua dependencies yang diperlukan
npm install
(Atau Anda bisa menggunakan yarn install / pnpm install)

Konfigurasi Environment Variables (Opsional / Jika menggunakan Firebase)
Buat file bernama .env.local di akar direktori proyek Anda, lalu masukkan konfigurasi Firebase Anda:

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id


Jalankan server lokal (development mode)
npm run dev

Buka di Browser
Buka browser Anda dan akses tautan berikut:
http://localhost:3000

🌐 Live Demo
Anda dapat melihat hasil deployment (versi online) dari portfolio ini melalui tautan berikut:
👉 https://gyenisa.vercel.app (Ganti dengan tautan Vercel / Netlify Anda)
🤝 Kontribusi & Kontak

Jika Anda memiliki pertanyaan, saran, atau ingin berkolaborasi, silakan hubungi saya melalui:

Email: gyenisasyofiaa@.com
LinkedIn: www.linkedin.com/in/gyenisa-syofia
WhatsApp: 082286764277
