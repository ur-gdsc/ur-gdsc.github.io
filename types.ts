export interface Speaker {
    id: string;
    name: string;
    role: string;
    image: string;
    company?: string;
    companyLogo?: string;
}

export interface Leader {
    id: string;
    name: string;
    role: string; // President, Advisor, Technical Lead, etc.
    image: string;
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
