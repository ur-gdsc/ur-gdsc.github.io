export interface ContentSource {
    title: string;
    url: string;
}

export interface Speaker {
    id: string;
    name: string;
    role: string;
    image: string;
    company?: string;
    companyLogo?: string;
    sources?: ContentSource[];
}

export interface Leader {
    linkedin?: string;
    id: string;
    name: string;
    role: string; // President, Advisor, Technical Lead, etc.
    image: string;
    year?: string; // Academic year, e.g. "2025-2026"
}

export interface Event {
    id: string;
    title: string;
    description: string;
    icon: string;
    link?: string;
    date?: string;
}

export interface Alumni {
    name: string;
    role: string;
    image: string;
    sources?: ContentSource[];
}

export interface UpcomingSpeaker {
    id: string;
    name: string;
    title: string;
    bio: string;
    image: string;
    month: string;
    affiliation: string;
    affiliationLogo: string;
}

export enum ChatRole {
    USER = 'user',
    MODEL = 'model'
}

export interface ChatMessage {
    role: ChatRole;
    text: string;
}
