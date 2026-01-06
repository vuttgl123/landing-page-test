
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-serif text-2xl mb-6">K&C</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Bridging the gap between the minimalist soul of Japan and the structural artistry of Europe. A dialogue of fabric and form.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Discovery</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-black transition">New Arrivals</a></li>
              <li><a href="#" className="hover:text-black transition">Bespoke Services</a></li>
              <li><a href="#" className="hover:text-black transition">The Silk Road</a></li>
              <li><a href="#" className="hover:text-black transition">Archive</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Philosophy</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-black transition">Wabi-Sabi</a></li>
              <li><a href="#" className="hover:text-black transition">Modern Tailoring</a></li>
              <li><a href="#" className="hover:text-black transition">Ethics</a></li>
              <li><a href="#" className="hover:text-black transition">Our Artisans</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4 font-light">Join our circle for seasonal reflections and quiet releases.</p>
            <div className="flex border-b border-black py-2">
              <input type="email" placeholder="Email address" className="bg-transparent border-none outline-none text-sm w-full" />
              <button className="text-xs uppercase tracking-tighter hover:opacity-50">Join</button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest">© 2024 Komorebi & Couture. Tokyo & Paris.</p>
          <div className="flex space-x-6 text-gray-400 text-sm">
            <i className="fa-brands fa-instagram hover:text-black cursor-pointer transition"></i>
            <i className="fa-brands fa-pinterest hover:text-black cursor-pointer transition"></i>
            <i className="fa-brands fa-vimeo-v hover:text-black cursor-pointer transition"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
