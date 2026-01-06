import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Promise: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1
        },
        backgroundColor: "#0B0C10" // Subtle shift
      });

      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        opacity: 0.2,
        y: 30,
        duration: 1.5,
        ease: "power2.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-28 flex items-center justify-center bg-background border-y border-white/5">
      <div className="container mx-auto px-6 text-center">
        <h2 ref={textRef} className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight max-w-5xl mx-auto bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent">
          One system. Clear decisions.<br /> Faster outcomes.
        </h2>
      </div>
    </section>
  );
};