import React from 'react';
import { Check } from 'lucide-react';

export const LaunchOffer: React.FC = () => {
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="container mx-auto max-w-4xl bg-gradient-to-br from-surface to-background border border-accent/20 rounded-3xl p-6 md:p-12 relative overflow-hidden group">
        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <div className="relative z-10 text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6 border border-accent/20">
                Launch Offer
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Early Access = Lifetime Advantage</h2>
            <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
                Join our beta cohort today. Lock in early-bird pricing and get direct access to the founding team.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12 text-left max-w-md mx-auto md:max-w-none">
                {["Priority Onboarding", "Founder Slack Channel", "Locked-in $29/mo"].map((b, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-highlight/20 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-highlight" />
                        </div>
                        <span className="font-medium">{b}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};