import { assetPath } from '../utils/assetPath';
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
    { name: 'Speakers', href: '#speakers' },
    { name: 'Team', href: '#leadership' },
    { name: 'Events', href: '#events' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Mission', href: '#about' },
];

const Navbar: React.FC = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const toggle = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!isMobileOpen) return;
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMobileOpen(false);
                toggle.current?.focus();
            }
        };
        const closeOnResize = () => { if (window.innerWidth >= 768) setIsMobileOpen(false); };
        window.addEventListener('keydown', closeOnEscape);
        window.addEventListener('resize', closeOnResize);
        return () => {
            window.removeEventListener('keydown', closeOnEscape);
            window.removeEventListener('resize', closeOnResize);
        };
    }, [isMobileOpen]);

    return (
        <header className="site-header">
            <nav aria-label="Main navigation" className="masthead-inner">
                <a href="#home" className="wordmark" onClick={() => setIsMobileOpen(false)}>
                    <img src={assetPath('/google-developers-seeklogo.svg')} alt="" width="44" height="24" />
                    <span className="wordmark-name">GDSC <span>Rochester</span></span>
                </a>
                <div className="desktop-navigation">
                    {navLinks.map(link => <a key={link.name} href={link.href} className="nav-link">{link.name}</a>)}
                    <a href="https://www.instagram.com/gdsc.uofr/" target="_blank" rel="noopener noreferrer" className="join-link">Join us <ArrowUpRight className="w-4 h-4" aria-hidden="true" /></a>
                </div>
                <button ref={toggle} className="menu-toggle" aria-label={isMobileOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={isMobileOpen} aria-controls="mobile-navigation" onClick={() => setIsMobileOpen(!isMobileOpen)}>
                    {isMobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
                </button>
            </nav>
            {isMobileOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-navigation">
                {navLinks.map(link => <a key={link.name} href={link.href} onClick={() => setIsMobileOpen(false)}>{link.name}</a>)}
                <a href="https://www.instagram.com/gdsc.uofr/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileOpen(false)}>Join us <ArrowUpRight className="w-4 h-4" aria-hidden="true" /></a>
            </nav>}
        </header>
    );
};

export default Navbar;
