import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { EVENTS } from '../constants';

const Events: React.FC = () => {
    return (
        <section id="events" className="py-32 bg-paper border-b border-border">
            <div className="container max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 pb-6 border-b border-border">
                    <div>
                        <span className="text-xs text-gray-500 uppercase tracking-widest mb-4 block">What's Happening</span>
                        <h2 className="text-4xl font-semibold text-white mb-4">
                            Events & Workshops
                        </h2>
                        <p className="text-gray-400 font-light leading-relaxed max-w-2xl">
                            From beginner-friendly introductions to advanced technical deep dives, our events bring together students, faculty, and industry experts to learn, build, and innovate.
                        </p>
                    </div>
                    <a href="https://ccc.rochester.edu/events?&group_ids=30850" target="_blank" rel="noopener noreferrer" className="text-sm text-white hover:text-gray-400 transition-colors mt-6 md:mt-0 flex items-center gap-2 whitespace-nowrap">
                        VIEW UPCOMING EVENTS <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:divide-x divide-border border-b border-border">
                    {EVENTS.map((event, index) => (
                        <div key={event.id} className="group p-10 hover:bg-surface transition-colors relative">
                            <div className="text-xs text-gray-600 mb-8">0{index + 1}</div>
                            <h3 className="font-semibold text-3xl text-white mb-6 group-hover:translate-x-2 transition-transform duration-300">
                                {event.title}
                            </h3>
                            <p className="text-gray-400 font-light leading-relaxed mb-10 min-h-[80px]">
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
                
                <div className="mt-12 p-8 border border-border text-center">
                    <h3 className="font-semibold text-2xl text-white mb-2">Event Archive</h3>
                    <p className="text-gray-500 font-light mb-6">Browse our history of technical workshops, guest speaker sessions, and collaborative hackathons.</p>
                    <div className="text-xs text-gray-600 italic mb-6">Note: Sign in required to view event details and photos</div>
                    <a href="https://ccc.rochester.edu/events?show=past&group_ids=30850" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all text-xs uppercase tracking-wide">
                        View Past Events
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Events;