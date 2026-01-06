
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { PageType } from './types';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageType>(PageType.HOME);

  // Smooth scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const renderContent = () => {
    switch (activePage) {
      case PageType.HOME:
        return (
          <div className="animate-in fade-in duration-700">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
              <img 
                src="https://picsum.photos/seed/fashion-main/1920/1080" 
                className="absolute w-full h-full object-cover brightness-75 scale-105 transition-transform duration-[5000ms] hover:scale-100" 
                alt="Main Fashion" 
              />
              <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-5xl md:text-8xl mb-6 font-serif tracking-tight">Elegance in Silence</h1>
                <p className="text-lg md:text-xl font-light tracking-[0.2em] uppercase max-w-2xl mx-auto">
                  Exploring the convergence of Japanese minimalism and European grandeur.
                </p>
                <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
                  <button 
                    onClick={() => setActivePage(PageType.JAPAN_COLLECTION)}
                    className="px-8 py-4 bg-white text-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                  >
                    The Japan Series
                  </button>
                  <button 
                    onClick={() => setActivePage(PageType.EUROPE_COLLECTION)}
                    className="px-8 py-4 border border-white text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                  >
                    The Europe Series
                  </button>
                </div>
              </div>
            </section>

            {/* Featured Section */}
            <section className="py-24 max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block">Our Narrative</span>
                  <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Two Hemispheres. One Aesthetic.</h2>
                  <p className="text-gray-600 leading-loose mb-8 font-light italic">
                    "Fashion is not just the cloth we wear, but the geography we carry. From the quiet streets of Kyoto to the bustling avenues of Paris, we find a shared language of quality and intent."
                  </p>
                  <button 
                    onClick={() => setActivePage(PageType.ABOUT)}
                    className="text-xs uppercase tracking-widest font-bold border-b-2 border-black pb-1 hover:text-gray-500 transition"
                  >
                    Discover Our Story
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img src="https://picsum.photos/seed/detail1/600/800" className="w-full aspect-[3/4] object-cover rounded-sm shadow-xl mt-12" alt="Detail 1" />
                  <img src="https://picsum.photos/seed/detail2/600/800" className="w-full aspect-[3/4] object-cover rounded-sm shadow-xl" alt="Detail 2" />
                </div>
              </div>
            </section>
          </div>
        );

      case PageType.JAPAN_COLLECTION:
        return (
          <div className="pt-24 pb-24 px-4 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header className="mb-20 text-center">
              <h2 className="text-6xl font-serif mb-4">The Japan Series</h2>
              <p className="text-gray-400 uppercase tracking-widest text-xs">Indigo, Sashiko, and Serenity</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCTS.filter(p => p.category === 'Japan').map(product => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="overflow-hidden mb-4 aspect-[4/5] bg-gray-100">
                    <img src={product.image} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" alt={product.name} />
                  </div>
                  <h3 className="font-serif text-xl mb-1">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{product.description}</p>
                  <span className="text-sm font-semibold">{product.price}</span>
                </div>
              ))}
              <div className="bg-stone-900 text-white p-12 flex flex-col justify-center items-center text-center aspect-[4/5]">
                <h3 className="text-2xl font-serif mb-4 italic">Bespoke Kimono</h3>
                <p className="text-xs text-gray-400 mb-8 leading-relaxed">
                  Tailored by hand in our Kyoto workshop using vintage looms.
                </p>
                <button className="px-6 py-3 border border-white text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition">Inquire</button>
              </div>
            </div>
          </div>
        );

      case PageType.EUROPE_COLLECTION:
        return (
          <div className="pt-24 pb-24 px-4 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header className="mb-20 text-center">
              <h2 className="text-6xl font-serif mb-4">The Europe Series</h2>
              <p className="text-gray-400 uppercase tracking-widest text-xs">Structure, Silk, and Sophistication</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCTS.filter(p => p.category === 'Europe').map(product => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="overflow-hidden mb-4 aspect-[4/5] bg-gray-100">
                    <img src={product.image} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" alt={product.name} />
                  </div>
                  <h3 className="font-serif text-xl mb-1">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{product.description}</p>
                  <span className="text-sm font-semibold">{product.price}</span>
                </div>
              ))}
              <div className="relative group cursor-pointer aspect-[4/5] overflow-hidden">
                <img src="https://picsum.photos/seed/euro-extra/800/1000" className="w-full h-full object-cover grayscale brightness-50" alt="Extra" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                  <h3 className="text-3xl font-serif mb-2">Summer in Amalfi</h3>
                  <p className="text-[10px] uppercase tracking-widest">Linen Drop 2024</p>
                </div>
              </div>
            </div>
          </div>
        );

      case PageType.CRAFTSMANSHIP:
        return (
          <div className="pt-24 animate-in zoom-in-95 duration-500">
            <section className="bg-stone-50 py-24">
              <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <img src="https://picsum.photos/seed/artisan/1000/1200" className="rounded shadow-2xl" alt="Artisan" />
                <div>
                  <h2 className="text-5xl font-serif mb-6 italic">The Hand of the Master</h2>
                  <p className="text-gray-600 leading-loose mb-6">
                    We believe in slow fashion. Every stitch in our Sashiko denim is placed with intentionality. Every cut of our Italian silk is executed with precision. We partner only with family-owned ateliers that have been operating for at least three generations.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-px bg-black"></div>
                      <span className="text-xs uppercase tracking-widest">Hand-Dyed Indigo</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-px bg-black"></div>
                      <span className="text-xs uppercase tracking-widest">Single-Needle Tailoring</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-px bg-black"></div>
                      <span className="text-xs uppercase tracking-widest">Ethical Raw Sourcing</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );

      case PageType.SUSTAINABILITY:
        return (
          <div className="pt-24 pb-24 max-w-4xl mx-auto px-4 text-center animate-in fade-in duration-500">
            <i className="fa-solid fa-leaf text-4xl text-gray-300 mb-8"></i>
            <h2 className="text-6xl font-serif mb-12 italic leading-tight">Earth First, Fabric Second.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
              <div>
                <h4 className="font-bold mb-4 uppercase text-xs tracking-widest">Circular Economy</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Repurposing vintage kimono fabrics into modern accents, ensuring no scrap goes to waste.</p>
              </div>
              <div>
                <h4 className="font-bold mb-4 uppercase text-xs tracking-widest">Zero Dye-Run</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Our natural plant-based dyes are managed in closed-loop systems to protect local waterways.</p>
              </div>
              <div>
                <h4 className="font-bold mb-4 uppercase text-xs tracking-widest">Life-Time Repair</h4>
                <p className="text-sm text-gray-500 leading-relaxed">We offer a lifetime repair service for all Sashiko pieces. Clothing meant to grow old with you.</p>
              </div>
            </div>
          </div>
        );

      case PageType.LOOKBOOK:
        return (
          <div className="pt-24 pb-24 px-4 animate-in fade-in duration-500">
            <h2 className="text-center text-4xl font-serif mb-16 italic underline decoration-1 underline-offset-8">A/W 2024 Visual Anthology</h2>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <img key={i} src={`https://picsum.photos/seed/lookbook-${i}/800/${600 + (i * 100)}`} className="w-full rounded-sm grayscale hover:grayscale-0 transition duration-500 cursor-zoom-in" alt={`Lookbook ${i}`} />
              ))}
            </div>
          </div>
        );

      case PageType.STORES:
        return (
          <div className="pt-24 pb-24 max-w-7xl mx-auto px-4 animate-in slide-in-from-left-4 duration-500">
            <h2 className="text-5xl font-serif mb-16 italic text-center">Visit Our Ateliers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative group">
                <img src="https://picsum.photos/seed/tokyo-store/1200/800" className="w-full aspect-video object-cover mb-6" alt="Tokyo" />
                <h3 className="text-2xl font-serif mb-2 italic">Daikanyama, Tokyo</h3>
                <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">15-10 Sarugakucho, Shibuya City</p>
                <button className="text-xs font-bold border-b border-black">View Map</button>
              </div>
              <div className="relative group">
                <img src="https://picsum.photos/seed/paris-store/1200/800" className="w-full aspect-video object-cover mb-6" alt="Paris" />
                <h3 className="text-2xl font-serif mb-2 italic">Le Marais, Paris</h3>
                <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">12 Rue des Francs Bourgeois</p>
                <button className="text-xs font-bold border-b border-black">View Map</button>
              </div>
            </div>
          </div>
        );

      case PageType.ABOUT:
        return (
          <div className="pt-24 pb-24 animate-in fade-in duration-500">
             <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-7xl font-serif mb-12">The Heritage</h2>
                <div className="h-px w-24 bg-stone-300 mx-auto mb-12"></div>
                <p className="text-xl font-light text-gray-700 leading-relaxed mb-12 italic">
                  Founded in 2018 by Naomi Sato and Julian Moretti, K&C was born from a single conversation in a small cafe in Milan. 
                  Naomi brought her family's centuries-old knowledge of silk weaving, and Julian brought his expertise in architectural tailoring from Savile Row.
                </p>
                <img src="https://picsum.photos/seed/founders/1200/600" className="w-full aspect-[21/9] object-cover rounded shadow-lg mb-12" alt="Founders" />
                <p className="text-gray-500 text-left leading-loose">
                  Our mission is simple: to create clothing that transcends the temporary nature of "fashion." We don't believe in seasons as markets; we believe in seasons as rhythms. Each collection is a quiet study in texture, weight, and the way light interacts with natural fibers. We call this "Komorebi" — the light that filters through the leaves.
                </p>
             </section>
          </div>
        );

      case PageType.JOURNAL:
        return (
          <div className="pt-24 pb-24 max-w-5xl mx-auto px-4 animate-in fade-in duration-500">
            <h2 className="text-4xl font-serif mb-12 text-center">The Quiet Journal</h2>
            <div className="space-y-24">
              {[1, 2].map(post => (
                <article key={post} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                  <img src={`https://picsum.photos/seed/journal-${post}/800/600`} className="w-full" alt="Journal" />
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 block mb-2">October {12 + post}, 2024 — Field Notes</span>
                    <h3 className="text-3xl font-serif mb-6 italic">The Art of the Indigo Vat: A Morning in Okayama</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      Deep in the heart of Japan's denim capital, we spent time with the master dyer Haruto. The scent of fermented indigo is unlike anything else—earthy, sharp, and alive...
                    </p>
                    <button className="text-xs uppercase tracking-widest font-bold">Read Full Note —&gt;</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        );

      case PageType.CONTACT:
        return (
          <div className="pt-32 pb-24 max-w-3xl mx-auto px-4 animate-in slide-in-from-bottom-8 duration-500">
            <h2 className="text-6xl font-serif mb-8 text-center italic">Connect With Us</h2>
            <p className="text-center text-gray-500 mb-16 italic">For private appointments, wholesale inquiries, or just to say hello.</p>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-widest mb-2 font-bold">Full Name</label>
                  <input type="text" className="bg-transparent border-b border-gray-200 py-2 outline-none focus:border-black transition" />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-widest mb-2 font-bold">Email Address</label>
                  <input type="email" className="bg-transparent border-b border-gray-200 py-2 outline-none focus:border-black transition" />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-widest mb-2 font-bold">Subject</label>
                <select className="bg-transparent border-b border-gray-200 py-2 outline-none focus:border-black transition">
                  <option>General Inquiry</option>
                  <option>Bespoke Consultation</option>
                  <option>Wholesale</option>
                  <option>Press</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-widest mb-2 font-bold">Message</label>
                <textarea rows={4} className="bg-transparent border-b border-gray-200 py-2 outline-none focus:border-black transition resize-none"></textarea>
              </div>
              <button className="w-full py-4 bg-black text-white text-xs uppercase tracking-[0.3em] hover:bg-stone-800 transition shadow-lg">
                Send Message
              </button>
            </form>
          </div>
        );

      default:
        return <div className="pt-32 text-center h-screen">Page under construction</div>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-black selection:text-white">
      <Navbar activePage={activePage} onPageChange={setActivePage} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
