import React from 'react';

export interface Skill {
    name: string;
    icon: string;
}

export interface NavItem {
    name: string;
    href: string;
    icon: React.ElementType;
}

export type Person = {
    firstName: string;
    lastName: string;
    name: string;
    email: string;
    role: string;
    languages?: string[];
    avatar: string;
    cv: string;
};

export type Social = Array<{
    name: string;
    icon: React.ElementType;
    link: string;
}>;

export interface About {
    intro: {
        title: string;
        description: React.ReactNode;
    };
    studies: {
        title: string;
        institutions: Array<{
            name: string;
            description: React.ReactNode;
        }>;
    };
    technicalSkills: {
        title: string;
        types: Array<{
            title: string;
            skills: Skill[];
        }>;
    };
}

export interface Work {
    title: string;
    experiences: Array<{
        company: string;
        timeframe: string;
        role: string;
        description: string;
        technologies: Skill[];
        achievements: string[];
        images?: Array<{
            src: string;
            alt: string;
            width: number;
            height: number;
        }>;
    }>;
}

export interface Project {
    title: string;
    projects: Array<{
        title: string;
        subtitle: string;
        description?: React.ReactNode;
        tags: Skill[];
        images: Array<{
            src: string;
            alt: string;
            width: number;
            height: number;
        }>;
    }>;
}