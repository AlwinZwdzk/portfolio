'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface ImageData {
    src: string;
    alt: string;
    width: number;
    height: number;
}

interface ImageCarouselProps {
    images: ImageData[];
    altTextFallback?: string;
    rounded?: boolean;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, altTextFallback = "Project", rounded = true }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    if (!images || images.length === 0) {
        return (
            <div className={`relative w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-center aspect-[16/9] ${rounded ? 'rounded-2xl' : ''}`}>
                <div className="text-zinc-300 dark:text-zinc-700 text-4xl font-bold">
                    {altTextFallback.charAt(0)}
                </div>
            </div>
        );
    }
    const aspectRatio = `${images[0].width} / ${images[0].height}`;

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
        <div
            className={`relative group w-full bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden select-none ${rounded ? 'rounded-2xl' : ''}`}
            style={{ aspectRatio: aspectRatio }}
        >
            {/* --- IMAGES CONTAINER --- */}
            <div
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {images.map((img, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0 snap-start relative">
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover"
                            priority={index === 0}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                            draggable={false}
                        />
                    </div>
                ))}
            </div>

            {images.length > 1 && (
                <>
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 z-10"
                        aria-label="Previous image"
                    >
                        <ArrowBackIosNewIcon fontSize="small" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 z-10"
                        aria-label="Next image"
                    >
                        <ArrowForwardIosIcon fontSize="small" />
                    </button>

                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 px-2 py-1 rounded-full bg-black/30 backdrop-blur-sm">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                    index === currentSlide ? 'bg-white w-3' : 'bg-white/40'
                                }`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default ImageCarousel;