# Changelog

## 0.1.0 — Unreleased

- Open a Telegram Desktop JSON export and sort it post by post. `E` sends a post's media to Eagle (a folder per channel, the text as note, hashtags as tags, a link back to the post); `K` sends its links, or its text as a note, to Karakeep; `Del` moves it to an in-plugin Trash with restore and a list of Telegram links for deleting posts by hand.
- Edit before sending: title, text, tags (remove the defaults or add your own) and links (switch off any you do not want in Karakeep). Edits are saved with the progress and can be reset.
- Albums are merged back into one post; stickers, voice and audio are skipped; files left out of the export are flagged. Progress is saved next to the export after every action, and a post is never sent to the same app twice.
- Dark theme that follows Eagle, with a Light/Dark override.
- Works with the Node.js bundled in Eagle: request(options, callback) form, the plugin page's own `module` object, and every shape of Eagle's folder dialog answer. Clear messages for an unreachable Eagle or Karakeep and for a NAS's self-signed certificate.

Moved here from [Local Social Media Archiver](https://github.com/d-degtyar/Local-Social-Media-Archiver), with its history.
