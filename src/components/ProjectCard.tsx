'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Skill } from '@/types/types';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const aspectRatio = images.length > 0
        ? `${images[0].width} / ${images[0].height}`
        : '16 / 9';

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = container.clientWidth;

            if (direction === 'left') {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const slideIndex = Math.round(container.scrollLeft / container.clientWidth);
            setCurrentSlide(slideIndex);
        }
    };

    return (
        <div className="flex flex-col gap-5 w-full bg-white dark:bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md">

            {/* --- CAROUSEL SECTION --- */}
            <div
                className="relative group w-full bg-zinc-100 dark:bg-zinc-950"
                style={{ aspectRatio: aspectRatio }}
            >
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {images.map((img, index) => (
                        <div key={index} className="flex-shrink-0 w-full h-full snap-center relative">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    ))}
                </div>

                {images.length > 1 && (
                    <>
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 z-10"
                            aria-label="Image précédente"
                        >
                            <ArrowBackIosNewIcon fontSize="small" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 z-10"
                            aria-label="Image suivante"
                        >
                            <ArrowForwardIosIcon fontSize="small" />
                        </button>

                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 px-2 py-1 rounded-full bg-black/30 backdrop-blur-sm">
                            {images.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                        index === currentSlide ? 'bg-white' : 'bg-white/40'
                                    }`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

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