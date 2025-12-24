import React from "react";

interface EcoFeatureProps {
    icon: React.ReactNode;
    title: string;
    text: string;
}

const EcoFeature: React.FC<EcoFeatureProps> = ({ icon, title, text }) => {
    return (
        <div className="flex flex-col items-center gap-3 p-4">
            <div className="text-blue-600 dark:text-blue-400 mb-2">
                {icon}
            </div>
            <h4 className="text-xl font-bold text-foreground">{title}</h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                {text}
            </p>
        </div>
    );
};

export default EcoFeature;