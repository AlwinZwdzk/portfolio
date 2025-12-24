import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { work } from '@/resources/content';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import VerifiedIcon from '@mui/icons-material/Verified';
import ImageCarousel from '@/components/ImageCarousel';

const getSlug = (name: string) =>
    name.toLowerCase()
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
        <div className="flex flex-col gap-8 w-full pb-20 animate-in fade-in duration-500 max-w-4xl mx-auto">

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

            {/* --- CARROUSEL SIMPLE ET PROPRE --- */}
            <ImageCarousel
                images={experience.images || []}
                altTextFallback={experience.company}
                rounded={true} // Coins arrondis comme demandé
            />

            {/* --- HEADER INFO --- */}
            <div className="flex flex-col gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-8">
                <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                    {experience.company}
                </h1>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-zinc-600 dark:text-zinc-400 font-medium text-lg">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">{experience.role}</span>
                    <span className="hidden sm:inline w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                    <span className="flex items-center gap-2">
                        <CalendarTodayIcon style={{ fontSize: 18 }} />
                        {experience.timeframe}
                    </span>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                    {experience.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300"
                        >
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                <path d={tech.icon} />
                            </svg>
                            {tech.name}
                        </span>
                    ))}
                </div>
            </div>

            {/* --- DESCRIPTION & ACHIEVEMENTS --- */}
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
                            {experience.achievements.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800/50">
                                    <div className="mt-1 p-1 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400 shrink-0">
                                        <VerifiedIcon fontSize="small" />
                                    </div>
                                    <span className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
            </div>
        </div>
    );
}