import React, { useState } from 'react';
import { Button } from '../UI/Button';
import { ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';

export const SignupForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section id="signup" className="pb-16 md:pb-32 px-6">
      <div className="container mx-auto max-w-xl text-center">
        {status === 'success' ? (
            <div className="bg-highlight/10 border border-highlight/20 rounded-2xl p-8 animate-in fade-in zoom-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-highlight mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
                <p className="text-muted">Keep an eye on your inbox. We'll be in touch shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm text-highlight hover:underline"
                >
                  Register another email
                </button>
            </div>
        ) : (
            <>
                <h3 className="text-2xl font-bold mb-6">Ready to ship?</h3>
                <form onSubmit={handleSubmit} className="relative">
                    <input 
                        type="email" 
                        placeholder="founder@startup.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-16 pl-6 pr-40 bg-surface border border-white/10 rounded-xl focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all text-lg placeholder:text-white/20"
                    />
                    <div className="absolute right-2 top-2 bottom-2">
                        <Button type="submit" className="h-full" disabled={status === 'loading'}>
                            {status === 'loading' ? <Loader2 className="animate-spin w-5 h-5" /> : <>Join <ArrowRight className="ml-2 w-4 h-4" /></>}
                        </Button>
                    </div>
                </form>
                <p className="text-xs text-muted mt-4">
                    No spam. Unsubscribe anytime.
                </p>
            </>
        )}
      </div>
    </section>
  );
};