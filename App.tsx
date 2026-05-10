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
        <div className="min-h-screen bg-midnight-950 text-white selection:bg-google-blue selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <Speakers />
                <Leadership />
                <Events />
                <Highlights />
                <About />
            </main>
            <Footer />
        </div>
    );
};

export default App;