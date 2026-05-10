import React from 'react';
import { ALUMNI, FEATURES } from '../constants';
import { ImageWithFallback } from './ImageWithFallback';

const About: React.FC = () => {
    return (
        <section id="about" className="py-32 bg-paper">
            <div className="container max-w-[1400px] mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Left Column: Manifesto */}
                    <div className="lg:col-span-5 space-y-12">
                        <div>
                            <span className="text-xs text-gray-500 uppercase tracking-widest mb-4 block">About GDSC at Rochester</span>
                            <h2 className="text-4xl font-semibold text-white leading-tight">
                                Where Innovation Meets Tradition
                            </h2>
                        </div>
                        <div className="prose prose-invert prose-lg text-gray-400 font-light leading-relaxed">
                            <p>
                                At the University of Rochester, home to computer science pioneers like Richard Rashid (former Microsoft Research SVP), Avie Tevanian (former Apple CTO), and renowned cryptographer Bruce Schneier, we're continuing a legacy of technological excellence.
                            </p>
                        </div>
                        
                        <div className="pt-12">
                            <h4 className="font-semibold text-2xl text-white mb-8 border-b border-border pb-4">Notable UR alumni in tech</h4>
                            <div className="space-y-8">
                                {ALUMNI.map((alum) => (
                                    <div key={alum.name} className="flex items-center gap-6 group">
                                        <div className="w-12 h-12 rounded-full overflow-hidden border border-border grayscale group-hover:grayscale-0 transition-all">
                                            <ImageWithFallback src={alum.image} alt={alum.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-lg text-white">{alum.name}</div>
                                            <div className="text-xs text-gray-500 leading-relaxed max-w-xs">{alum.role}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Features Grid */}
                    <div className="lg:col-span-7">
                        <div className="grid sm:grid-cols-2 gap-px bg-border border border-border h-full">
                            {FEATURES.map((f) => (
                                <div key={f.number} className="bg-paper p-10 flex flex-col justify-between group hover:bg-surface transition-colors">
                                    <span className="text-sm text-gray-600">{f.number}</span>
                                    <div className="mt-8">
                                        <h3 className="font-semibold text-xl text-white mb-4">{f.title}</h3>
                                        <p className="text-gray-400 font-light text-sm leading-relaxed">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;