import { RegularMessage } from './regular-message';
import { SponsorMessage } from './sponsors-messages';
import { SuperChat } from './super-chat';

/** @param {string} styles */
export function createHtmlPreview (styles = '') {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Youtube Streaming Chat Preview </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        ${styles}
      </style>
    </head>
    <body>
      <yt-live-chat-renderer>
        <yt-live-chat-item-list-renderer id="item-offset">      
          ${RegularMessage()}
          ${RegularMessage('owner')}
          ${RegularMessage('moderator')}
          ${RegularMessage('member')}
          ${SponsorMessage()}
          ${SuperChat()}
        </yt-live-chat-item-list-renderer>
      </yt-live-chat-renderer>
    </body>
  </html>
  `;
}
