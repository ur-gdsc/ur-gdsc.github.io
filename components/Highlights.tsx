import React from 'react';
import { HIGHLIGHTS } from '../constants';
import { ImageWithFallback } from './ImageWithFallback';

const Highlights: React.FC = () => {
    return (
        <section className="py-32 bg-paper border-b border-border">
            <div className="container max-w-[1400px] mx-auto px-6">
                <div className="text-center mb-20">
                     <span className="text-xs text-gray-500 uppercase tracking-widest mb-4 block">Inside the Chapter</span>
                     <h2 className="text-4xl font-semibold text-white mb-6">See What We're Building</h2>
                     <p className="text-gray-400 font-light max-w-2xl mx-auto">
                        Photos, recaps, and in-progress snapshots from workshops, socials, and Solution Challenge sprints. Tap through the stories without leaving the site.
                     </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {HIGHLIGHTS.map((highlight) => (
                        <article key={highlight.id} className="border border-border bg-paper group hover:border-gray-700 transition-colors">
                            <div className="aspect-video w-full overflow-hidden border-b border-border transition-all duration-700">
                                <ImageWithFallback 
                                    src={highlight.image} 
                                    alt={highlight.title} 
                                    className="w-full h-full object-cover" 
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="font-semibold text-2xl text-white mb-4 group-hover:text-gray-200 transition-colors">
                                    {highlight.title}
                                </h3>
                                <p className="text-sm text-gray-400 font-light leading-relaxed">
                                    {highlight.bio}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                 <div className="mt-16 text-center">
                    <p className="text-gray-500 font-light mb-8">
                        And many more guest speakers, workshops, and socials. Follow us on <a href="https://www.instagram.com/gdsc.uofr/" target="_blank" rel="noopener" className="text-white underline decoration-1 underline-offset-4">@gdsc.uofr</a> for the latest.
                    </p>
                    <div className="border border-border p-4 max-w-4xl mx-auto bg-black">
                         <iframe
                            className="w-full min-h-[500px]"
                            src="https://www.instagram.com/gdsc.uofr/embed/"
                            title="GDSC UofR Instagram feed"
                            loading="lazy"
                            allowTransparency={true}
                        ></iframe>
                    </div>
                    <p className="mt-4 text-xs text-gray-600">
                        Can't see the feed? <a href="https://www.instagram.com/gdsc.uofr/" target="_blank" rel="noopener" className="text-gray-400 hover:text-white">Open Instagram →</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Highlights;