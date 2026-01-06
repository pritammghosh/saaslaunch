import React from 'react';

export const Trust: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Trusted by the fastest moving teams.</h2>
                <p className="text-muted text-lg mb-8">
                    We've helped teams at early stage startups and scale-ups reclaim their time and focus on what matters: the product.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="text-xl font-bold font-display">ACME Corp</div>
                    <div className="text-xl font-bold font-display">StarkInd</div>
                    <div className="text-xl font-bold font-display">WayneEnt</div>
                    <div className="text-xl font-bold font-display">Cyberdyne</div>
                </div>
            </div>

            <div className="bg-surface p-8 rounded-2xl border border-white/5 relative mt-4 md:mt-0">
                <div className="text-6xl text-white/10 absolute top-4 left-6 font-serif">"</div>
                <p className="text-lg md:text-xl relative z-10 leading-relaxed mb-6">
                    This tool completely changed how we handle our product backlog. It's like having an extra PM on the team who never sleeps.
                </p>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-blue-600"></div>
                    <div>
                        <div className="font-bold text-sm">Sarah Jenkins</div>
                        <div className="text-xs text-muted">CTO at TechFlow</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};