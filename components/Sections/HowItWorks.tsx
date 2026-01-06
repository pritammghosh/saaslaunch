import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Database, GitMerge, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const HowItWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".step-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      gsap.from(".step-line", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.5,
        ease: "power3.inOut"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      id: "01",
      title: "Connect Your Data",
      desc: "Integrate with Jira, GitHub, and Figma in one click. We pull the metadata, you keep the control.",
      icon: Database
    },
    {
      id: "02",
      title: "Define Workflows",
      desc: "Set up automation rules. 'If X happens, notify Y'. Let the engine handle the busywork.",
      icon: GitMerge
    },
    {
      id: "03",
      title: "Ship & Scale",
      desc: "Watch your velocity increase. Get real-time insights on bottlenecks and ship faster.",
      icon: Rocket
    }
  ];

  return (
    <section ref={containerRef} className="py-12 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">From Chaos to Control</h2>
          <p className="text-muted text-lg">Stop managing tools. Start managing products. Here's how SaaSLaunch transforms your workflow in minutes.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-24 left-0 w-full h-0.5 bg-white/10 step-line"></div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="step-card flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-surface border border-white/10 flex items-center justify-center mb-8 relative shadow-lg shadow-black/50 group hover:border-accent/50 transition-colors duration-300">
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-black font-bold flex items-center justify-center text-sm border-2 border-background z-20">
                    {step.id}
                  </div>
                  <step.icon className="w-8 h-8 text-white group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};