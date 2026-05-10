import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-paper py-20 border-t border-border">
            <div className="container max-w-[1400px] mx-auto px-6 text-center">
                <div className="text-2xl font-medium text-white mb-6 tracking-wide">Meliora</div>

                <a
                    href="mailto:uofrdsc@gmail.com?cc=krish.jain@rochester.edu,hwongbud@u.rochester.edu&subject=GDSC%20Rochester%20Inquiry"
                    className="inline-flex items-center gap-3 px-6 py-3 mb-10 rounded-full border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all text-sm tracking-wide"
                >
                    <span>Get in Touch</span>
                    <span className="text-gray-400 group-hover:text-black">uofrdsc@gmail.com</span>
                </a>

                <div className="flex justify-center gap-8 mb-12">
                    <a href="#home" className="text-xs text-gray-500 hover:text-white uppercase tracking-wide transition-colors">Home</a>
                    <a href="#speakers" className="text-xs text-gray-500 hover:text-white uppercase tracking-wide transition-colors">Speakers</a>
                    <a href="#events" className="text-xs text-gray-500 hover:text-white uppercase tracking-wide transition-colors">Events</a>
                    <a href="https://www.instagram.com/gdsc.uofr/" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-white uppercase tracking-wide transition-colors">Instagram</a>
                    <a href="mailto:uofrdsc@gmail.com?cc=krish.jain@rochester.edu,hwongbud@u.rochester.edu" className="text-xs text-gray-500 hover:text-white uppercase tracking-wide transition-colors">Contact</a>
                </div>

                <div className="text-gray-700 text-[10px] uppercase tracking-wide">
                    © 2025-2026 GDSC University of Rochester
                </div>
            </div>
        </footer>
    );
};

export default Footer;