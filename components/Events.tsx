import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { EVENTS } from '../constants';
const Events: React.FC = () => <section id="events" className="site-section">
    <div className="section-intro"><h2 className="section-heading">Events & Workshops</h2><div><p>Explore chapter workshops, guest talks, and student projects. Follow the event listings for current dates and registration details.</p><a className="text-link" href="https://ccc.rochester.edu/events?&group_ids=30850" target="_blank" rel="noopener noreferrer">Check event listings <ArrowUpRight size={18} aria-hidden="true" /></a></div></div>
    <div className="event-list">{EVENTS.map(event => <article key={event.id} className="event-row"><h3>{event.title}</h3><p>{event.description}</p>{event.link && <a className="text-link" href={event.link} target="_blank" rel="noopener noreferrer">Explore <ArrowUpRight size={18} aria-hidden="true" /></a>}</article>)}</div>
    <aside className="event-archive"><div><h3>Event Archive</h3><p>Browse our history of workshops, guest speakers, and collaborative hackathons.</p><p className="archive-signin">Some CCC event details or photos may require a university sign-in.</p></div><a className="text-link" href="https://ccc.rochester.edu/events?show=past&group_ids=30850" target="_blank" rel="noopener noreferrer">View past events <ArrowUpRight size={18} aria-hidden="true" /></a></aside>
</section>;
export default Events;
