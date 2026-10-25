import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { EVENTS } from '../constants';

const Events: React.FC = () => {
    return (
        <section id="events" className="site-section bg-paper border-b border-border">
            <div className="site-container">
                <div className="directory-section-header">
                    <div>

                        <h2 className="section-heading">
                            Events & Workshops
                        </h2>
                        <p className="text-gray-400 font-normal leading-relaxed max-w-2xl">
                            From beginner-friendly introductions to advanced technical deep dives, our events bring together students, faculty, and industry experts to learn, build, and innovate.
                        </p>
                    </div>
                    <a href="https://ccc.rochester.edu/events?&group_ids=30850" target="_blank" rel="noopener noreferrer" className="text-sm text-white hover:text-gray-400 transition-colors mt-6 md:mt-0 flex items-center gap-2 whitespace-nowrap">
                        VIEW UPCOMING EVENTS <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="event-list">
                    {EVENTS.map((event) => (
                        <div key={event.id} className="event-row">

                            <h3 className="event-title">
                                {event.title}
                            </h3>
                            <p className="event-description">
                                {event.description}
                            </p>

                            {event.link && (
                                <a
                                    href={event.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-google-blue hover:text-white transition-colors"
                                >
                                    Explore <ArrowUpRight className="w-3 h-3" />
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                <div className="event-archive">
                    <h3 className="font-semibold text-2xl text-white mb-2">Event Archive</h3>
                    <p className="text-muted font-normal mb-6">Browse our history of technical workshops, guest speaker sessions, and collaborative hackathons.</p>
                    <div className="text-xs text-muted italic mb-6">Note: Sign in required to view event details and photos</div>
                    <a href="https://ccc.rochester.edu/events?show=past&group_ids=30850" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all text-xs uppercase tracking-wide">
                        View Past Events
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Events;
