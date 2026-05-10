import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { SPEAKERS, UPCOMING_SPEAKERS } from '../constants';
import { ImageWithFallback } from './ImageWithFallback';

const Speakers: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredSpeakers = SPEAKERS.filter(speaker =>
        speaker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        speaker.company?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section id="speakers" className="py-32 bg-paper border-b border-border">
            <div className="container max-w-[1400px] mx-auto px-6">

                {/* Upcoming Speakers */}
                {UPCOMING_SPEAKERS.length > 0 && (
                <div className="mb-32">
                    <div className="mb-16">
                        <span className="text-xs font-medium text-google-blue uppercase tracking-widest mb-4 block">Coming Soon</span>
                        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                            Upcoming Speakers
                        </h2>
                        <p className="text-gray-400 max-w-xl leading-relaxed">
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
                                            <span className="text-xs text-gray-500">{speaker.affiliation}</span>
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
                <div className="grid md:grid-cols-[1fr_auto] gap-12 mb-10 items-end">
                    <div>
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-4 block">Past Guests</span>
                        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                            Featured Speakers
                        </h2>
                        <p className="text-gray-400 max-w-xl leading-relaxed">
                            Industry pioneers, innovators, and thought leaders who have visited Rochester to connect with students.
                        </p>
                    </div>
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder="Search speakers..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-transparent border-b border-gray-700 py-3 pl-0 pr-8 text-white focus:outline-none focus:border-white transition-all w-64 text-sm placeholder:text-gray-600"
                        />
                        <Search className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-600 w-4 h-4" />
                    </div>
                </div>

                <div className="mb-20 border-y border-border py-8 md:py-10">
                    <div className="grid lg:grid-cols-[minmax(0,1fr)_18rem] gap-8 lg:gap-12 items-start">
                        <div className="border-l-2 border-white pl-6 md:pl-8">
                            <span className="text-xs font-medium text-gray-500 uppercase tracking-[0.22em] mb-3 block">
                                A Note on the Roster
                            </span>
                            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 leading-tight max-w-4xl">
                                This page shows many of our public speakers, but not every conversation is listed here.
                            </h3>
                            <p className="text-gray-400 leading-relaxed max-w-3xl">
                                GDSC Rochester has also hosted select invite-only fireside chats with renowned founders, technologists, and industry figures behind companies you recognize and products you use, including multi-trillion-dollar technology companies. Some conversations were intentionally small-room, so we cannot always publish every name.
                            </p>
                        </div>
                        <div className="lg:border-l border-border lg:pl-8">
                            <div className="text-xs text-gray-500 uppercase tracking-[0.22em] mb-3">
                                Also Hosted
                            </div>
                            <div className="text-lg md:text-xl font-semibold text-white leading-snug">
                                Private sessions with founders and technologists whose work is already in your pocket.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Past Speakers Grid */}
                {(() => {
                    const leftover = filteredSpeakers.length % 4;
                    const fullCount = filteredSpeakers.length - leftover;
                    const fullRows = filteredSpeakers.slice(0, fullCount);
                    const remainder = filteredSpeakers.slice(fullCount);

                    const renderCard = (speaker: typeof filteredSpeakers[number]) => (
                        <div key={speaker.id} className="bg-paper p-8 group hover:bg-surface transition-colors relative overflow-hidden h-full flex flex-col">
                            <div className="mb-6 overflow-hidden transition-all duration-700 ease-in-out">
                                <div className="aspect-[3/4] w-full relative">
                                    <ImageWithFallback
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="w-full h-full object-cover"
                                    />
                                    {speaker.companyLogo && (
                                        <div className="absolute top-4 right-4 flex items-center gap-2.5 bg-white shadow-xl ring-1 ring-black/10 rounded-full pl-2 pr-4 py-2 transition-transform duration-300 group-hover:scale-105">
                                            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center overflow-hidden">
                                                <img
                                                    src={speaker.companyLogo}
                                                    alt={speaker.company}
                                                    className="w-9 h-9 object-contain"
                                                    onError={(e) => { ((e.target as HTMLImageElement).parentElement?.parentElement as HTMLElement).style.display = 'none'; }}
                                                />
                                            </div>
                                            <span className="text-sm font-semibold tracking-wide text-black whitespace-nowrap">
                                                {speaker.company}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-auto">
                                <h4 className="font-semibold text-2xl text-white mb-3 group-hover:translate-x-2 transition-transform duration-300">
                                    {speaker.name}
                                </h4>
                                <p className="text-sm text-gray-500 leading-relaxed border-t border-border pt-4">
                                    {speaker.role}
                                </p>
                            </div>
                        </div>
                    );

                    return (
                        <>
                            {fullRows.length > 0 && (
                                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border ${remainder.length > 0 ? 'border-b-0' : ''}`}>
                                    {fullRows.map(renderCard)}
                                </div>
                            )}
                            {remainder.length > 0 && (
                                <div className="flex justify-center">
                                    <div className="flex flex-col md:flex-row gap-px bg-border border border-border border-t-0">
                                        {remainder.map((speaker) => (
                                            <div key={speaker.id} className="md:w-[25vw] md:max-w-[350px]">
                                                {renderCard(speaker)}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    );
                })()}
            </div>
        </section>
    );
};

export default Speakers;
