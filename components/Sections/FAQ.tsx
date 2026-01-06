import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const questions = [
    {
        q: "How does the integration work?",
        a: "We use secure OAuth connections to link with your existing tools like Jira, GitHub, and Slack. Read-only permissions are available for initial setup."
    },
    {
        q: "Is there a free trial?",
        a: "Yes! The Starter plan is free forever. The Pro plan comes with a 14-day free trial, no credit card required."
    },
    {
        q: "Can I self-host this?",
        a: "Self-hosting is available on our Enterprise plan. Contact sales for documentation and requirements."
    },
    {
        q: "What happens to my data?",
        a: "Your data is encrypted at rest and in transit. We are SOC2 Type II compliant and never sell your data to third parties."
    }
];

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16 md:py-24 bg-background border-t border-white/5">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl font-display font-bold mb-4">Common Questions</h2>
                    <p className="text-muted">Everything you need to know about the product and billing.</p>
                </div>

                <div className="space-y-4">
                    {questions.map((item, i) => (
                        <div key={i} className="border border-white/10 rounded-xl bg-surface overflow-hidden transition-all duration-300 hover:border-white/20">
                            <button 
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-4 md:p-6 text-left"
                            >
                                <span className="font-medium text-lg pr-8">{item.q}</span>
                                {openIndex === i ? <Minus className="w-5 h-5 text-accent shrink-0" /> : <Plus className="w-5 h-5 text-muted shrink-0" />}
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="p-4 md:p-6 pt-0 text-muted leading-relaxed border-t border-white/5 mt-2">
                                    {item.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};