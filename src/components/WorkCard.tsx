'use client';

import React from 'react';
import Image from 'next/image';
import { Skill } from '@/types/types';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SkillCard from "@/components/SkillCard";
import ViewMore from "@/components/ViewMore";

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

    const slug = company.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
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
                style={{ aspectRatio }}
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
                    {technologies.map((tech) => (
                        <SkillCard key={tech.name} name={tech.name} svgPath={tech.icon} size="small" />
                    ))}
                </div>

                {/* --- 3. VIEW MORE SECTION --- */}
                <ViewMore link={`/work/${slug}`} />

            </div>
        </div>
    );
}

export default WorkCard;