import VerifiedIcon from "@mui/icons-material/Verified";
import React from "react";

interface AchievementCardProps {
    achievement: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement}) => {
    return (
        <li
            className="group flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all hover:shadow-sm"
        >
            <div className="mt-0.5 shrink-0 p-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                <VerifiedIcon style={{ fontSize: 20 }} />
            </div>

            <span className="text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed ">
                {achievement}
            </span>
        </li>
    );
}

export default AchievementCard;