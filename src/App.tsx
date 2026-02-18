import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { DocsLayout } from '@/components/layout/Layout'

import LandingPage from '@/pages/LandingPage'
import DocsIntroPage from '@/pages/DocsIntroPage'
import ButtonPage from '@/pages/components/ButtonPage'
import InputPage from '@/pages/components/InputPage'
import CardPage from '@/pages/components/CardPage'
import BadgePage from '@/pages/components/BadgePage'
import AvatarPage from '@/pages/components/AvatarPage'
import SwitchPage from '@/pages/components/SwitchPage'
import TextareaPage from '@/pages/components/TextareaPage'
import SeparatorPage from '@/pages/components/SeparatorPage'
import SkeletonPage from '@/pages/components/SkeletonPage'
import TabsPage from '@/pages/components/TabsPage'
import AccordionPage from '@/pages/components/AccordionPage'
import AlertPage from '@/pages/components/AlertPage'
import ProgressPage from '@/pages/components/ProgressPage'
import TooltipPage from '@/pages/components/TooltipPage'
import DialogPage from '@/pages/components/DialogPage'
import ComingSoonPage from '@/pages/ComingSoonPage'
import InstallationPage from '@/pages/InstallationPage'
import UtilsPage from '@/pages/UtilsPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-100">
        <Navbar />

        <Routes>
          {/* Landing */}
          <Route path="/" element={<LandingPage />} />

          {/* Docs — wrapped in DocsLayout (Sidebar + Content) */}
          <Route path="/docs" element={<DocsLayout />}>
            <Route path="introduction" element={<DocsIntroPage />} />
            <Route path="installation" element={<InstallationPage />} />
            <Route path="utils" element={<UtilsPage />} />
            <Route path="components/button" element={<ButtonPage />} />
            <Route path="components/input" element={<InputPage />} />
            <Route path="components/textarea" element={<TextareaPage />} />
            <Route path="components/card" element={<CardPage />} />
            <Route path="components/badge" element={<BadgePage />} />
            <Route path="components/avatar" element={<AvatarPage />} />
            <Route path="components/switch" element={<SwitchPage />} />
            <Route path="components/separator" element={<SeparatorPage />} />
            <Route path="components/skeleton" element={<SkeletonPage />} />
            <Route path="components/tabs" element={<TabsPage />} />
            <Route path="components/accordion" element={<AccordionPage />} />
            <Route path="components/alert" element={<AlertPage />} />
            <Route path="components/progress" element={<ProgressPage />} />
            <Route path="components/tooltip" element={<TooltipPage />} />
            <Route path="components/dialog" element={<DialogPage />} />
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<ComingSoonPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
