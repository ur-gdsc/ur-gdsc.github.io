import { Speaker, Leader, Event, Alumni, UpcomingSpeaker } from './types';

export const SPEAKERS: Speaker[] = [
    {
        id: '3',
        name: 'Phoebe Gates',
        role: 'Co‑founder of Phia, an AI‑driven shopping agent launched from her Stanford dorm room with activist Sophia Kianni; daughter of Bill & Melinda Gates.',
        image: 'https://businesswomen.com/wp-content/uploads/2025/10/phoebe-gates.jpg.webp',
        company: 'Phia',
        companyLogo: 'https://www.google.com/s2/favicons?domain=phia.com&sz=128'
    },
    {
        id: '8',
        name: 'Stephen Byram Furber',
        role: 'English computer scientist and hardware engineer; principal designer of the BBC Micro and ARM 32-bit RISC microprocessor; Emeritus ICL Professor of Computer Engineering at the University of Manchester.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Steve_Furber.jpg/330px-Steve_Furber.jpg',
        company: 'University of Manchester',
        companyLogo: 'https://www.google.com/s2/favicons?domain=manchester.ac.uk&sz=128'
    },
    {
        id: '4',
        name: 'Dr. Telle Whitney',
        role: 'Co-founder of the Grace Hopper Celebration, former CEO of AnitaB.org, championing women in technology',
        image: 'https://images.squarespace-cdn.com/content/v1/5c49fe1a45776ed167cb91ad/1552442637336-G2N9Q9PEINJIWFJL0RXZ/2014-10-08Telle+Whitney2.jpg',
        company: 'AnitaB.org',
        companyLogo: 'https://www.google.com/s2/favicons?domain=anitab.org&sz=128'
    },
    {
        id: '7',
        name: 'Dr. Vivienne Ming',
        role: 'Neuroscientist, co-founder of Socos Labs, BBC 100 Women honoree, pioneering work in AI and human potential',
        image: 'https://zoiccapital.com/wp-content/uploads/2022/05/Vivienne-Ming.jpeg',
        company: 'Socos Labs',
        companyLogo: 'https://www.google.com/s2/favicons?domain=socos.org&sz=128'
    },
    {
        id: '1',
        name: 'Ryan Mac',
        role: 'Technology reporter at The New York Times, co-authored \'Character Limit\' about Twitter\'s transformation',
        image: 'https://images4.penguinrandomhouse.com/author/2290046',
        company: 'NY Times',
        companyLogo: 'https://www.google.com/s2/favicons?domain=nytimes.com&sz=128'
    },
    {
        id: '5',
        name: 'Jack Sweeney',
        role: 'Creator of @ElonJet, the bot tracking Elon Musk\'s private jet via public ADS-B data, which Musk banned from Twitter after buying the platform despite promising not to; founder of Ground Control.',
        image: 'https://ichef.bbci.co.uk/news/480/cpsprodpb/136E6/production/_132609597_sw.png.webp',
        company: 'Ground Control'
    },
    {
        id: '11',
        name: 'Monojit Choudhury',
        role: 'NLP researcher and Professor at MBZUAI; formerly Principal Researcher at Microsoft Research India, working on multilingual LLMs, low-resource languages, and AI ethics.',
        image: 'https://staticcdn.mbzuai.ac.ae/mbzuaiwpprd01/2026/03/monojit-choudhury2.jpg',
        company: 'Microsoft Research',
        companyLogo: 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=128'
    },
    {
        id: '10',
        name: 'Ruben Mayer',
        role: 'Former SVP of GenAI Product & Operations at Scale AI; co-founder of Scout AI (acquired by Scale AI); most recently at Meta on superintelligence initiatives.',
        image: 'https://wiza.co/svc/files/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MzEzNTU1NzQsInB1ciI6ImJsb2JfaWQifX0=--bc6eb6185e691615b1482fd7978c3a545a2be07c/profile-picture-rubenmayer.jpg',
        company: 'Scale AI',
        companyLogo: 'https://www.google.com/s2/favicons?domain=scale.com&sz=128'
    },
    {
        id: '9',
        name: 'Dr. Andrew Hall',
        role: 'Professor of Political Economy at Stanford GSB and Senior Fellow at the Hoover Institution; research advisor to a16z crypto on platform governance.',
        image: 'https://stanforddpl.org/authors/andyhall/avatar_hu243d3dd508219a04511e97ec850dfe89_499658_270x270_fill_q90_lanczos_center.jpg',
        company: 'Stanford University',
        companyLogo: 'https://www.google.com/s2/favicons?domain=stanford.edu&sz=128'
    },
    {
        id: '2',
        name: 'Kurt Wagner',
        role: 'Technology reporter at Bloomberg News covering social media, Silicon Valley, and Elon Musk\'s X (formerly Twitter)',
        image: 'https://pbs.twimg.com/profile_images/1121824103491497984/_KeWsihV_400x400.jpg',
        company: 'Bloomberg',
        companyLogo: 'https://www.google.com/s2/favicons?domain=bloomberg.com&sz=128'
    },
    {
        id: '6',
        name: 'Jessica Theodat',
        role: 'Senior SRE and Security Tech Lead at Google, focused on security, reliability, and risk management across Google infrastructure',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq3SXI0CLwOW_l6ISw0YEYghkWdIE2-wNDAQ&s',
        company: 'Google',
        companyLogo: 'https://www.google.com/s2/favicons?domain=google.com&sz=128'
    }
];

export const UPCOMING_SPEAKERS: UpcomingSpeaker[] = [];

export const LEADERS: Leader[] = [
    { id: 'adv1', name: 'Eric Pope', role: 'Advisor', image: '/eric.jpeg' },
    { id: 'pres1', name: 'Hailey Wong-Budiman', role: 'President', image: '/hailey.png' },
    { id: 'vp1', name: 'Krish Jain', role: 'Vice President', image: '/krish.jpg' },
    { id: 'sec1', name: 'Deniz Deryaoglu', role: 'Secretary', image: '/deniz.jpg' },
    { id: 'bus1', name: 'Minh Pham', role: 'Business Manager', image: '/minh.jpeg' },
    { id: 'evt1', name: 'Lucy Jijo', role: 'Events Manager', image: '/lucy.jpeg' },
    { id: 'tech1', name: 'Rory Brennan-Jones', role: 'Technical Lead', image: '/rory.jpeg' },
    { id: 'tech2', name: 'Danica Kim', role: 'Technical Lead', image: '/danica.jpg' },
    { id: 'mkt1', name: 'Xintong Lin', role: 'Marketing Lead', image: '/xintong.jpeg' },
    { id: 'tech3', name: 'Abigail Briones', role: 'Technical Lead', image: '/abigail.jpg' },
    { id: 'tech4', name: 'Serena Chen', role: 'Technical Lead', image: '/serena.jpeg' },
    { id: 'tech5', name: 'Earvin', role: 'Technical Lead', image: '/earvin.jpg' },
];

export const EVENTS: Event[] = [
    {
        id: 'e1',
        title: 'Weekly Workshops',
        description: 'Explore cutting-edge topics from web development to machine learning. All skill levels welcome. We teach the fundamentals and push the boundaries.',
        icon: 'Code',
        link: 'https://ccc.rochester.edu/events?&group_ids=30850'
    },
    {
        id: 'e2',
        title: 'Solution Challenge 2025',
        description: 'Build technology solutions addressing the UN\'s Sustainable Development Goals. Compete with students globally for prizes and real-world impact.',
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
}

export const HIGHLIGHTS: Highlight[] = [
    {
        id: 'h1',
        title: 'Conversation with Kurt Wagner',
        bio: 'Kurt Wagner is a technology reporter at Bloomberg News, where he covers social media platforms and how they shape business, politics, and culture. He joined GDSC UofR to talk about reporting on Silicon Valley, the evolution of companies like Meta and X, and what it means to build responsible products at scale.',
        image: '578794565_780579844969848_2940123641571313587_n.jpg'
    },
    {
        id: 'h2',
        title: 'Building Phia with Phoebe Gates',
        bio: 'Phoebe Gates is a student, advocate, and entrepreneur, the daughter of Bill & Melinda Gates, and the co‑founder of Phia, an AI‑driven shopping agent she built with climate activist Sophia Kianni after turning their Stanford dorm room into a startup lab. Phia has raised $8M in seed funding and grown to over 500,000 users and 5,000+ direct brand partners, and Phoebe spoke with our chapter about building responsible consumer technology and using platforms for social impact.',
        image: 'phoebe-event.png'
    },
    {
        id: 'h3',
        title: 'NASA Stories with Halyn',
        bio: 'Halyn inspired us with stories of growing up in Texas, pursuing chemical engineering at Yale, and interning at NASA, showing how curiosity, grit, and mentorship can turn a love for science into a career in space exploration.',
        image: 'nasa-event.png'
    }
];

export const FEATURES = [
    { number: '01', title: 'Project-Based Learning', desc: 'Move beyond lectures. Build real applications, deploy to production, and solve actual problems through hands-on workshops and hackathons supported by Google.' },
    { number: '02', title: 'Google Cloud Platform Access', desc: 'Get premium GCP credits, access to Google\'s developer tools, and early previews of emerging technologies in AI, ML, and cloud infrastructure.' },
    { number: '03', title: 'Global GDSC Network', desc: 'Join 2,000+ chapters across 100+ countries. Collaborate on open-source projects, participate in international competitions, and build connections worldwide.' },
    { number: '04', title: 'Solution Challenge', desc: 'Compete globally by building solutions that address the UN\'s 17 Sustainable Development Goals using Google technologies. Win prizes, gain recognition, make real impact.' },
    { number: '05', title: 'Industry Mentorship', desc: 'Learn from Google engineers, faculty experts, and tech leaders. Get guidance from professionals who\'ve shaped the industry at Microsoft, Apple, and beyond.' },
    { number: '06', title: 'All Majors Welcome', desc: 'Whether you\'re CS, engineering, business, or arts, if you\'re curious about technology, you belong here. We teach from fundamentals to advanced topics.' }
];

export const ALUMNI: Alumni[] = [
    {
        name: 'Richard Rashid',
        role: 'Founding director of Microsoft Research; operating systems and computer graphics pioneer.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Rick_Rashid.jpg'
    },
    {
        name: 'Avie Tevanian',
        role: 'Led the development of macOS at Apple as Chief Software Technology Officer.',
        image: 'https://allaboutstevejobs.com/resources/img/pics/1999-09-30_01412.jpg'
    },
    {
        name: 'Bruce Schneier',
        role: 'World-renowned cryptographer and security author shaping modern cybersecurity.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Bruce_Schneier_at_CoPS2013-IMG_9174.jpg'
    }
];

export const GDSC_SYSTEM_INSTRUCTION = `
You are the AI Assistant for the Google Developer Student Club (GDSC) at the University of Rochester.
Your goal is to help students learn about the club.

Key Info:
- Motto: "Ever Better. Ever Bolder." (Meliora).
- Mission: Bridge the gap between theory and practice.
- Activities: Weekly workshops, Solution Challenge (UN SDGs), Guest Speakers.
- Tech: Google Cloud, AI, Web Dev, Mobile.
- Notable Alumni from U of R: Richard Rashid, Avie Tevanian, Bruce Schneier.
- Membership: Open to all majors, not just CS.

Tone: Enthusiastic, technical but accessible, welcoming, and "Googley" (innovative, helpful).
Keep answers concise (under 100 words).
`;
