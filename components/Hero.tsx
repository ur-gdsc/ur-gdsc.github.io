import { assetPath } from '../utils/assetPath';
import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => (
    <section id="home" className="community-hero">
        <div className="hero-copy">
            <h1>Ever Better.<br /><span>Ever Bolder.</span></h1>
            <p className="hero-identity">Google Developer Student Club<br />University of Rochester</p>
            <p className="hero-description">We bridge the gap between theory and practice. Join a community of student developers solving real-world problems with Google technologies, from AI and cloud computing to mobile development and beyond.</p>
            <div className="hero-actions">
                <a href="https://www.instagram.com/gdsc.uofr/" target="_blank" rel="noopener noreferrer" className="primary-link">Join our community <ArrowUpRight size={16} aria-hidden="true" /></a>
                <a href="#events" className="secondary-link">Explore events <ArrowRight size={16} aria-hidden="true" /></a>
            </div>
            <p className="hero-welcome">All majors. All experience levels. Come curious.</p>
        </div>
        <figure className="hero-photograph">
            <img src={assetPath('/nasa-event.png')} alt="Rochester students with Halyn at the chapter’s NASA Stories event" width="991" height="762" fetchPriority="high" />
            <figcaption><span>NASA Stories with Halyn</span><a href="#highlights">More from the chapter <ArrowRight size={14} aria-hidden="true" /></a></figcaption>
        </figure>
    </section>
);
export default Hero;
