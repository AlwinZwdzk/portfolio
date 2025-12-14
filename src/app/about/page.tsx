'use client';

import React from 'react';
import Image from 'next/image';
import { person, about, social } from '@/resources/content';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TranslateIcon from '@mui/icons-material/Translate';
import DownloadIcon from '@mui/icons-material/Download';
import { Typography, Button, Divider } from '@mui/material';

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
                        <Typography variant="h3" component="h1" className="font-bold tracking-tight text-foreground text-4xl md:text-5xl">
                            {person.firstName} <span className="text-blue-600 dark:text-blue-400">{person.lastName}</span>
                        </Typography>
                        <Typography variant="h6" className="text-foreground/80 font-medium mt-1">
                            {person.role}
                        </Typography>
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
                        <Button
                            component="a" href={person.cv} target="_blank" startIcon={<DownloadIcon style={{ fontSize: 18 }} />} variant="outlined"
                            sx={{
                                borderRadius: '50px', textTransform: 'none', padding: '6px 20px', fontWeight: 600,
                                color: 'var(--foreground)',
                                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                                borderColor: 'rgba(59, 130, 246, 0.4)',
                                transition: 'all 0.3s ease',
                                '&:hover': { backgroundColor: 'rgba(59, 130, 246, 0.2)', borderColor: 'rgba(59, 130, 246, 0.8)', transform: 'translateY(-1px)' }
                            }}
                        >
                            Resume
                        </Button>

                        {social.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Button
                                    key={item.name} component="a" href={item.link} target="_blank" startIcon={<Icon fontSize="small" />} variant="outlined"
                                    sx={{
                                        borderRadius: '50px', textTransform: 'none', padding: '6px 16px',
                                        color: 'var(--foreground)',
                                        borderColor: 'var(--navbar-border)',
                                        '&:hover': { borderColor: 'var(--foreground)', backgroundColor: 'rgba(128,128,128, 0.05)' }
                                    }}
                                >
                                    {item.name}
                                </Button>
                            );
                        })}
                    </div>
                </div>
            </div>

            <Divider className="opacity-50" />

            <section className="flex flex-col gap-4">
                <Typography variant="h5" className="font-bold text-foreground">
                    {about.intro.title}
                </Typography>
                <div className="text-lg leading-relaxed text-foreground/90 text-justify">
                    {about.intro.description}
                </div>
            </section>
        </div>
    );
}