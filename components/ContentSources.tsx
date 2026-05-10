import React from 'react';
import { ContentSource } from '../types';

const ContentSources: React.FC<{ sources?: ContentSource[] }> = ({ sources }) => {
    if (!sources?.length) return null;
    return (
        <ul className="content-sources" aria-label="Sources">
            {sources.map(source => (
                <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a>
                </li>
            ))}
        </ul>
    );
};
export default ContentSources;
