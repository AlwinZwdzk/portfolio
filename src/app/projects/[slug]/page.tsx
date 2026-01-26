import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/resources/content';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ImageCarousel from '@/components/ImageCarousel';
import SkillCard from '@/components/SkillCard';
import AchievementCard from "@/components/AchievementCard";

const getSlug = (title: string) =>
    title.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');


export async function generateStaticParams() {
    return projects.projects.map((project) => ({
        slug: getSlug(project.title),
    }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;

    const project = projects.projects.find((p) => getSlug(p.title) === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="flex flex-col gap-8 w-full pb-20 animate-in fade-in duration-500 max-w-4xl mx-auto">

            {/* --- BOUTON RETOUR --- */}
            <div>
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                    <ArrowBackIcon fontSize="small" />
                    Back to Projects
                </Link>
            </div>

            {/* --- CARROUSEL--- */}
            <ImageCarousel
                images={project.images}
                altTextFallback={project.title}
                rounded={true}
            />

            {/* --- HEADER --- */}
            <div className="flex flex-col gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-6">
                <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                    {project.title}
                </h1>
                <p className="text-xl text-zinc-500 dark:text-zinc-400 font-medium">
                    {project.subtitle}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                        <SkillCard key={tech.name} name={tech.name} svgPath={tech.icon} size="large"/>
                    ))}
                </div>
            </div>

            {/* --- DESCRIPTION --- */}
            <div className="flex flex-col gap-10">
                <section className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold text-foreground">Description</h2>
                    <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 whitespace-pre-line text-justify">
                        {project.description}
                    </p>
                </section>

                {project.achievements && project.achievements.length > 0 && (
                    <section className="flex flex-col gap-4">

                        {/* Titre avec une petite icône sympa */}
                        <div className="flex items-center gap-2">
                            <h2 className="text-2xl font-bold text-foreground">
                                Key Achievements
                            </h2>
                        </div>

                        <ul className="flex flex-col gap-4">
                            {project.achievements.map((achievement, index) => (
                                <AchievementCard achievement={achievement} key={index} />
                            ))}
                        </ul>
                    </section>
                )}
            </div>
        </div>
    );
}