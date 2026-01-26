import Link from "next/link";
import React from "react";

interface NavCardProps {
    href: string;
    title: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
    delay?: string;
}


const NavCard : React.FC<NavCardProps> = ({ href, title, subtitle, description, icon, delay }) => {
    return (
        <Link href={href}
            className={`group relative flex flex-col p-8 min-h-80 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-500 animate-in fade-in slide-in-from-bottom-10 fill-mode-backwards ${delay}`}
        >
            <div className="flex flex-col gap-6">
                <div className="w-16 h-16 rounded-2xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {icon}
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                        {subtitle}
                    </span>
                    <h3 className="text-3xl font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>

        </Link>
    );
}

export default NavCard;