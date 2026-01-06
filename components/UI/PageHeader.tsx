import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <section className="pt-40 pb-20 bg-[#07080B] relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">{title}</h1>
        <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      </div>
    </section>
  );
};