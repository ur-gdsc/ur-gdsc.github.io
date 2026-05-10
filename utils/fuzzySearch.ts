import Fuse from 'fuse.js';

/** Build the search index once and reuse it as the query changes. */
export const createFuzzySearch = <T>(items: T[], keys: string[]) => {
    const index = new Fuse(items, {
        keys,
        threshold: 0.35,
        ignoreLocation: true,
        ignoreDiacritics: true,
        useTokenSearch: true,
        tokenMatch: 'all',
    });

    return (query: string): T[] => query.trim()
        ? index.search(query.trim()).map(result => result.item)
        : items;
};
