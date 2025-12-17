
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Features } from './components/Features';
import { HardwareTrust } from './components/HardwareTrust';
import { FAQ } from './components/FAQ';
import { DownloadCard } from './components/DownloadCard';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        {/* Benefícios focam nos diferenciais de performance */}
        <Benefits />
        {/* HardwareTrust reforça a compatibilidade física */}
        <HardwareTrust />
        {/* Features mostra a grelha completa de funções */}
        <Features />
        <FAQ />
        <DownloadCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
