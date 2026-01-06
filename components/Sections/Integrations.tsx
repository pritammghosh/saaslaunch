import React from 'react';

const brands = [
  "Stripe", "GitHub", "Slack", "Linear", "Figma", "Notion", "Intercom", "Vercel", "AWS", "Google Cloud"
];

export const Integrations: React.FC = () => {
  return (
    <section className="py-12 md:py-24 border-y border-white/5 bg-[#0A0B0E] overflow-hidden">
        <div className="container mx-auto px-6 text-center mb-12">
            <h3 className="text-lg font-medium text-muted">Works seamlessly with your existing stack</h3>
        </div>
        
        <div className="relative flex overflow-x-hidden group">
            <div className="py-8 md:py-12 animate-marquee whitespace-nowrap flex items-center">
                {brands.concat(brands).map((brand, i) => (
                    <span key={i} className="mx-8 md:mx-16 text-2xl md:text-4xl font-display font-bold text-white/50 hover:text-white transition-colors cursor-default select-none">
                        {brand}
                    </span>
                ))}
            </div>
            <div className="absolute top-0 py-8 md:py-12 animate-marquee2 whitespace-nowrap flex items-center">
                {brands.concat(brands).map((brand, i) => (
                    <span key={i} className="mx-8 md:mx-16 text-2xl md:text-4xl font-display font-bold text-white/50 hover:text-white transition-colors cursor-default select-none">
                        {brand}
                    </span>
                ))}
            </div>
            
            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#0A0B0E] to-transparent z-10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#0A0B0E] to-transparent z-10"></div>
        </div>
        
        <style>{`
            @keyframes marquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-100%); }
            }
            @keyframes marquee2 {
                0% { transform: translateX(100%); }
                100% { transform: translateX(0%); }
            }
            .animate-marquee {
                animation: marquee 35s linear infinite;
            }
            .animate-marquee2 {
                animation: marquee2 35s linear infinite;
            }
        `}</style>
    </section>
  );
};