import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '../UI/Button';

export const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-12 md:py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Simple, transparent pricing</h2>
                    <p className="text-muted text-lg">Start for free, scale as you grow.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Starter */}
                    <div className="p-8 rounded-3xl border border-white/10 bg-surface/50 hover:border-white/20 transition-all order-2 md:order-1">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-2">Starter</h3>
                            <div className="text-3xl font-display font-bold">$0<span className="text-sm font-sans font-normal text-muted">/mo</span></div>
                            <p className="text-sm text-muted mt-2">Perfect for side projects.</p>
                        </div>
                        <Button variant="outline" className="w-full mb-8">Start Free</Button>
                        <div className="space-y-4">
                            {["1 Project", "Basic Analytics", "Community Support", "7-day history"].map((feat, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm">
                                    <Check className="w-4 h-4 text-white" />
                                    <span className="text-muted">{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pro */}
                    <div className="p-8 rounded-3xl border border-accent bg-surface/80 relative transform md:-translate-y-4 shadow-2xl shadow-accent/10 order-1 md:order-2">
                        <div className="absolute top-0 right-0 bg-accent text-black text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">POPULAR</div>
                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-2 text-white">Pro</h3>
                            <div className="text-3xl font-display font-bold">$29<span className="text-sm font-sans font-normal text-muted">/mo</span></div>
                            <p className="text-sm text-accent mt-2">For growing teams.</p>
                        </div>
                        <Button variant="primary" className="w-full mb-8">Get Started</Button>
                        <div className="space-y-4">
                            {["Unlimited Projects", "Advanced AI Insights", "Priority Support", "Unlimited history", "Custom Workflows"].map((feat, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm">
                                    <div className="w-4 h-4 rounded-full bg-accent flex items-center justify-center">
                                        <Check className="w-2.5 h-2.5 text-black" />
                                    </div>
                                    <span className="text-white">{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Enterprise */}
                    <div className="p-8 rounded-3xl border border-white/10 bg-surface/50 hover:border-white/20 transition-all order-3">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                            <div className="text-3xl font-display font-bold">Custom</div>
                            <p className="text-sm text-muted mt-2">For large organizations.</p>
                        </div>
                        <Button variant="outline" className="w-full mb-8">Contact Sales</Button>
                        <div className="space-y-4">
                            {["SSO & Security", "Dedicated Success Manager", "SLA Guarantee", "On-premise deployment"].map((feat, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm">
                                    <Check className="w-4 h-4 text-white" />
                                    <span className="text-muted">{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};