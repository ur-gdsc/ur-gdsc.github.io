import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Speakers from './components/Speakers';
import Leadership from './components/Leadership';
import Events from './components/Events';
import Highlights from './components/Highlights';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-paper text-white selection:bg-google-blue selection:text-white">
            <a className="skip-link" href="#main-content">Skip to content</a>
            <Navbar />
            <div className="page-layout">
            <main id="main-content" tabIndex={-1}>
                <Hero />
                <Highlights />
                <Speakers />
                <Leadership />
                <Events />
                <About />
            </main>
            </div>
            <Footer />
        </div>
    );
};

export default App;