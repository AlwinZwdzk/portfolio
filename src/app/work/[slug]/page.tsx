import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { work } from '@/resources/content';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ImageCarousel from '@/components/ImageCarousel';
import SkillCard from "@/components/SkillCard";
import AchievementCard from "@/components/AchievementCard";

const getSlug = (name: string) =>
    name.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');

export async function generateStaticParams() {
    return work.experiences.map((exp) => ({
        slug: getSlug(exp.company),
    }));
}

export default async function WorkDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const experience = work.experiences.find((exp) => getSlug(exp.company) === slug);

    if (!experience) {
        notFound();
    }

    return (
        <div className="flex flex-col gap-8 w-full animate-in fade-in duration-500 max-w-4xl mx-auto">

            {/* --- BOUTON RETOUR --- */}
            <div>
                <Link
                    href="/work"
                    className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                    <ArrowBackIcon fontSize="small" />
                    Back to Work
                </Link>
            </div>

            {/* --- CARROUSEL --- */}
            <ImageCarousel
                images={experience.images || []}
                altTextFallback={experience.company}
                rounded={true}
            />

            {/* --- HEADER --- */}
            <div className="flex flex-col gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-8">
                <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                    {experience.company}
                </h1>

                {/* Role & Timeframe */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-zinc-600 dark:text-zinc-400 font-medium text-lg">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">{experience.role}</span>
                    <span className="hidden sm:inline w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                    <span className="flex items-center gap-2">
                        <CalendarTodayIcon style={{ fontSize: 18 }} />
                        {experience.timeframe}
                    </span>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {experience.technologies.map((tech) => (
                        <SkillCard key={tech.name} name={tech.name} svgPath={tech.icon} size="large" />
                    ))}
                </div>
            </div>

            {/* --- DESCRIPTION --- */}
            <div className="flex flex-col gap-10">
                <section className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold text-foreground">About the role</h2>
                    <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 whitespace-pre-line text-justify">
                        {experience.description}
                    </p>
                </section>

                {experience.achievements && experience.achievements.length > 0 && (
                    <section className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold text-foreground">Key Achievements</h2>
                        <ul className="grid gap-4">
                            {experience.achievements.map((achievement, index) => (
                                <AchievementCard achievement={achievement} key={index} />
                            ))}
                        </ul>
                    </section>
                )}
            </div>
        </div>
    );
}