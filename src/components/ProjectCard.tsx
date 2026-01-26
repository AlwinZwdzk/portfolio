'use client';

import { Skill } from '@/types/types';
import ImageCarousel from "@/components/ImageCarousel";
import SkillCard from "@/components/SkillCard";
import React from "react";
import ViewMore from "@/components/ViewMore";

interface ProjectCardProps {
    title: string;
    subtitle: string;
    description?: React.ReactNode;
    technologies: Skill[];
    images: Array<{
        src: string;
        alt: string;
        width: number;
        height: number;
    }>;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, subtitle, technologies, images })=> {
    const slug = title.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');

    return (
        <div
            className="flex flex-col gap-5 w-full bg-white dark:bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md">

            {/* --- CAROUSEL SECTION --- */}
            <ImageCarousel
                images={images}
                altTextFallback={title}
                rounded={false}
            />

            {/* --- DETAILS SECTION --- */}
            <div className="flex flex-col gap-3 px-6 pb-6 text-left">
                <div>
                    <h3 className="text-2xl font-bold text-foreground">
                        {title}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 font-medium text-sm">
                        {subtitle}
                    </p>
                </div>

                {/* Technos */}
                <div className="flex flex-wrap gap-2 mt-1">
                    {technologies.map((tech) => (
                        <SkillCard name={tech.name} svgPath={tech.icon} key={tech.name} size="large"/>
                    ))}
                </div>

                {/* --- 3. VIEW MORE SECTION --- */}
                <ViewMore link={`/projects/${slug}`}/>

            </div>
        </div>
    );
}

export default ProjectCard;