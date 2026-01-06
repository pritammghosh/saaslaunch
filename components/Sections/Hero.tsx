import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '../UI/Button';
import { SplitText } from '../UI/SplitText';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const uiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text Reveal
      gsap.from(".split-word-inner", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: "power4.out",
        delay: 0.2
      });

      // Subhead and CTA Reveal
      gsap.from(".hero-fade", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.8
      });

      // UI Float Parallax - Slower, more elegant
      gsap.to(uiRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Mouse parallax effect for UI (Desktop only)
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const handleMouseMove = (e: MouseEvent) => {
          if (!uiRef.current) return;
          const { clientX, clientY } = e;
          const xPos = (clientX / window.innerWidth - 0.5) * 15;
          const yPos = (clientY / window.innerHeight - 0.5) * 15;
          
          gsap.to(uiRef.current, {
            rotationY: xPos,
            rotationX: -yPos,
            duration: 1.5,
            ease: "power2.out"
          });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen pt-28 pb-16 md:pt-32 md:pb-20 flex flex-col justify-center overflow-hidden bg-[#07080B]">
      {/* Refined Background Effects */}
      <div className="absolute inset-0 z-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
          {/* Glow Orbs */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent/10 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-highlight/5 rounded-full blur-[80px] md:blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-accent mb-6 hero-fade">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            v2.0 Beta is live
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tighter mb-8 text-white">
            <SplitText wrapperClass="block mb-2">Build Faster.</SplitText>
            <span className="text-muted block">
                <SplitText>Decide Smarter.</SplitText>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted/80 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed hero-fade">
            The all-in-one product OS that removes friction from your daily workflow. Stop wrestling with fragmented tools and start shipping value.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start hero-fade">
            <Button icon className="shadow-[0_0_20px_rgba(106,227,255,0.3)] w-full sm:w-auto">Get Early Access</Button>
            <Button variant="secondary" className="w-full sm:w-auto">View Interactive Demo</Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 text-sm text-muted hero-fade opacity-80">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-surface border-2 border-[#07080B] flex items-center justify-center text-xs font-bold text-white relative overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} alt="avatar" className="w-full h-full" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-white/10 border-2 border-[#07080B] flex items-center justify-center text-xs text-white">
                +2k
              </div>
            </div>
            <div className="flex flex-col text-left">
                <div className="flex gap-1 mb-1">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-4 text-yellow-500 fill-current">★</div>)}
                </div>
                <span>Loved by product teams</span>
            </div>
          </div>
        </div>

        {/* High Fidelity UI Mockup */}
        <div className="relative perspective-1000 h-[400px] md:h-[500px] lg:h-[650px] flex items-center justify-center mt-8 lg:mt-0">
          <div ref={uiRef} className="relative w-full max-w-xl aspect-[4/5] lg:aspect-[5/6] bg-[#111216]/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-1 transform-style-3d overflow-hidden ring-1 ring-white/5 scale-90 md:scale-100">
            
            {/* Window Controls */}
            <div className="absolute top-0 left-0 w-full h-10 bg-white/5 border-b border-white/5 flex items-center justify-between px-4 z-20">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/40 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/40 border border-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/40 border border-green-500/50"></div>
                </div>
                <div className="text-[10px] text-muted font-mono bg-black/20 px-2 py-1 rounded hidden sm:block">app.saaslaunch.io</div>
                <div className="w-4"></div>
            </div>

            {/* App Content */}
            <div className="h-full pt-10 flex">
                {/* Sidebar */}
                <div className="w-12 lg:w-48 border-r border-white/5 bg-black/20 flex flex-col p-2 lg:p-4 gap-2">
                    {[1,2,3,4].map(i => (
                        <div key={i} className={`h-8 w-full rounded-md flex items-center gap-3 px-2 ${i === 1 ? 'bg-accent/10 border border-accent/20' : 'opacity-40'}`}>
                            <div className={`w-4 h-4 rounded-sm flex-shrink-0 ${i === 1 ? 'bg-accent' : 'bg-white'}`}></div>
                            <div className="hidden lg:block h-2 w-16 bg-white/30 rounded-sm"></div>
                        </div>
                    ))}
                    <div className="mt-auto h-24 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 p-3 hidden lg:block">
                        <div className="w-8 h-8 rounded-full bg-white/10 mb-2"></div>
                        <div className="h-2 w-20 bg-white/20 rounded-sm mb-1"></div>
                        <div className="h-2 w-12 bg-white/10 rounded-sm"></div>
                    </div>
                </div>

                {/* Main Area */}
                <div className="flex-1 p-4 lg:p-6 bg-gradient-to-b from-transparent to-black/40 overflow-hidden">
                    <div className="flex justify-between items-end mb-6 lg:mb-8">
                        <div>
                            <div className="text-xs text-muted mb-1">Product Roadmap</div>
                            <div className="text-lg lg:text-xl font-bold text-white">Q4 Deliverables</div>
                        </div>
                        <div className="flex gap-2">
                            <div className="px-3 py-1 bg-accent text-black text-xs font-bold rounded flex items-center gap-1">
                                <ArrowUpRight size={12} /> <span className="hidden sm:inline">Export</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 lg:gap-4 mb-6">
                        {["Revenue", "Users", "Churn"].map((stat, i) => (
                            <div key={i} className="bg-white/5 rounded-xl p-3 lg:p-4 border border-white/5">
                                <div className="text-[10px] lg:text-xs text-muted mb-2">{stat}</div>
                                <div className="text-lg lg:text-2xl font-bold font-display mb-1">{i === 0 ? '$24k' : i === 1 ? '1.2k' : '2.1%'}</div>
                                <div className={`text-[10px] ${i === 2 ? 'text-red-400' : 'text-green-400'}`}>
                                    {i === 2 ? '+0.4%' : '+12%'}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="h-32 lg:h-48 bg-white/5 rounded-xl border border-white/5 p-4 relative overflow-hidden group">
                        <div className="absolute inset-x-0 bottom-0 h-24 lg:h-32 flex items-end justify-between px-4 lg:px-6 pb-4 gap-2">
                             {[30, 50, 45, 75, 55, 85, 60, 90, 70, 60, 80, 95].map((h, i) => (
                                 <div key={i} className="flex-1 bg-gradient-to-t from-accent/40 to-accent/80 rounded-t-[2px] transition-all duration-700 hover:bg-accent relative" style={{ height: `${h}%` }}>
                                     <div className="absolute top-0 w-full h-[2px] bg-accent shadow-[0_0_10px_#6AE3FF]"></div>
                                 </div>
                             ))}
                        </div>
                        {/* Grid lines */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_20px]"></div>
                    </div>
                </div>
            </div>

            {/* Floating Notifications */}
            <div className="hidden md:block absolute bottom-8 -right-8 bg-[#1A1B20] border border-white/10 rounded-xl p-4 shadow-2xl w-64 transform translate-z-10 animate-float-delayed">
                <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                        <CheckCircle2 size={16} />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-white">Deployment Complete</div>
                        <div className="text-xs text-muted mt-1">v2.4.0 is now live in production.</div>
                    </div>
                </div>
            </div>

             <div className="hidden md:flex absolute top-24 -left-8 bg-[#1A1B20] border border-white/10 rounded-xl p-3 shadow-2xl w-48 transform translate-z-20 animate-float items-center gap-3">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=felix" className="w-8 h-8 rounded-full bg-white/10" alt="User" />
                <div>
                    <div className="text-xs font-bold text-white">Felix marked as done</div>
                    <div className="text-[10px] text-muted">Just now</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};