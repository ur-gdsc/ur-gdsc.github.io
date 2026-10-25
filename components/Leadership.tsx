import React, { useState } from 'react';
import { User } from 'lucide-react';
import { CURRENT_LEADERS, LEADERS } from '../constants';
import { ImageWithFallback } from './ImageWithFallback';
import { Leader } from '../types';

const LeaderCard: React.FC<{ leader: Leader }> = ({ leader }) => (
    <div className="leader-card">
        <div className="leader-photo">
            {leader.image ? (
                <ImageWithFallback
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                />
            ) : (
                <div className="flex h-full w-full items-center justify-center bg-surface text-muted">
                    <User className="w-1/3 h-1/3 opacity-50" aria-hidden="true" />
                    <span className="sr-only">{leader.name} photo coming soon</span>
                </div>
            )}
        </div>
        <div className="leader-details">
            <h3 className="leader-name">{leader.name}</h3>
            <p className="text-xs text-muted leading-relaxed">{leader.role}</p>
        </div>
    </div>
);

const LeaderGrid: React.FC<{ leaders: Leader[] }> = ({ leaders }) => (
    <div className="leader-grid">
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
        <section id="leadership" className="site-section bg-paper border-b border-border relative">
            <div className="site-container">
                <div className="leadership-intro">

                    <h2 className="section-heading">Leadership</h2>
                    <p className="board-year">2026–2027 Eboard</p>
                    <p className="text-gray-400 font-normal leading-relaxed">
                        Meet the current executive board guiding GDSC at Rochester this year.
                    </p>
                </div>

                <LeaderGrid leaders={CURRENT_LEADERS} />

                <div className="archive-block">
                <div className="leadership-intro">

                    <h2 className="section-heading">Leadership Archive</h2>
                    <p className="text-gray-400 font-normal leading-relaxed">
                        Honoring the executive boards that helped shape GDSC at Rochester, organize events, build community, and drive innovation on campus.
                    </p>
                </div>

                <div className="year-filters">
                    {years.map(year => (
                        <button
                            key={year}
                            aria-pressed={yearFilter === year}
                            onClick={() => setYearFilter(year)}
                            className={`text-sm uppercase tracking-wider py-2 border-b transition-all ${
                                yearFilter === year
                                    ? 'text-white border-white'
                                    : 'text-muted border-transparent hover:text-gray-400'
                            }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>

                <LeaderGrid leaders={filteredLeaders} />
                </div>
            </div>
        </section>
    );
};

export default Leadership;
