import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 text-center text-muted text-sm">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} SaaS Launch. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};