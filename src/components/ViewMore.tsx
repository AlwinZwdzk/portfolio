import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";

interface ViewMoreProps {
    link: string;
}

const ViewMore: React.FC<ViewMoreProps> = ({ link }) => {
    return (
        <div className="pt-2 mt-2 border-t border-zinc-100 dark:border-zinc-800/50">
            <Link
                href={link}
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:gap-3 transition-all"
            >
                Read More
                <ArrowForwardIcon style={{ fontSize: 16 }} />
            </Link>
        </div>
    );
}

export default ViewMore;