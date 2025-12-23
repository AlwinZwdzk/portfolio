'use client';

import React from 'react';
import Image from 'next/image';
import { person, about, social } from '@/resources/content';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TranslateIcon from '@mui/icons-material/Translate';
import DownloadIcon from '@mui/icons-material/Download';
import { Divider } from '@mui/material';

export default function About() {
    return (
        <div className="flex flex-col gap-12 w-full pb-20">

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">

                <div className="relative group shrink-0">
                    <div className="absolute -inset-3 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
                    <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-badge-border shadow-sm">
                        <Image src={person.avatar} alt={person.name} fill className="object-cover" priority />
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow space-y-5">

                    <div>
                        <h1 className="font-mediumbold tracking-tight text-foreground text-4xl md:text-5xl m-0">
                            {person.firstName} <span className="text-blue-600 dark:text-blue-400">{person.lastName}</span>
                        </h1>
                        <p className="text-foreground/80 font-medium mt-1 text-xl">
                            {person.role}
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-badge border border-badge-border text-badge-text text-xs font-bold whitespace-nowrap shadow-sm transition-colors">
                            <LocationOnIcon style={{ fontSize: 14 }} />
                            Pas-de-Calais, France
                        </div>

                        <div className="flex flex-wrap justify-center gap-2">
                            {person.languages?.map((lang) => (
                                <div key={lang} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-badgeQl border border-badge-border text-badge-text text-xs font-bold shadow-sm transition-colors">
                                    <TranslateIcon style={{ fontSize: 14 }} />
                                    {lang}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
                        {/* Remplacement du Button MUI par un lien <a> standard stylisé (0 JS) */}
                        <a
                            href={person.cv}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/40 bg-blue-500/10 text-foreground text-sm font-semibold hover:bg-blue-500/20 hover:border-blue-500/80 hover:-translate-y-px transition-all duration-300 "
                        >
                            <DownloadIcon style={{ fontSize: 17 }} />
                            Resume
                        </a>

                        {social.map((item) => {
                            const Icon = item.icon;
                            return (
                                <a
                                    key={item.name}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--navbar-border)] text-foreground text-sm font-semibold hover:border-foreground hover:bg-gray-500/5 transition-all duration-300"
                                >
                                    <Icon fontSize="small" />
                                    {item.name}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            <Divider className="opacity-50" />

            <section className="flex flex-col gap-4">
                <h2 className="text-2xl font-medium text-foreground m-0">
                    {about.intro.title}
                </h2>
                <div className="text-lg leading-relaxed text-foreground/90 text-justify font-normal">
                    {about.intro.description}
                </div>
            </section>
        </div>
    );
}