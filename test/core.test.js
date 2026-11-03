// Run with: node test/core.test.js
const assert = require('assert');
const core = require('../js/core.js');
const [chat] = core.readChats(require('./sample-export.json'));
const posts = core.buildPosts(chat);

assert.strictEqual(posts.length, 2, 'service and voice messages are skipped; the album is one post');
const [album, links] = posts;
assert.deepStrictEqual(album.ids, [2, 3], 'album messages are merged');
assert.deepStrictEqual(album.media.map(item => item.kind), ['image', 'video']);
assert.deepStrictEqual(album.hashtags, ['logo']);
assert.deepStrictEqual(links.links, ['https://example.com/article', 'https://example.org/other']);

const items = core.eagleItems(chat, album, relative => `/export/${relative}`);
assert.strictEqual(items.length, 2);
assert.strictEqual(items[0].name, 'Logo animation 01', 'hashtags are left out of titles');
assert.strictEqual(items[0].website, 'https://t.me/c/1234567890/2');
assert.deepStrictEqual(items[0].tags, ['telegram', 'Sample channel', 'logo']);

const edited = core.edited(chat, links, { tags: ['reading'], removedLinks: ['https://example.org/other'] });
const bookmarks = core.karakeepBookmarks(chat, edited);
assert.deepStrictEqual(bookmarks.map(bookmark => bookmark.body.url), ['https://example.com/article'], 'a switched-off link is not sent');
assert.deepStrictEqual(bookmarks[0].tags, ['reading']);
assert.ok(!('title' in bookmarks[0].body), 'link bookmarks keep the article title unless one was set');

console.log(`ok — ${posts.length} posts`);
