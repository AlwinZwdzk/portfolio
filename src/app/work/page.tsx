import React from 'react';
import { work } from '@/resources/content';
import WorkCard from '@/components/WorkCard';

export default function WorkPage() {
    return (
        <div className="flex flex-col gap-10 w-full">

            {/* Page Header */}
            <div className="flex flex-col items-center text-center gap-4">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground flex items-center justify-center gap-3">
                    {work.title}
                </h1>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl">
                    A timeline of my professional journey, internships, and industry experience.
                </p>
            </div>

            {/* Experiences List */}
            <div className="grid grid-cols-1 gap-8">
                {work.experiences.map((exp, index) => (
                    <WorkCard
                        key={index}
                        company={exp.company}
                        role={exp.role}
                        timeframe={exp.timeframe}
                        technologies={exp.technologies}
                        image={exp.images && exp.images.length > 0 ? exp.images[0] : undefined}
                    />
                ))}
            </div>

        </div>
    );
}