import React from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import ContentSources from './ContentSources';
import { HIGHLIGHTS } from '../constants';
import { ImageWithFallback } from './ImageWithFallback';

const Highlights: React.FC = () => (
    <section id="highlights" className="site-section">
        <div className="section-intro">
            <h2 className="section-heading">See What We're Building</h2>
            <p>A few moments from our talks, workshops, and time together.</p>
        </div>
        <div className="story-list">
            {HIGHLIGHTS.map(highlight => (
                <article key={highlight.id} className="highlight-card">
                    <div className="story-image"><ImageWithFallback src={highlight.image} alt={highlight.title} /></div>
                    <div className="story-copy">
                        <h3>{highlight.title}</h3>
                        <details className="story-recap">
                            <summary>Read the recap <ChevronDown size={18} aria-hidden="true" /></summary>
                            <p>{highlight.bio}</p>
                            <ContentSources sources={highlight.sources} />
                        </details>
                    </div>
                </article>
            ))}
        </div>
        <div className="social-section">
            <p>More guest speakers, workshops, and everything in between.</p>
            <a className="text-link" href="https://www.instagram.com/gdsc.uofr/" target="_blank" rel="noopener noreferrer">Follow @gdsc.uofr <ArrowUpRight size={18} aria-hidden="true" /></a>
            <details className="social-feed">
                <summary>View the Instagram feed</summary>
                <iframe src="https://www.instagram.com/gdsc.uofr/embed/" title="GDSC UofR Instagram feed" loading="lazy" />
                <a className="text-link" href="https://www.instagram.com/gdsc.uofr/" target="_blank" rel="noopener noreferrer">Open Instagram if the feed is unavailable <ArrowUpRight size={18} aria-hidden="true" /></a>
            </details>
        </div>
    </section>
);
export default Highlights;
