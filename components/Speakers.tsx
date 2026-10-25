import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { SPEAKERS, UPCOMING_SPEAKERS } from '../constants';
import { ImageWithFallback } from './ImageWithFallback';

const Speakers: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const query = searchTerm.trim().toLowerCase();
    const filteredSpeakers = SPEAKERS.filter(speaker =>
        speaker.name.toLowerCase().includes(query) ||
        speaker.company?.toLowerCase().includes(query)
    );

    return (
        <section id="speakers" className="site-section bg-paper border-b border-border">
            <div className="site-container">

                {/* Upcoming Speakers */}
                {UPCOMING_SPEAKERS.length > 0 && (
                <div className="mb-32">
                    <div className="mb-16">

                        <h2 className="section-heading">
                            Upcoming Speakers
                        </h2>
                        <p className="section-description">
                            Industry leaders and academics joining us this semester to share their insights on technology, AI, and the future.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {UPCOMING_SPEAKERS.map((speaker) => (
                            <div key={speaker.id} className="border border-border bg-surface/50 rounded-lg overflow-hidden hover:border-gray-600 transition-colors">
                                <div className="p-8 md:p-10">
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border flex-shrink-0">
                                            <ImageWithFallback
                                                src={speaker.image}
                                                alt={speaker.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-2xl font-semibold text-white mb-1">
                                                {speaker.name}
                                            </h3>
                                            <p className="text-sm text-gray-400 leading-relaxed">
                                                {speaker.title}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                        {speaker.bio}
                                    </p>

                                    <div className="flex items-center justify-between pt-6 border-t border-border">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={speaker.affiliationLogo}
                                                alt={speaker.affiliation}
                                                className="h-7 w-auto opacity-70"
                                                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                            />
                                            <span className="text-xs text-muted">{speaker.affiliation}</span>
                                        </div>
                                        <span className="inline-flex items-center gap-2 text-xs font-medium text-white bg-white/10 px-4 py-1.5 rounded-full">
                                            {speaker.month}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                )}

                {/* Past Speakers Header */}
                <div className="directory-section-header">
                    <div>

                        <h2 className="section-heading">
                            Featured Speakers
                        </h2>
                        <p className="section-description">
                            Industry pioneers, innovators, and thought leaders who have visited Rochester to connect with students.
                        </p>
                    </div>
                    <div className="relative group">
                        <input
                            type="search"
                            aria-label="Search speakers by name or company"
                            aria-controls="speaker-results"
                            placeholder="Search speakers..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="speaker-search"
                        />
                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-muted w-4 h-4 pointer-events-none" />
                    </div>
                </div>

                <div id="speaker-results" className="speaker-grid">
                    {filteredSpeakers.map(speaker => (
                        <article key={speaker.id} className="speaker-card">
                            <div className="speaker-photo">
                                <ImageWithFallback src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="speaker-details">
                            {speaker.company && <div className="speaker-affiliation">
                                {speaker.companyLogo && <img src={speaker.companyLogo} alt="" className="w-5 h-5 object-contain" onError={event => { event.currentTarget.style.display = 'none'; }} />}
                                <span>{speaker.company}</span>
                            </div>}
                            <h3>{speaker.name}</h3>
                            <p className="speaker-bio">{speaker.role}</p>
                            </div>
                        </article>
                    ))}
                </div>
                <div role="status" aria-live="polite">
                    {query && (filteredSpeakers.length ? <p className="text-sm text-muted mt-6">{filteredSpeakers.length} {filteredSpeakers.length === 1 ? 'speaker' : 'speakers'} found.</p> : <div className="search-empty">
                        <h3 className="text-xl text-white mb-2">No speakers found</h3>
                        <p className="text-gray-400 mb-5">Try another name or company.</p>
                        <button className="secondary-link" onClick={() => setSearchTerm('')}>Clear search</button>
                    </div>)}
                </div>
                <div className="roster-note">
                    <div className="roster-note-grid">
                        <div className="">
                            <h3 className="text-lg font-medium text-white mb-3 leading-relaxed max-w-4xl">
                                This page shows many of our public speakers, but not every conversation is listed here.
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed max-w-3xl">
                                GDSC Rochester has also hosted select invite-only fireside chats with renowned founders, technologists, and industry figures behind companies you recognize and products you use, including multi-trillion-dollar technology companies. Some conversations were intentionally small-room, so we cannot always publish every name.
                            </p>
                        </div>
                        <div className="lg:border-l border-border lg:pl-8">
                            <div className="text-base font-medium text-white leading-snug">
                                Private sessions with founders and technologists whose work is already in your pocket.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Speakers;
