import React from 'react';
import { projects } from '@/resources/content';
import ProjectCard from '@/components/ProjectCard'; // Import du composant
import LightbulbIcon from '@mui/icons-material/Lightbulb';

export default function Projects() {
    return (
        <div className="flex flex-col gap-10 w-full pb-20">

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
                        tags={project.tags}
                        images={project.images}
                        description={project.description}
                    />
                ))}
            </div>

        </div>
    );
}