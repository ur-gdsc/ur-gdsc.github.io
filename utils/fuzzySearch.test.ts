import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createFuzzySearch } from './fuzzySearch.ts';

const fuzzyMatch = (query: string, text: string) =>
    createFuzzySearch([{ text }], ['text'])(query).length > 0;

test('accepts common typos and adjacent transpositions', () => {
    for (const query of ['googel', 'gogle', 'gooogle', 'goolle']) {
        assert.equal(fuzzyMatch(query, 'Jessica Theodat Google'), true, query);
    }
    assert.equal(fuzzyMatch('blomberg', 'Kurt Wagner Bloomberg'), true);
});

test('matches partial, multiword and reordered queries', () => {
    for (const query of ['jess', 'jessca googel', 'Google Jessica', '   JESSICA   Google ']) {
        assert.equal(fuzzyMatch(query, 'Jessica Theodat Google'), true, query);
    }
});

test('normalizes accents and punctuation and accepts empty searches', () => {
    assert.equal(fuzzyMatch('jose maria', 'José-María'), true);
    assert.equal(fuzzyMatch('scale ai', 'Scale AI / Meta experience'), true);
    assert.equal(fuzzyMatch('  ', 'Kurt Wagner Bloomberg'), true);
});

test('rejects unrelated queries and requires every search term', () => {
    assert.equal(fuzzyMatch('zz', 'Jessica Theodat Google'), false);
    assert.equal(fuzzyMatch('microsoft', 'Jessica Theodat Google'), false);
    assert.equal(fuzzyMatch('Jessica Bloomberg', 'Jessica Theodat Google'), false);
    assert.equal(fuzzyMatch('go', 'Meta'), false);
});


test('searches across fields, ranks matches and restores the roster on clear', () => {
    const speakers = [
        { name: 'Jessica Theodat', company: 'Google' },
        { name: 'Kurt Wagner', company: 'Bloomberg' },
        { name: 'Goole Example', company: 'Example' },
    ];
    const search = createFuzzySearch(speakers, ['name', 'company']);
    assert.deepEqual(search('jessca googel'), [speakers[0]]);
    assert.deepEqual(search('Jessica Bloomberg'), []);
    assert.equal(search('Google')[0], speakers[0]);
    assert.deepEqual(search('  '), speakers);
    assert.deepEqual(search('zzzzzzzz'), []);
});
