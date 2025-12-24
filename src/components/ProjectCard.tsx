'use client';

import { Skill } from '@/types/types';
import ImageCarousel from "@/components/ImageCarousel";

interface ProjectCardProps {
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
}

export default function ProjectCard({ title, subtitle, tags, images }: ProjectCardProps) {
    return (
        <div className="flex flex-col gap-5 w-full bg-white dark:bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md">

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

                {/* Tags / Technos */}
                <div className="flex flex-wrap gap-2 mt-1">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                        >
                            <svg
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-3.5 h-3.5 fill-current"
                            >
                                <path d={tag.icon} />
                            </svg>
                            {tag.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}