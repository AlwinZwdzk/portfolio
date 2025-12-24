import React from 'react';
import { social } from '@/resources/content';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import WorkIcon from '@mui/icons-material/Work';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BoltIcon from '@mui/icons-material/Bolt';
import CompostIcon from '@mui/icons-material/Compost';
import SpeedIcon from '@mui/icons-material/Speed';
import EcoFeature from "@/components/EcoFeature";
import NavCard from "@/components/NavCard";

export default function Home() {
    return (
        <div className="flex flex-col w-full min-h-screen pb-20 gap-16 md:gap-24">

            {/* --- ACT 1 : WELCOME & SOCIALS --- */}
            <section className="flex flex-col items-center justify-center text-center gap-8 mt-10  animate-in fade-in slide-in-from-bottom-8 duration-1000">

                {/* Welcome Title */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 tracking-widest uppercase">
                        Portfolio
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground leading-tight">
                        WELCOME<span className="text-blue-600 dark:text-blue-400">.</span>
                    </h1>
                </div>

                <p className="max-w-2xl text-lg md:text-2xl text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
                    Welcome to my digital space. <br className="hidden md:block" />
                    Feel free to explore my universe or contact me directly.
                </p>

                {/* Socials - Prominent Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {social.map((item) => {
                        const Icon = item.icon;
                        return (
                            <a
                                key={item.name}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 px-4 py-3 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-foreground hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <Icon className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                                <span className="font-bold text-base">{item.name}</span>
                            </a>
                        );
                    })}
                </div>
            </section>

            <hr className="border-t border-zinc-200 p-0 dark:border-zinc-800 opacity-70" />

            {/* --- ACT 2 : NAVIGATION --- */}
            <section className="w-full px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
                    <NavCard
                        href="/about"
                        title="About Me"
                        subtitle="The Developer"
                        description="Who I am, my passions, and my technical skills."
                        icon={<AccountCircleIcon className="text-emerald-500 !text-4xl" />}
                        delay="delay-200"
                    />
                    <NavCard
                        href="/projects"
                        title="Projects"
                        subtitle="Web & Software"
                        description="Discover my technical achievements and personal projects."
                        icon={<LightbulbIcon className="text-amber-500 !text-4xl" />}
                        delay="delay-0"
                    />
                    <NavCard
                        href="/work"
                        title="Experience"
                        subtitle="Career Path"
                        description="My professional journey, internships, and corporate experience."
                        icon={<WorkIcon className="text-blue-500 !text-4xl" />}
                        delay="delay-100"
                    />
                </div>
            </section>

            <hr className="border-t border-zinc-200 dark:border-zinc-800 my-2 opacity-70" />

            {/* --- ACT 3 : THE ECO-MANIFESTO --- */}
            <section className="w-full pb-16 md:pb-24">
                <div className="max-w-4xl mx-auto px-6 text-center flex flex-col gap-10">

                    <div className="flex flex-col gap-4">
                        <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                            Designed for Performance
                        </h3>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                            This portfolio is not just a showcase; it is a technical demonstration.
                            It is designed to be ultra-fast, accessible, and environmentally friendly.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <EcoFeature
                            icon={<CompostIcon fontSize="large" />}
                            title="Eco-Friendly"
                            text="Lightweight static site aiming for an EcoIndex A+ score to reduce carbon footprint."
                        />
                        <EcoFeature
                            icon={<SpeedIcon fontSize="large" />}
                            title="High Performance"
                            text="Optimized for instant loading and a perfect Lighthouse score."
                        />
                        <EcoFeature
                            icon={<BoltIcon fontSize="large" />}
                            title="Modern Tech"
                            text="Powered by Next.js 15, Tailwind CSS, and React for maximum fluidity."
                        />
                    </div>
                </div>
            </section>

        </div>
    );
}


