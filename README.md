<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="MIT License" />
</p>

# 🕌 Tarkib UI

**Kumpulan komponen UI modern yang siap copas buat mempercepat workflow ente.**

Tarkib UI lahir dari keresahan developer yang sering bikin komponen dasar berulang-ulang. Button lagi, Input lagi, Card lagi. Capek kan? Di sini, ane sediain komponen yang **Accessible**, **Customizable**, dan **Modern** — tinggal copy kodenya, paste di file ente. Gak perlu install npm package berat.

---

## ✨ Filosofi "Copy Paste"

> Idenya adalah memberikan ente kepemilikan penuh atas kode. Ente bisa ubah warnanya, animasinya, atau logic-nya tanpa harus nunggu update library.

---

## 📦 Daftar Komponen (15 Komponen)

| Kategori | Komponen | Deskripsi |
|----------|----------|-----------|
| **Form** | Button | 6 varian tombol (default, secondary, outline, destructive, ghost, link) |
| | Input | Input teks dengan focus ring |
| | Textarea | Input area teks yang bisa di-resize |
| | Switch | Toggle on/off dengan animasi smooth |
| **Data Display** | Card | Kontainer serbaguna (Header, Title, Content, Footer) |
| | Badge | Label kecil — 6 varian warna |
| | Avatar | Foto profil dengan fallback inisial + AvatarGroup |
| | Separator | Garis pemisah horizontal/vertical |
| | Skeleton | Placeholder shimmer saat loading |
| | Progress | Bar progres animasi + gradient, 3 ukuran, 5 warna |
| **Overlay** | Dialog | Modal pop-up dengan backdrop + animasi zoom |
| | Tooltip | Info hover 4 arah (atas/bawah/kiri/kanan) |
| | Alert | Kotak pesan 5 varian + icon otomatis |
| **Navigation** | Tabs | Tab navigasi dengan konten switching |
| | Accordion | Konten collapsible smooth (single/multiple) |

---

## 🚀 Quick Start

### 1. Bikin project React

```bash
npm create vite@latest nama-project -- --template react-ts
cd nama-project
```

### 2. Install dependencies

```bash
npm install tailwindcss @tailwindcss/vite
npm install clsx tailwind-merge class-variance-authority
```

### 3. Setup Tailwind di `vite.config.ts`

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### 4. Bikin helper `cn()` di `src/lib/utils.ts`

```ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 5. Copy paste komponen dari docs!

Pergi ke halaman komponen, klik tab **"Kodingan (Code)"**, dan copy paste ke `src/components/ui/`.

---

## 🛠️ Tech Stack

- **React 18** + **TypeScript**
- **Tailwind CSS v4**
- **Vite** (build tool)
- **class-variance-authority** (CVA) — variant management
- **clsx** + **tailwind-merge** — class merging
- **Lucide React** — icons

---

## 📁 Struktur Project

```
src/
├── components/
│   ├── common/          # ComponentPreview, Toast
│   ├── layout/          # Navbar, Sidebar, Layout
│   └── ui/              # 15 komponen UI
├── hooks/               # Custom hooks (useToast)
├── lib/                 # Utils & code strings
├── pages/               # Landing, Docs, Component pages
│   └── components/      # Halaman per komponen
├── App.tsx              # Router utama
└── index.css            # Design system & animasi
```

---

## 💻 Development

```bash
# Install dependencies
npm install

# Jalankan dev server
npm run dev

# Build production
npm run build
```

---

## 📝 License

MIT License — bebas dipake buat project pribadi maupun komersial.

---

<p align="center">
  Dibuat dengan ❤️ oleh <a href="https://github.com/ibraiiian">Ibrahim</a>
</p>
