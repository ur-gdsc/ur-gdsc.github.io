import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative border-b border-border campus-bg">
            <div className="container max-w-[1400px] mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
                <div className="space-y-10 animate-slide-up">
                    <div className="inline-block border border-border px-4 py-1.5 rounded-full">
                        <span className="text-xs text-gray-400 tracking-wide">
                            Google Developer Student Club &middot; University of Rochester
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl leading-[1.1] text-white">
                        <span className="font-light text-gray-300 block mb-2">Ever Better.</span>
                        <span className="font-semibold">Ever Bolder.</span>
                    </h1>

                    <p className="text-lg text-gray-400 max-w-md leading-relaxed pl-6 border-l border-white/20">
                        We bridge the gap between theory and practice. Join a community of student developers solving real-world problems with Google technologies, from AI and cloud computing to mobile development and beyond.
                    </p>

                    <div className="flex flex-wrap items-center gap-6 pt-4">
                        <a href="#events" className="group flex items-center gap-4 text-white uppercase tracking-wider hover:opacity-70 transition-opacity text-sm">
                            <span>Join Our Community</span>
                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </a>
                    </div>
                </div>

                {/* Right Side Stats */}
                <div className="relative hidden lg:block h-full min-h-[500px] py-12 pl-12">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <div className="text-4xl font-semibold text-white">2K+</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide">Global Chapters</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl font-semibold text-white">100+</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide">Countries Worldwide</div>
                        </div>
                        <div className="col-span-2 pt-12">
                            <div className="w-full h-px bg-border mb-8"></div>
                            <div className="space-y-2">
                                <div className="text-4xl font-semibold text-white">Open</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wide">To All Majors</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
