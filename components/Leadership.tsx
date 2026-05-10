import React, { useState } from 'react';
import { LEADERS } from '../constants';
import { ImageWithFallback } from './ImageWithFallback';

const Leadership: React.FC = () => {
    const [roleFilter, setRoleFilter] = useState('All');
    const roles = ['All', ...Array.from(new Set(LEADERS.map(l => l.role)))];

    const filteredLeaders = roleFilter === 'All' 
        ? LEADERS 
        : LEADERS.filter(l => l.role === roleFilter);

    return (
        <section id="leadership" className="py-32 bg-paper border-b border-border relative">
             <div className="container max-w-[1400px] mx-auto px-6">
                <div className="mb-20 text-center max-w-2xl mx-auto">
                    <span className="text-xs text-gray-500 uppercase tracking-widest mb-4 block">Previous Eboards</span>
                    <h2 className="text-4xl font-semibold text-white mb-6">Leadership Archive</h2>
                    <p className="text-gray-400 font-light leading-relaxed">
                        Honoring the executive boards that helped shape GDSC at Rochester, organize events, build community, and drive innovation on campus.
                    </p>
                </div>

                <div className="mb-12 text-center">
                    <span className="inline-flex items-center border border-border px-4 py-2 text-xs uppercase tracking-[0.2em] text-gray-400">
                        2025-2026 Eboard
                    </span>
                </div>

                <div className="flex flex-wrap justify-center gap-6 mb-16">
                    {roles.map(role => (
                        <button
                            key={role}
                            onClick={() => setRoleFilter(role)}
                            className={`text-sm uppercase tracking-wider py-2 border-b transition-all ${
                                roleFilter === role 
                                    ? 'text-white border-white' 
                                    : 'text-gray-600 border-transparent hover:text-gray-400'
                            }`}
                        >
                            {role}
                        </button>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-x-6 gap-y-12 max-w-6xl mx-auto">
                    {filteredLeaders.map((leader) => (
                        <div key={leader.id} className="group w-[calc(50%-0.75rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)] xl:w-[200px]">
                            <div className="aspect-square overflow-hidden rounded-full mb-5 ring-1 ring-border group-hover:ring-2 group-hover:ring-white/40 transition-all relative shadow-lg">
                                 <ImageWithFallback
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                 />
                            </div>
                            <div className="text-center">
                                <h4 className="font-semibold text-lg text-white mb-1 leading-tight">{leader.name}</h4>
                                <p className="text-[11px] text-gray-500 uppercase tracking-[0.15em]">{leader.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;
