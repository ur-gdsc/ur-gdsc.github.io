import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Speakers', href: '#speakers' },
        { name: 'Team', href: '#leadership' },
        { name: 'Events', href: '#events' },
        { name: 'Mission', href: '#about' },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? 'bg-paper/85 backdrop-blur-md border-b border-border' : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent backdrop-blur-[2px] border-b border-transparent'}`}>
                <div className="max-w-[1400px] mx-auto px-6 h-20 flex justify-between items-center">
                    <a href="#home" className="flex items-center gap-3 z-50">
                        <img
                            src="/google-developers-seeklogo.svg"
                            alt="Google Developer Student Clubs · University of Rochester"
                            className="h-8 w-auto"
                        />
                        <div className="text-xl tracking-tight text-white">
                            <span className="font-semibold">GDSC</span> <span className="font-light text-gray-400">Rochester</span>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                className="text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-wide"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a 
                            href="https://www.instagram.com/gdsc.uofr/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-2 border border-border rounded-full hover:bg-white hover:text-black transition-all duration-300 text-sm"
                        >
                            Join Us
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button 
                        className="md:hidden text-white z-50"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                    >
                        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-paper z-30 transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-center items-center gap-8 ${isMobileOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                {navLinks.map((link) => (
                    <a 
                        key={link.name} 
                        href={link.href} 
                        className="text-2xl font-medium text-white hover:text-google-blue transition-colors"
                        onClick={() => setIsMobileOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </>
    );
};

export default Navbar;
