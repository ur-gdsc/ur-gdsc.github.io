import React, { useState } from 'react';
import { CURRENT_LEADERS, LEADERS } from '../constants';
import { ImageWithFallback } from './ImageWithFallback';
import { Leader } from '../types';

const LeaderGrid: React.FC<{ leaders: Leader[] }> = ({ leaders }) => (
    <div className="leader-grid">{leaders.map(leader => <article key={leader.id} className="leader-card">
        <div className="leader-photo">{leader.image ? <ImageWithFallback src={leader.image} alt={leader.name} /> : <div className="portrait-fallback" role="img" aria-label={`${leader.name} — photo unavailable`}>{leader.name.split(' ').map(n => n[0]).slice(0,2).join('')}</div>}</div>
        <div className="leader-details"><h3>{leader.name}</h3><p>{leader.role}</p>{leader.linkedin && <a className="leader-linkedin" href={leader.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${leader.name} on LinkedIn (opens in a new tab)`}>LinkedIn <span aria-hidden="true">↗</span></a>}</div>
    </article>)}</div>
);
const Leadership: React.FC = () => {
    const years = ['All', ...Array.from(new Set(LEADERS.map(l => l.year).filter((year): year is string => Boolean(year))))];
    const [yearFilter, setYearFilter] = useState(years.find(year => year !== 'All') ?? 'All');
    const filteredLeaders = yearFilter === 'All' ? LEADERS : LEADERS.filter(l => l.year === yearFilter);
    return <section id="leadership" className="site-section">
        <div className="section-intro"><div><h2 className="section-heading">Leadership</h2><p className="board-year">2026–2027 Eboard</p></div><p>Meet the current executive board guiding GDSC at Rochester this year.</p></div>
        <LeaderGrid leaders={CURRENT_LEADERS} />
        <div className="archive-block">
            <div className="archive-intro"><div><h2>Leadership Archive</h2><p>The people who helped build this chapter.</p></div>
                <div className="year-filters" role="group" aria-label="Filter archived leadership by academic year">{years.map(year => <button key={year} aria-pressed={yearFilter === year} onClick={() => setYearFilter(year)}>{year}</button>)}</div>
            </div>
            <LeaderGrid leaders={filteredLeaders} />
        </div>
    </section>;
};
export default Leadership;
