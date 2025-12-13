import React from 'react';

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

export interface About{
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
            skills: Array<{
                name: string;
                icon : string;
            }>;
        }>;
    };
}

export interface Work {
    title: string;
    experiences: Array<{
        company: string;
        timeframe: string;
        role: string;
        achievements: React.ReactNode[];
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
        description: React.ReactNode;
        tags: Array<{
            name: string;
            icon?: string;
        }>;
        images: Array<{
            src: string;
            alt: string;
            width: number;
            height: number;
        }>;
    }>;
}