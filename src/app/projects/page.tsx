import React from 'react';
import type { Metadata } from 'next';
import { projects } from '@/resources/content';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Explore software engineering and web development projects by Alwin Zawadzki, featuring full-stack applications, interactive systems, and modern web frameworks.",
    alternates: {
        canonical: "/projects",
    },
    openGraph: {
        title: "Projects | Alwin Zawadzki",
        description:
            "Explore software engineering and web development projects by Alwin Zawadzki.",
        url: "/projects",
    },
};

export default function Projects() {
    return (
        <div className="flex flex-col gap-10 w-full">

            {/* Page Header */}
            <div className="flex flex-col items-center text-center gap-4">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground flex items-center justify-center gap-3">
                    {projects.title}
                </h1>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl">
                    Here is a selection of projects I have worked on, ranging from web development to software engineering.
                </p>
            </div>

            {/* Projects List */}
            <div className="flex flex-col gap-12">
                {projects.projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        subtitle={project.subtitle}
                        technologies={project.technologies}
                        images={project.images}
                        description={project.description}
                    />
                ))}
            </div>

        </div>
    );
}