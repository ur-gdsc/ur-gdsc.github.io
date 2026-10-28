import React from 'react';
import ContentSources from './ContentSources';
import { ALUMNI, FEATURES } from '../constants';
import { ImageWithFallback } from './ImageWithFallback';
const About: React.FC = () => <section id="about" className="site-section">
    <div className="section-intro"><h2 className="section-heading">Innovation Meets Tradition</h2><p>Rochester alumni include Microsoft Research founder Richard Rashid, former Apple software executive Avie Tevanian, and security technologist Bruce Schneier. Our chapter brings students together to learn and build.</p></div>
    <div className="about-layout"><div className="alumni-section"><h3>Notable UR alumni in tech</h3>{ALUMNI.map(alum => <article key={alum.name} className="alumni-row"><ImageWithFallback src={alum.image} alt={alum.name} /><div><h4>{alum.name}</h4><p>{alum.role}</p><ContentSources sources={alum.sources} /></div></article>)}</div>
    <div className="feature-list">{FEATURES.map(f => <article key={f.number}><h3>{f.title}</h3><p>{f.desc}</p></article>)}</div></div>
    <ContentSources sources={[{ title: "Chapter LinkedIn", url: "https://www.linkedin.com/company/gdg-uofr" }, { title: "University club listing", url: "https://ccc.rochester.edu/club_signup?club_url=ucc&view=all" }, { title: "Google Developer Community", url: "https://developers.google.com/community" }]} />
</section>;
export default About;
