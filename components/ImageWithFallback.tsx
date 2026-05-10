import React, { useState } from 'react';
import { User } from 'lucide-react';

interface Props {
    src: string;
    alt: string;
    className?: string;
}

export const ImageWithFallback: React.FC<Props> = ({ src, alt, className }) => {
    const [error, setError] = useState(false);

    if (error) {
        return (
            <div className={`flex items-center justify-center bg-midnight-800 text-gray-500 ${className}`}>
                <User className="w-1/3 h-1/3 opacity-50" />
            </div>
        );
    }

    return (
        <img 
            src={src} 
            alt={alt} 
            className={className}
            onError={() => setError(true)}
            loading="lazy"
        />
    );
};
