'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Skill } from '@/types/types';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

interface WorkCardProps {
    company: string;
    role: string;
    timeframe: string;
    technologies: Skill[];
    image?: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
}

const WorkCard : React.FC<WorkCardProps> = ({ company, role, timeframe, technologies, image }) => {

    const slug = company.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');

    const aspectRatio = image
        ? `${image.width} / ${image.height}`
        : '16 / 9';

    return (
        <div className="flex flex-col w-full bg-white dark:bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 group">

            {/* --- 1. IMAGE SECTION --- */}
            <div
                className="relative w-full overflow-hidden bg-zinc-100 dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-800"
                style={{ aspectRatio: aspectRatio }}
            >
                {image ? (
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="flex items-center justify-center w-full h-full bg-zinc-50 dark:bg-zinc-900 text-zinc-300 dark:text-zinc-700 font-bold text-2xl">
                        {company.charAt(0)}
                    </div>
                )}
            </div>

            {/* --- 2. ESSENTIAL INFO --- */}
            <div className="flex flex-col flex-grow p-6 gap-4">

                <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {company}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                        <span className="text-zinc-700 dark:text-zinc-300">{role}</span>
                        <span className="hidden sm:inline w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                        <span className="flex items-center gap-1.5">
                            <CalendarTodayIcon style={{ fontSize: 12 }} />
                            {timeframe}
                        </span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                        >
                            <svg
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-3.5 h-3.5 fill-current"
                            >
                                <path d={tech.icon} />
                            </svg>
                            {tech.name}
                        </span>
                    ))}
                </div>

                {/* --- 3. VIEW MORE SECTION --- */}
                <div className="pt-2 mt-2 border-t border-zinc-100 dark:border-zinc-800/50">
                    <Link
                        href={`/work/${slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:gap-3 transition-all"
                    >
                        Read More
                        <ArrowForwardIcon style={{ fontSize: 16 }} />
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default WorkCard;