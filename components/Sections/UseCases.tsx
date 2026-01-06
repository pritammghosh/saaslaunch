import React from 'react';
import { Rocket, Users, Target } from 'lucide-react';

export const UseCases: React.FC = () => {
  const cases = [
    {
      role: "Startup Teams",
      desc: "Move from chaos to clarity in days, not weeks.",
      icon: Rocket,
      color: "text-accent"
    },
    {
      role: "Solo Founders",
      desc: "Wear every hat without losing your mind.",
      icon: Target,
      color: "text-highlight"
    },
    {
      role: "Product Leaders",
      desc: "Align stakeholders with data, not opinions.",
      icon: Users,
      color: "text-white"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-surface/30 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-display font-bold mb-4">Built for builders.</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cases.map((c, i) => (
            <div key={i} className="group p-8 bg-background border border-white/5 rounded-2xl hover:border-white/10 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-accent/5">
              <c.icon className={`w-10 h-10 mb-6 ${c.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
              <h3 className="text-xl font-bold mb-2">{c.role}</h3>
              <p className="text-muted">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};