import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Features } from './components/Features';
import { FAQ } from './components/FAQ';
import { DownloadCard } from './components/DownloadCard';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        {/* Benefits focuses on "Killer Features" (Offline, Sync, etc) */}
        <Benefits />
        {/* Features is the large 4-category grid */}
        <Features />
        <FAQ />
        <DownloadCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;