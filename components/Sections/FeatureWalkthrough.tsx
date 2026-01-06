import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BarChart3, Zap, LayoutDashboard } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    name: "Unified Dashboard",
    value: "Everything in one view.",
    description: "Stop tab-switching. See your roadmap, tasks, and metrics in a single, cohesive interface designed for clarity."
  },
  {
    id: "insights",
    icon: BarChart3,
    name: "Smart Insights",
    value: "Actionable data.",
    description: "Don't just collect data. Get AI-powered suggestions on what to build next based on user feedback trends."
  },
  {
    id: "automation",
    icon: Zap,
    name: "Automation Rules",
    value: "No more busywork.",
    description: "Set it and forget it. Automate status updates, assignments, and notifications so you can focus on product."
  }
];

export const FeatureWalkthrough: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create scroll triggers for each text section to update the active feature state
      features.forEach((_, index) => {
        ScrollTrigger.create({
          trigger: `#feature-text-${index}`,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveFeature(index),
          onEnterBack: () => setActiveFeature(index),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={containerRef} className="relative bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
          
          {/* Sticky Visual Side */}
          {/* On mobile: Order 1 (Top), Sticky at top offset. On Desktop: Order 1 (Right side in code structure, but visual alignment handled by sticky) - Wait, let's keep visual on right for Desktop, but layout structure: Flex-col on mobile. */}
          
          <div className="lg:w-1/2 order-1 lg:order-2 h-[400px] lg:h-[calc(100vh-100px)] sticky top-20 lg:top-24 flex items-center justify-center mb-8 lg:mb-0 z-20">
             <div className="relative w-full aspect-[4/3] bg-surface rounded-2xl border border-white/10 shadow-2xl overflow-hidden transition-all duration-500">
                {/* Dynamic Content based on activeFeature */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col transition-opacity duration-500" style={{ opacity: activeFeature === 0 ? 1 : 0, pointerEvents: activeFeature === 0 ? 'auto' : 'none' }}>
                    <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                        <div className="text-sm font-bold text-muted">Dashboard Overview</div>
                        <div className="flex gap-2">
                             <div className="w-2 h-2 rounded-full bg-red-500"></div>
                             <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 h-full">
                        <div className="bg-white/5 rounded-lg border border-white/5 p-4">
                            <div className="h-2 w-20 bg-white/20 rounded mb-4"></div>
                            <div className="h-16 md:h-20 bg-gradient-to-t from-accent/20 to-transparent rounded-b-lg"></div>
                        </div>
                        <div className="bg-white/5 rounded-lg border border-white/5 p-4">
                             <div className="h-2 w-20 bg-white/20 rounded mb-4"></div>
                             <div className="space-y-2">
                                <div className="h-2 w-full bg-white/5 rounded"></div>
                                <div className="h-2 w-3/4 bg-white/5 rounded"></div>
                                <div className="h-2 w-1/2 bg-white/5 rounded"></div>
                             </div>
                        </div>
                        <div className="col-span-2 bg-white/5 rounded-lg border border-white/5 p-4 flex items-center justify-center text-muted text-sm">
                             Activity Stream
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 p-6 md:p-8 flex flex-col transition-opacity duration-500" style={{ opacity: activeFeature === 1 ? 1 : 0, pointerEvents: activeFeature === 1 ? 'auto' : 'none' }}>
                    <div className="flex items-center gap-3 mb-6">
                        <BarChart3 className="text-highlight w-6 h-6" />
                        <h3 className="font-bold text-highlight">Smart Insights</h3>
                    </div>
                    <div className="flex-1 flex items-end gap-2 justify-between px-4 pb-4 bg-white/5 rounded-xl border border-white/5">
                        {[30, 50, 45, 80, 60, 90, 75].map((h, i) => (
                             <div key={i} className="w-full bg-highlight/20 rounded-t-sm relative group" style={{ height: `${h}%` }}>
                                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-highlight text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                     {h}%
                                 </div>
                             </div>
                         ))}
                    </div>
                    <div className="mt-4 p-4 bg-highlight/10 border border-highlight/20 rounded-lg">
                        <p className="text-sm text-highlight">AI Recommendation: Focus on "Mobile Performance" this sprint.</p>
                    </div>
                </div>

                <div className="absolute inset-0 p-6 md:p-8 flex flex-col transition-opacity duration-500" style={{ opacity: activeFeature === 2 ? 1 : 0, pointerEvents: activeFeature === 2 ? 'auto' : 'none' }}>
                    <div className="flex items-center gap-3 mb-8">
                        <Zap className="text-accent w-6 h-6" />
                        <h3 className="font-bold text-accent">Automation Flow</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/5">
                            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">1</div>
                            <div className="flex-1">
                                <div className="h-2 w-24 bg-white/20 rounded mb-2"></div>
                                <div className="text-xs text-muted">When status changes to "Done"</div>
                            </div>
                        </div>
                        <div className="h-8 border-l-2 border-dashed border-white/10 ml-8"></div>
                         <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/5">
                            <div className="w-8 h-8 rounded-full bg-highlight/20 flex items-center justify-center text-highlight font-bold">2</div>
                            <div className="flex-1">
                                <div className="h-2 w-24 bg-white/20 rounded mb-2"></div>
                                <div className="text-xs text-muted">Notify Stakeholders via Slack</div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
          </div>

          {/* Scrollable Text Side */}
          <div className="lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center space-y-[40vh] md:space-y-[40vh] pb-[20vh]">
            {features.map((feature, idx) => (
              <div key={idx} id={`feature-text-${idx}`} className={`transition-opacity duration-500 p-4 rounded-2xl ${activeFeature === idx ? 'opacity-100 bg-white/5 lg:bg-transparent' : 'opacity-30'}`}>
                <div className="w-12 h-12 bg-surface border border-white/10 rounded-lg flex items-center justify-center mb-6 text-white">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">{feature.name}</h3>
                <h4 className="text-lg md:text-xl text-accent mb-4">{feature.value}</h4>
                <p className="text-muted text-base md:text-lg leading-relaxed max-w-md">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};