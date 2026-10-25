import React from 'react';
import { ALUMNI, FEATURES } from '../constants';
import { ImageWithFallback } from './ImageWithFallback';

const About: React.FC = () => {
    return (
        <section id="about" className="site-section bg-paper">
            <div className="site-container">
                <div className="about-layout">
                    {/* Left Column: Manifesto */}
                    <div className="about-copy">
                        <div>

                            <h2 className="section-heading">
                                Where Innovation Meets Tradition
                            </h2>
                        </div>
                        <div className="prose prose-invert prose-lg text-gray-400 font-normal leading-relaxed">
                            <p>
                                At the University of Rochester, home to computer science pioneers like Richard Rashid (former Microsoft Research SVP), Avie Tevanian (former Apple CTO), and renowned cryptographer Bruce Schneier, we're continuing a legacy of technological excellence.
                            </p>
                        </div>

                        <div className="alumni-section">
                            <h3 className="alumni-heading">Notable UR alumni in tech</h3>
                            <div className="space-y-8">
                                {ALUMNI.map((alum) => (
                                    <div key={alum.name} className="flex items-center gap-6 group">
                                        <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden border border-border grayscale group-hover:grayscale-0 transition-all">
                                            <ImageWithFallback src={alum.image} alt={alum.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-lg text-white">{alum.name}</div>
                                            <div className="text-xs text-muted leading-relaxed max-w-xs">{alum.role}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Features Grid */}
                    <div className="about-features">
                        <div className="feature-list">
                            {FEATURES.map((f) => (
                                <div key={f.number} className="feature-item">

                                    <div>
                                        <h3 className="font-semibold text-xl text-white mb-4">{f.title}</h3>
                                        <p className="text-gray-400 font-normal text-sm leading-relaxed">{f.desc}</p>
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
