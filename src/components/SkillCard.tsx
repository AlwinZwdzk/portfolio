import React from "react";

interface SkillCardProps {
    name: string;
    svgPath: string;
    size?: "small" | "large";
}

const SkillCard: React.FC<SkillCardProps> = ({ name, svgPath, size }) => {
    let sizeClasses = "";
    switch (size){
        case "small":
            sizeClasses = "gap-1.5 px-2.5 py-1 text-xs font-semibold";
            break;
        case "large":
            sizeClasses = "gap-2 px-3 py-1.5 text-sm font-medium";
            break;
        default:
            sizeClasses = "gap-2 px-3 py-1.5 text-sm font-medium";
    }
    return(
        <span key={name} className={`${sizeClasses} flex items-center rounded-md bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-foreground/80 shadow-sm transition-colors hover:text-blue-600 dark:hover:text-blue-400`}>
            <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current"
            >
            <title>{name}</title>
            <path d={svgPath} />
        </svg>
            {name}
        </span>
    );
}

export default SkillCard;