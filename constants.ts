import { Speaker, Leader, Event, Alumni, UpcomingSpeaker, ContentSource } from './types';

export const SPEAKERS: Speaker[] = [
    {
        id: '12',
        name: 'Jeff Nguyen',
        role: "Founder of BobaTalks, turning a college coffee-chat project into a nonprofit offering free career mentorship. He brings recruiting experience from Amazon and Google.",
        sources: [{"title": "Jeff Nguyen’s career background", "url": "https://www.linkedin.com/posts/jvngyn_yesterday-bobatalks-turned-5-years-old-activity-7313215778500067328-UbGJ"}],
        image: '/jeff-nguyen.jpg',
        company: 'BobaTalks',
        companyLogo: 'https://www.google.com/s2/favicons?domain=bobatalks.com&sz=128'
    },
    {
        id: '3',
        name: 'Phoebe Gates',
        role: "Co-founder of Phia with Sophia Kianni, growing the shopping app to more than 1.5 million users and a $35.5 million Series A in 2026. Daughter of Bill Gates and Melinda French Gates.",
        sources: [{"title": "Phia founder and investor update", "url": "https://www.linkedin.com/posts/scribble-ventures_scribble-ventures-company-phia-led-by-co-founders-activity-7467282696461897728-6Lwx"}],
        image: 'https://businesswomen.com/wp-content/uploads/2025/10/phoebe-gates.jpg.webp',
        company: 'Phia',
        companyLogo: 'https://www.google.com/s2/favicons?domain=phia.com&sz=128'
    },
    {
        id: '8',
        name: 'Stephen Byram Furber',
        role: "A principal designer of the BBC Microcomputer and the original ARM processor. A Computer History Museum Fellow and emeritus professor at Manchester, his engineering helped lay the foundations of modern mobile computing.",
        sources: [{"title": "Computer History Museum biography", "url": "https://computerhistory.org/profile/steve-furber/"}, {"title": "Manchester faculty profile", "url": "https://research.manchester.ac.uk/en/persons/steve.furber"}],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Steve_Furber.jpg/330px-Steve_Furber.jpg',
        company: 'University of Manchester',
        companyLogo: 'https://www.google.com/s2/favicons?domain=manchester.ac.uk&sz=128'
    },
    {
        id: '4',
        name: 'Dr. Telle Whitney',
        role: "Co-founded the Grace Hopper Celebration with Anita Borg in 1994 and led the Anita Borg Institute as CEO from 2002 to 2017. A member of the National Academy of Engineering.",
        sources: [{"title": "Telle Whitney’s biography", "url": "https://www.tellewhitney.com/"}],
        image: 'https://images.squarespace-cdn.com/content/v1/5c49fe1a45776ed167cb91ad/1552442637336-G2N9Q9PEINJIWFJL0RXZ/2014-10-08Telle+Whitney2.jpg',
        company: 'AnitaB.org (former CEO)',
        companyLogo: 'https://www.google.com/s2/favicons?domain=anitab.org&sz=128'
    },
    {
        id: '7',
        name: 'Dr. Vivienne Ming',
        role: "Theoretical neuroscientist who has founded seven startups and The Human Trust. Her AI projects span education, hiring bias, and health, including tools for managing her son’s diabetes. Named one of the BBC’s 100 Women in 2017.",
        sources: [{"title": "Vivienne Ming’s biography", "url": "https://socos.org/about-vivienne"}],
        image: 'https://zoiccapital.com/wp-content/uploads/2022/05/Vivienne-Ming.jpeg',
        company: 'The Human Trust',
        companyLogo: 'https://www.google.com/s2/favicons?domain=thehumantrust.org&sz=128'
    },
    {
        id: '1',
        name: 'Ryan Mac',
        role: "New York Times technology reporter and co-author of Character Limit, the inside story of Elon Musk’s Twitter takeover. His reporting on Facebook at BuzzFeed News earned a George Polk Award and a Mirror Award.",
        sources: [{"title": "Penguin Random House author biography", "url": "https://www.penguinrandomhouse.com/books/737290/character-limit-by-kate-conger-and-ryan-mac/"}],
        image: 'https://images4.penguinrandomhouse.com/author/2290046',
        company: 'NY Times',
        companyLogo: 'https://www.google.com/s2/favicons?domain=nytimes.com&sz=128'
    },
    {
        id: '5',
        name: 'Jack Sweeney',
        role: "Creator of ElonJet and a Forbes 30 Under 30 honoree. His public-data flight trackers drew worldwide attention: Elon Musk banned ElonJet from Twitter in 2022, and Taylor Swift’s lawyers sent him a cease-and-desist letter in December 2023.",
        sources: [{"title": "Forbes 30 Under 30 profile", "url": "https://www.forbes.com/profile/jack-sweeney/"}, {"title": "Associated Press reporting", "url": "https://ny1.com/nyc/all-boroughs/ap-top-news/2024/02/07/taylor-swift-launches-legal-broadside-at-a-college-student-who-tracks-private-jets-via-public-data"}],
        image: 'https://ichef.bbci.co.uk/news/480/cpsprodpb/136E6/production/_132609597_sw.png.webp',
        company: 'Ground Control'
    },
    {
        id: '11',
        name: 'Monojit Choudhury',
        role: "Professor of Natural Language Processing at MBZUAI, studying how AI represents languages and cultures. Previously a principal researcher at Microsoft Research India and a principal applied scientist at Microsoft Turing, where he helped build the new Bing.",
        sources: [{"title": "Plaksha faculty biography", "url": "https://plaksha.edu.in/faculty-details/monojit"}, {"title": "Microsoft and MBZUAI career announcement", "url": "https://www.linkedin.com/posts/monojit-choudhury-54225898_nlproc-activity-7136571091191283712-zPMh"}],
        image: 'https://staticcdn.mbzuai.ac.ae/mbzuaiwpprd01/2026/03/monojit-choudhury2.jpg',
        company: 'MBZUAI',
        companyLogo: 'https://www.google.com/s2/favicons?domain=mbzuai.ac.ae&sz=128'
    },
    {
        id: '10',
        name: 'Ruben Mayer',
        role: "Founded Scout AI, which was acquired by Scale AI. He went on to build generative AI products at Scale and contribute to Meta’s Superintelligence Labs.",
        sources: [{"title": "Ruben Mayer’s professional profile", "url": "https://www.linkedin.com/in/rubenmayer"}],
        image: 'https://wiza.co/svc/files/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MzEzNTU1NzQsInB1ciI6ImJsb2JfaWQifX0=--bc6eb6185e691615b1482fd7978c3a545a2be07c/profile-picture-rubenmayer.jpg',
        company: 'Scale AI / Meta experience',
        companyLogo: 'https://www.google.com/s2/favicons?domain=scale.com&sz=128'
    },
    {
        id: '9',
        name: 'Dr. Andrew Hall',
        role: "Stanford’s Davies Family Professor of Political Economy and a Hoover Institution Senior Fellow. An adviser to Meta and a16z crypto, he studies democracy, technology, and how online communities govern themselves.",
        sources: [{"title": "Stanford faculty profile", "url": "https://www.gsb.stanford.edu/faculty-research/faculty/andrew-b-hall"}],
        image: 'https://stanforddpl.org/authors/andyhall/avatar_hu243d3dd508219a04511e97ec850dfe89_499658_270x270_fill_q90_lanczos_center.jpg',
        company: 'Stanford University',
        companyLogo: 'https://www.google.com/s2/favicons?domain=stanford.edu&sz=128'
    },
    {
        id: '2',
        name: 'Kurt Wagner',
        role: "Bloomberg journalist covering the companies shaping social media. His book Battle for the Bird goes inside Jack Dorsey’s Twitter and Elon Musk’s $44 billion takeover, tracing the power struggles behind one of tech’s biggest deals.",
        sources: [{"title": "Battle for the Bird publisher page", "url": "https://www.hachette.co.uk/titles/kurt-wagner/battle-for-the-bird/9781399714310/"}],
        image: 'https://pbs.twimg.com/profile_images/1121824103491497984/_KeWsihV_400x400.jpg',
        company: 'Bloomberg',
        companyLogo: 'https://www.google.com/s2/favicons?domain=bloomberg.com&sz=128'
    },
    {
        id: '6',
        name: 'Jessica Theodat',
        role: "Senior site reliability engineer and security tech lead at Google. Her work connects large-scale infrastructure, security incident response, and risk management—the engineering behind keeping complex systems secure and dependable.",
        sources: [{"title": "Google SRE speaker profile", "url": "https://sre.google/prodcast/transcripts/sre-prodcast-04-01/"}],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq3SXI0CLwOW_l6ISw0YEYghkWdIE2-wNDAQ&s',
        company: 'Google',
        companyLogo: 'https://www.google.com/s2/favicons?domain=google.com&sz=128'
    }
];

export const UPCOMING_SPEAKERS: UpcomingSpeaker[] = [];

export const CURRENT_LEADERS: Leader[] = [
    { id: 'curr-adv1', name: 'Eric Pope', linkedin: 'https://www.linkedin.com/in/eric-pope-profile/', role: 'Advisor', image: '/eric.jpeg', year: '2026-2027' },
    { id: 'curr-pres1', name: 'Deniz Deryaoglu', linkedin: 'https://www.linkedin.com/in/deniz-deryaoglu/', role: 'President', image: '/deniz2.jpg', year: '2026-2027' },
    { id: 'curr-vp1', name: 'Earvin Chen', linkedin: 'https://www.linkedin.com/in/earvin-chen/', role: 'Vice President', image: '/earvin2.jpg', year: '2026-2027' },
    { id: 'curr-evt1', name: 'Serena Chen', linkedin: 'https://www.linkedin.com/in/serenac0210/', role: 'Events Manager', image: '/serena2.jpg', year: '2026-2027' },
    { id: 'curr-sec1', name: 'Danica Kim', linkedin: 'https://www.linkedin.com/in/danica-kim/', role: 'Secretary', image: '/danica2.jpg', year: '2026-2027' },
    { id: 'curr-bus1', name: 'Minh Pham', linkedin: 'https://www.linkedin.com/in/minh-pham-9804982bb/', role: 'Business Manager', image: '/minh2.png', year: '2026-2027' },
    { id: 'curr-mkt1', name: 'Hailey Wong-Budiman', linkedin: 'https://www.linkedin.com/in/haileylwb/', role: 'Marketing Lead', image: '/hailey2.png', year: '2026-2027' },
    { id: 'curr-tech1', name: 'Henry Shen', linkedin: 'https://www.linkedin.com/in/henry-shen-139892385/', role: 'Tech Lead', image: '/henry.jpg', year: '2026-2027' },
    { id: 'curr-tech2', name: 'Anh Nguyen', linkedin: 'https://www.linkedin.com/in/nguyen-anh-1dior/', role: 'Tech Lead', image: '/anh.jpg', year: '2026-2027' },
    { id: 'curr-tech3', name: 'Jeff Munkondya', linkedin: 'https://www.linkedin.com/in/jeff-munkondya/', role: 'Tech Lead', image: '/jeff.png', year: '2026-2027' },
];

export const LEADERS: Leader[] = [
    { id: 'adv1', name: 'Eric Pope', linkedin: 'https://www.linkedin.com/in/eric-pope-profile/', role: 'Advisor', image: '/eric.jpeg', year: '2025-2026' },
    { id: 'pres1', name: 'Hailey Wong-Budiman', linkedin: 'https://www.linkedin.com/in/haileylwb/', role: 'President', image: '/hailey.png', year: '2025-2026' },
    { id: 'vp1', name: 'Krish Jain', linkedin: 'https://www.linkedin.com/in/krishjainx/', role: 'Vice President', image: '/krish.jpg', year: '2025-2026' },
    { id: 'sec1', name: 'Deniz Deryaoglu', linkedin: 'https://www.linkedin.com/in/deniz-deryaoglu/', role: 'Secretary', image: '/deniz.jpg', year: '2025-2026' },
    { id: 'bus1', name: 'Minh Pham', linkedin: 'https://www.linkedin.com/in/minh-pham-9804982bb/', role: 'Business Manager', image: '/minh.jpeg', year: '2025-2026' },
    { id: 'evt1', name: 'Lucy Jijo', linkedin: 'https://www.linkedin.com/in/lucy-jijo/', role: 'Events Manager', image: '/lucy.jpeg', year: '2025-2026' },
    { id: 'tech1', name: 'Rory Brennan-Jones', linkedin: 'https://www.linkedin.com/in/rory-aigas-jones/', role: 'Technical Lead', image: '/rory.jpeg', year: '2025-2026' },
    { id: 'tech2', name: 'Danica Kim', linkedin: 'https://www.linkedin.com/in/danica-kim/', role: 'Technical Lead', image: '/danica.jpg', year: '2025-2026' },
    { id: 'mkt1', name: 'Xintong Lin', linkedin: 'https://www.linkedin.com/in/xintonglinnn/', role: 'Marketing Lead', image: '/xintong.jpeg', year: '2025-2026' },
    { id: 'tech3', name: 'Abigail Briones Aranda', linkedin: 'https://www.linkedin.com/in/abigailbrionesaranda/', role: 'Technical Lead', image: '/abigail.jpg', year: '2025-2026' },
    { id: 'tech4', name: 'Serena Chen', linkedin: 'https://www.linkedin.com/in/serenac0210/', role: 'Technical Lead', image: '/serena.jpeg', year: '2025-2026' },
    { id: 'tech5', name: 'Earvin Chen', linkedin: 'https://www.linkedin.com/in/earvin-chen/', role: 'Technical Lead', image: '/earvin.jpg', year: '2025-2026' },
];

export const EVENTS: Event[] = [
    {
        id: 'e1',
        title: 'Technical Workshops',
        description: 'Chapter workshops cover technical topics such as web development and AI. Check the event listings for dates, topics, and any prerequisites.',
        icon: 'Code',
        link: 'https://ccc.rochester.edu/events?&group_ids=30850'
    },
    {
        id: 'e2',
        title: 'Solution Challenge 2025 (Archived)',
        description: 'Looking for a project to work on? Browse our current events for workshops and opportunities to build with other students.',
        icon: 'Trophy'
    },
    {
        id: 'e3',
        title: 'Stay Connected',
        description: 'Follow us on Instagram for event photos, announcements, project showcases, and behind-the-scenes looks at what we\'re building.',
        icon: 'Instagram',
        link: 'https://www.instagram.com/gdsc.uofr/'
    }
];

export interface Highlight {
    id: string;
    title: string;
    bio: string;
    image: string;
    sources?: ContentSource[];
}

export const HIGHLIGHTS: Highlight[] = [
    {
        id: 'h1',
        title: 'Conversation with Kurt Wagner',
        bio: "Bloomberg journalist Kurt Wagner joined us to talk about reporting on the people running Silicon Valley. His book Battle for the Bird follows Jack Dorsey, Elon Musk, and the $44 billion fight for Twitter, taking readers inside the decisions and power struggles behind the takeover.",
        sources: [{"title": "Battle for the Bird publisher page", "url": "https://www.hachette.co.uk/titles/kurt-wagner/battle-for-the-bird/9781399714310/"}],
        image: '578794565_780579844969848_2940123641571313587_n.jpg'
    },
    {
        id: 'h2',
        title: 'Building Phia with Phoebe Gates',
        bio: "Phoebe Gates, daughter of Bill Gates and Melinda French Gates, joined us to talk about building Phia with co-founder Sophia Kianni. The shopping app launched in April 2025 to help people compare retail and resale options. In 2026, Phia announced a $35.5 million Series A, following its $8 million seed round in September 2025, and shared that it had grown to more than 1.5 million users and nearly 10,000 retail brand partners.",
        sources: [{"title": "2026 founder and investor update", "url": "https://www.linkedin.com/posts/scribble-ventures_scribble-ventures-company-phia-led-by-co-founders-activity-7467282696461897728-6Lwx"}, {"title": "September 2025 seed announcement", "url": "https://www.prnewswire.com/news-releases/phia-raises-8-million-seed-round-led-by-kleiner-perkins-to-build-the-ai-agent-for-shopping-302559880.html"}],
        image: 'phoebe-event.png'
    },
    {
        id: 'h3',
        title: 'NASA Stories with Halyn',
        bio: "Halyn McKenzie joined us to share her journey from small-town Texas to Yale and NASA. A chemical and mechanical engineering student at Yale, she worked across NASA’s thermal systems, aircraft operations, and fuel-cell teams. Her aircraft work included designing window covers for a NASA research plane used to study the atmosphere. She also co-founded Yale’s Order of the Engineer chapter.",
        sources: [{"title": "Yale Engineering profile", "url": "https://engineering.yale.edu/news-and-events/news/yale-engineering-student-spotlight-halyn-mckenzie-25"}, {"title": "Chapter organizer’s event announcement", "url": "https://www.linkedin.com/posts/haileylwb_gdsc-universityofrochester-gracehoppercelebration-activity-7301727303418470401-O2Eo"}],
        image: 'nasa-event.png'
    }
];

export const FEATURES = [
    { number: '01', title: 'Project-Based Learning', desc: 'Learn with other students through practical projects, technical workshops, and hackathons.' },
    { number: '02', title: 'Google Developer Tools', desc: 'Get hands-on with Google’s tools for AI, cloud computing, web development, and mobile apps.' },
    { number: '03', title: 'Google Developer Community', desc: 'Meet student developers at Rochester and connect with Google’s wider developer community through workshops, talks, and shared projects.' },
    { number: '04', title: 'Community Projects', desc: 'Work with other students on technology for your community. Find your next project or teammate at a chapter event.' },
    { number: '05', title: 'Guest Talks & Mentorship', desc: 'Meet guest speakers, ask questions about their work, and learn from students building alongside you.' },
    { number: '06', title: 'All Majors Welcome', desc: 'You don’t have to study computer science to join. Bring your interests, questions, and whatever experience you have.' }
];

export const ALUMNI: Alumni[] = [
    {
        name: 'Richard Rashid',
        role: 'Founder of Microsoft Research and co-developer of the Mach operating system. Rochester MS ’77 and PhD ’80.',
        sources: [{ title: 'Microsoft Research biography', url: 'https://www.microsoft.com/en-us/research/people/rashid/' }],
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Rick_Rashid.jpg'
    },
    {
        name: 'Avie Tevanian',
        role: 'Former Apple senior vice president of Software Engineering and chief software technology officer; co-developer of Mach. Rochester BA ’83.',
        sources: [{ title: 'Apple appointment announcement', url: 'https://www.apple.com/uk/newsroom/2003/07/08Avie-Tevanian-Named-Chief-Software-Technology-Officer-of-Apple/' }, { title: 'Rochester alumni research history', url: 'https://www.cs.rochester.edu/news-events/news/archive/2015/2015-04-21_ACM_Software_System_Award%20.html' }],
        image: 'https://allaboutstevejobs.com/resources/img/pics/1999-09-30_01412.jpg'
    },
    {
        name: 'Bruce Schneier',
        role: 'Security technologist, cryptographer, and author. Rochester BS ’84.',
        sources: [{ title: 'Bruce Schneier’s biography', url: 'https://www.schneier.com/blog/about/' }],
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Bruce_Schneier_at_CoPS2013-IMG_9174.jpg'
    }
];

export const GDSC_SYSTEM_INSTRUCTION = `
You are the AI Assistant for the Google Developer Student Club (GDSC) at the University of Rochester.
Your goal is to help students learn about the club.

Key Info:
- Chapter slogan: "Ever Better. Ever Bolder." Meliora is the University’s motto and means "ever better."
- Mission: Bridge the gap between theory and practice.
- Activities: Technical workshops, student projects, and guest speakers. Consult current event listings for schedules; Solution Challenge 2025 is historical, not open registration.
- Tech: Google Cloud, AI, Web Dev, Mobile.
- Notable Alumni from U of R: Richard Rashid, Avie Tevanian, Bruce Schneier.
- Membership: Open to all majors, not just CS.

Tone: Enthusiastic, technical but accessible, welcoming, and "Googley" (innovative, helpful).
Never invent dates, benefits, funding figures, current jobs, speaker visits, or membership statistics. Do not promise cloud credits, prizes, or access to engineers. Distinguish historical events from current opportunities. Say when current information needs verification.
Keep answers concise (under 100 words).
`;
