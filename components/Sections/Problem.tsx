import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertCircle, Clock, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Problem: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".problem-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const problems = [
    {
      icon: Layers,
      title: "Too many tools",
      desc: "Fragmented workflows across 10+ apps kill context and focus."
    },
    {
      icon: AlertCircle,
      title: "Manual decisions",
      desc: "Guesswork and gut feelings replace data-driven confidence."
    },
    {
      icon: Clock,
      title: "Slow execution",
      desc: "Cycles take weeks instead of days due to alignment friction."
    }
  ];

  return (
    <section id="problem" ref={sectionRef} className="py-12 md:py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            The reality check.
          </h2>
          <p className="text-muted text-lg">
            Building great products is hard. Your tools shouldn't make it harder.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, idx) => (
            <div key={idx} className="problem-card bg-surface p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group">
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};