import React from 'react';
import { ChevronDown } from 'lucide-react';
import { HIGHLIGHTS } from '../constants';
import { ImageWithFallback } from './ImageWithFallback';

const Highlights: React.FC = () => {
    return (
        <section id="highlights" className="site-section bg-paper border-b border-border">
            <div className="site-container">
                <div className="stories-intro">

                     <h2 className="section-heading">See What We're Building</h2>
                     <p className="text-gray-400 font-normal max-w-2xl">
                        Photos, recaps, and in-progress snapshots from workshops, socials, and Solution Challenge sprints. Tap through the stories without leaving the site.
                     </p>
                </div>

                <div className="story-list">
                    {HIGHLIGHTS.map((highlight) => (
                        <article key={highlight.id} className="highlight-card">
                            <div className="story-image">
                                <ImageWithFallback
                                    src={highlight.image}
                                    alt={highlight.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="story-copy">
                                <h3 className="story-title">
                                    {highlight.title}
                                </h3>
                                <details className="story-recap">
                                    <summary>Read the recap <ChevronDown size={15} aria-hidden="true" /></summary>
                                    <p>{highlight.bio}</p>
                                </details>
                            </div>
                        </article>
                    ))}
                </div>

                 <div className="social-section">
                    <p className="text-muted font-normal mb-8">
                        And many more guest speakers, workshops, and socials. Follow us on <a href="https://www.instagram.com/gdsc.uofr/" target="_blank" rel="noopener" className="text-white underline decoration-1 underline-offset-4">@gdsc.uofr</a> for the latest.
                    </p>
                    <details className="social-feed max-w-4xl mx-auto">
                        <summary>View the Instagram feed</summary>
                        <div className="p-4 bg-black">
                         <iframe
                            className="w-full min-h-[500px]"
                            src="https://www.instagram.com/gdsc.uofr/embed/"
                            title="GDSC UofR Instagram feed"
                            loading="lazy"
                        ></iframe>
                        </div>
                    </details>
                    <p className="mt-4 text-xs text-muted">
                        Can't see the feed? <a href="https://www.instagram.com/gdsc.uofr/" target="_blank" rel="noopener" className="text-gray-400 hover:text-white">Open Instagram →</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Highlights;
