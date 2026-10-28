import React, { useState } from 'react';
import { Search } from 'lucide-react';
import ContentSources from './ContentSources';
import { SPEAKERS, UPCOMING_SPEAKERS } from '../constants';
import { ImageWithFallback } from './ImageWithFallback';

const Speakers: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const query = searchTerm.trim().toLowerCase();
    const filteredSpeakers = SPEAKERS.filter(speaker => `${speaker.name} ${speaker.company ?? ''}`.toLowerCase().includes(query));
    return (
        <section id="speakers" className="site-section">
            {UPCOMING_SPEAKERS.length > 0 && <div className="upcoming-speakers">
                <h2 className="section-heading">Upcoming Speakers</h2>
                {UPCOMING_SPEAKERS.map(speaker => <article key={speaker.id} className="speaker-card">
                    <div className="speaker-photo"><ImageWithFallback src={speaker.image} alt={speaker.name} /></div>
                    <div><h3>{speaker.name}</h3><p>{speaker.title}</p><p>{speaker.bio}</p><p>{speaker.affiliation} · {speaker.month}</p></div>
                </article>)}
            </div>}
            <div className="section-intro">
                <h2 className="section-heading">Featured Speakers</h2>
                <div className="speaker-intro-copy">
                    <p>Speakers who have joined our chapter’s talks and conversations, in person and online.</p>
                    <label className="search-field"><span className="sr-only">Search speakers by name or company</span>
                        <Search size={19} aria-hidden="true" />
                        <input type="search" name="speakers" autoComplete="off" aria-controls="speaker-results" placeholder="Search name or company…" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                    </label>
                </div>
            </div>
            <div id="speaker-results" className="speaker-grid">
                {filteredSpeakers.map(speaker => <article key={speaker.id} className="speaker-card">
                    <div className="speaker-photo"><ImageWithFallback src={speaker.image} alt={speaker.name} /></div>
                    <div className="speaker-details">
                        <h3>{speaker.name}</h3>
                        {speaker.company && <p className="speaker-affiliation">{speaker.company}</p>}
                        <p>{speaker.role}</p>
                        <ContentSources sources={speaker.sources} />
                    </div>
                </article>)}
            </div>
            <div role="status" aria-live="polite">
                {query && (filteredSpeakers.length ? <p className="search-status">{filteredSpeakers.length} {filteredSpeakers.length === 1 ? 'speaker' : 'speakers'} found.</p> : <div className="search-empty"><h3>No speakers found</h3><p>Try another name or company.</p><button className="text-link" onClick={() => setSearchTerm('')}>Clear search</button></div>)}
            </div>
            <aside className="roster-note">
                <p><a className="text-link" href="https://ccc.rochester.edu/events?&group_ids=30850" target="_blank" rel="noopener noreferrer">Public chapter events</a></p>
                <p>Find more talks, workshops, and opportunities to meet the chapter in our event listings.</p>
            </aside>
        </section>
    );
};
export default Speakers;
