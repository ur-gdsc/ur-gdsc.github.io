import { assetPath } from '../utils/assetPath';
import React, { useState } from 'react';

interface Props {
    src: string;
    alt: string;
    className?: string;
}

export const ImageWithFallback: React.FC<Props> = ({ src, alt, className }) => {
    const [error, setError] = useState(false);

    if (error) {
        return (
            <div role="img" aria-label={`${alt} — photo unavailable`} className={`portrait-fallback ${className ?? ''}`}>
                <span aria-hidden="true">{alt.split(' ').map(part => part[0]).slice(0, 2).join('')}</span>
            </div>
        );
    }

    return (
        <img
            src={assetPath(src)}
            alt={alt}
            className={className}
            onError={() => setError(true)}
            loading="lazy"
            width="600"
            height="600"
        />
    );
};
