import React, { useState } from 'react';
import { User } from 'lucide-react';
import { CURRENT_LEADERS, LEADERS } from '../constants';
import { ImageWithFallback } from './ImageWithFallback';
import { Leader } from '../types';

const LeaderCard: React.FC<{ leader: Leader }> = ({ leader }) => (
    <div className="group w-[calc(50%-0.75rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)] xl:w-[200px]">
        <div className="aspect-square overflow-hidden rounded-full mb-5 ring-1 ring-border group-hover:ring-2 group-hover:ring-white/40 transition-all relative shadow-lg">
            {leader.image ? (
                <ImageWithFallback
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            ) : (
                <div className="flex h-full w-full items-center justify-center bg-midnight-800 text-gray-500">
                    <User className="w-1/3 h-1/3 opacity-50" aria-hidden="true" />
                    <span className="sr-only">{leader.name} photo coming soon</span>
                </div>
            )}
        </div>
        <div className="text-center">
            <h4 className="font-semibold text-lg text-white mb-1 leading-tight">{leader.name}</h4>
            <p className="text-[11px] text-gray-500 uppercase tracking-[0.15em]">{leader.role}</p>
        </div>
    </div>
);

const LeaderGrid: React.FC<{ leaders: Leader[] }> = ({ leaders }) => (
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-12 max-w-6xl mx-auto">
        {leaders.map((leader) => (
            <LeaderCard key={leader.id} leader={leader} />
        ))}
    </div>
);

const Leadership: React.FC = () => {
    const years = ['All', ...Array.from(new Set(LEADERS.map(l => l.year).filter((year): year is string => Boolean(year))))];
    const [yearFilter, setYearFilter] = useState(years.find(year => year !== 'All') ?? 'All');

    const filteredLeaders = yearFilter === 'All'
        ? LEADERS
        : LEADERS.filter(l => l.year === yearFilter);

    return (
        <section id="leadership" className="py-32 bg-paper border-b border-border relative">
            <div className="container max-w-[1400px] mx-auto px-6">
                <div className="mb-20 text-center max-w-2xl mx-auto">
                    <span className="text-xs text-gray-500 uppercase tracking-widest mb-4 block">2026-2027 Eboard</span>
                    <h2 className="text-4xl font-semibold text-white mb-6">Leadership</h2>
                    <p className="text-gray-400 font-light leading-relaxed">
                        Meet the current executive board guiding GDSC at Rochester this year.
                    </p>
                </div>

                <LeaderGrid leaders={CURRENT_LEADERS} />

                <div className="mt-32 mb-20 text-center max-w-2xl mx-auto">
                    <span className="text-xs text-gray-500 uppercase tracking-widest mb-4 block">Previous Eboards</span>
                    <h2 className="text-4xl font-semibold text-white mb-6">Leadership Archive</h2>
                    <p className="text-gray-400 font-light leading-relaxed">
                        Honoring the executive boards that helped shape GDSC at Rochester, organize events, build community, and drive innovation on campus.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 mb-16">
                    {years.map(year => (
                        <button
                            key={year}
                            onClick={() => setYearFilter(year)}
                            className={`text-sm uppercase tracking-wider py-2 border-b transition-all ${
                                yearFilter === year
                                    ? 'text-white border-white'
                                    : 'text-gray-600 border-transparent hover:text-gray-400'
                            }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>

                <LeaderGrid leaders={filteredLeaders} />
            </div>
        </section>
    );
};

export default Leadership;
