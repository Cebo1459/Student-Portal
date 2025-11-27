// src/types/index.ts

export interface Resource {
    id: string;
    title: string;
    description: string;
    type: 'paper' | 'pdf' | 'book' | 'video';
    link: string;
}

export interface Module {
    id: string;
    name: string;
    resources: Resource[];
}

export interface User {
    id: string;
    username: string;
    email: string;
    role: 'student' | 'instructor';
}