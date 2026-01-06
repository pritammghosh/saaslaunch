import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../UI/Button';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;
  const linkClass = (path: string) =>
    `transition-colors duration-200 ${isActive(path) ? 'text-primary font-bold' : 'text-muted hover:text-primary'}`;

  const mobileLinkClass = (path: string) =>
    `block text-2xl py-4 border-b border-white/5 ${isActive(path) ? 'text-primary font-bold' : 'text-muted hover:text-primary'}`;

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
          <Link to="/" className="text-xl font-display font-bold tracking-tight hover:opacity-80 transition-opacity z-50">
            SaaS<span className="text-accent">Launch</span>.
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link to="/features" className={linkClass('/features')}>Features</Link>
            <Link to="/trust" className={linkClass('/trust')}>Trust</Link>
            <Link to="/pricing" className={linkClass('/pricing')}>Pricing</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="secondary" className="px-4 py-2 text-sm">
              Login
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#07080B] z-40 flex flex-col justify-center px-6 transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-10'}`}>
        <div className="flex flex-col space-y-2">
          <Link to="/" className={mobileLinkClass('/')}>Home</Link>
          <Link to="/features" className={mobileLinkClass('/features')}>Features</Link>
          <Link to="/trust" className={mobileLinkClass('/trust')}>Trust</Link>
          <Link to="/pricing" className={mobileLinkClass('/pricing')}>Pricing</Link>
          <div className="pt-8">
            <Button variant="primary" className="w-full justify-center mb-4">Get Early Access</Button>
            <Button variant="secondary" className="w-full justify-center">Login</Button>
          </div>
        </div>
      </div>
    </>
  );
};