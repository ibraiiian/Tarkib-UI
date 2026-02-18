TECHNICAL SPECIFICATION & PRD: TARKIB UI
Version: 1.0.0 (Foundation)
Author: Ibrahim Bahaly
Framework: React (Vite) + TypeScript + Tailwind CSS
Architecture: Copy-Paste Registry (Headless + Styled)

1. BRAND IDENTITY & COPYWRITING (STRICT)
The AI must strictly adhere to this persona. Do not deviate.

App Name: Tarkib UI

Persona: "The Tech Akhi" (Professional, Friendly, Religious but Casual).

Language: Indonesian (Bahasa Gaul) mixed with "Arab Condet" Slang.

The "Arab Condet" Dictionary (Implementation Guide)
Use these exact terms for UI labels:
| Standard English | Tarkib UI Term | Context |
| :--- | :--- | :--- |
| Get Started | Bismillah, Mulai | Hero Button |
| Introduction | Muqaddimah | Sidebar Header |
| Installation | Kaifiyat Install | Sidebar Item |
| Components | Gudang Komponen | Sidebar Header |
| Search | Cari Barang... | Search Input |
| Copy Code | Salin (Copy) | Button Label |
| Copied! | Alhamdulillah, kecopy! | Toast Success |
| Error / 404 | Astaghfirullah, Ghoib | Error Message |
| Hidden | Ghoib | Empty State |
| You | Ente | General Text |
| Me/Us | Ane | General Text |
| Cool | Ajib / Mumtaz | Marketing Copy |

2. DESIGN SYSTEM & THEMING
2.1 Color Palette (CSS Variables)
Do not use hardcoded hex values in components. Use these variables in src/index.css.

CSS
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Base */
    --background: 0 0% 100%;       /* White */
    --foreground: 240 10% 3.9%;    /* Dark Grey */

    /* Primary (Islamic Green / Deep Teal) */
    --primary: 175 84% 32%;        /* Hex: #0D9488 (Teal-600) */
    --primary-foreground: 0 0% 100%;

    /* Secondary */
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;

    /* Muted */
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;

    /* Accent */
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;

    /* Destructive */
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;

    /* Border & Radius */
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 175 84% 32%;           /* Matches Primary */
    --radius: 0.5rem;
  }
}
2.2 Typography
Font Family: Inter, sans-serif (Default).

Headings: Bold, Tracking-tight.

3. FILE STRUCTURE & ARCHITECTURE
Strictly follow this tree. Do not create src/components/MyComponent.tsx. Use the ui folder.

Plaintext
src/
├── assets/               # Static images
├── components/
│   ├── ui/               # [PRODUCT] Raw components (Button.tsx, Input.tsx)
│   ├── demo/             # [DOCS] Usage examples (ButtonDemo.tsx)
│   ├── layout/           # [DOCS] Layout components
│   │   ├── Sidebar.tsx
│   │   ├── Navbar.tsx
│   │   └── Layout.tsx    # Wraps the pages
│   └── common/           # [DOCS] Internal tools
│       ├── ComponentPreview.tsx
│       └── CodeBlock.tsx
├── hooks/
│   └── use-toast.ts      # For "Alhamdulillah" notifications
├── lib/
│   └── utils.ts          # The cn() helper
├── pages/
│   ├── LandingPage.tsx   # Homepage
│   ├── DocsPage.tsx      # Documentation wrapper
│   └── components/       # Individual component pages
│       └── ButtonPage.tsx
├── App.tsx               # Main Routes
└── main.tsx              # Entry point
4. CORE UTILITIES (MANDATORY CODE)
4.1 src/lib/utils.ts
This file is required for all components to function.

TypeScript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
4.2 Dependencies
Ensure these are installed:
npm install clsx tailwind-merge class-variance-authority lucide-react react-router-dom framer-motion

5. UI COMPONENT SPECIFICATIONS (MVP)
5.1 Button Component (src/components/ui/button.tsx)
Library: Use class-variance-authority (cva).

Props: extends React.ButtonHTMLAttributes<HTMLButtonElement>.

Variants:

default: bg-primary text-primary-foreground hover:bg-primary/90

destructive: bg-destructive text-destructive-foreground

outline: border border-input bg-background hover:bg-accent

secondary: bg-secondary text-secondary-foreground

ghost: hover:bg-accent hover:text-accent-foreground

link: text-primary underline-offset-4 hover:underline

Sizes: default, sm, lg, icon.

5.2 Layout Components
Navbar: Fixed top. Height h-14 or h-16. Contains Logo ("Tarkib UI") and Github Link.

Sidebar:

Sticky left side on Desktop (w-64).

Hidden on Mobile (Use Sheet/Drawer logic).

Must use the "Arab Condet" naming convention defined in Section 1.

6. PAGE CONTENT & COPYWRITING (EXACT TEXT)
6.1 Landing Page (/)
Hero Section:

H1: "Bikin Web Kenceng Pake Komponen yang Ajib & Barokah."

Subtext: "Gak usah pusing bikin dari nol, Akhi. Ane udah siapin komponen React + Tailwind rapi. Ente tinggal comot, tempel, kelar urusan."

Primary CTA: Button variant 'default' -> Text: "Bismillah, Mulai" (Links to /docs/introduction).

Secondary CTA: Button variant 'outline' -> Text: "Lihat GitHub".

6.2 Documentation Page (/docs/*)
Sidebar Structure:

Muqaddimah (Introduction, About)

Persiapan (Installation, Theming)

Gudang Komponen (Button, Input, Card, Badge)

7. FUNCTIONAL REQUIREMENTS
Routing: Use react-router-dom.

Path / -> LandingPage

Path /docs -> Layout -> DocsPage

Path /docs/components/button -> ButtonPage

Component Previewer:

Must have tabs: "Tampilan" (Preview) and "Kodingan" (Code).

Code block must show the raw string of the component.

Copy button must trigger the toast: "Alhamdulillah, kecopy!".