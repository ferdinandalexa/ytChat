/** @typedef {("owner" | "moderator" | "member") | null } AuthorType */

/** @param {AuthorType} authorType */
export function RegularMessage (authorType = '') {
  return `
  <yt-live-chat-text-message-renderer author-type=${authorType}>
    
    <yt-img-shadow id="author-photo">
      <div style="display: block; background-color: red; width: 100%; height: 100%;"></div>
    </yt-img-shadow>

    <div id="content">
      <span id="timestamp">12:00</span>

      <yt-live-chat-author-chip>
        <span id="author-badges">
          <yt-live-chat-author-badge-renderer type=${authorType}>
            <div style="display: inline-block; background-color: red; width: 16px; height: 16px; border-radius: 16px"></div>
          </yt-live-chat-author-badge-renderer>
        </span>

        <span id="author-name" type=${authorType}>ferdinandalexa</span>
      </yt-live-chat-author-chip>

      <span id="message">
        This is how it looks like a ${authorType} user message.
      </span>
    </div>
    
  </yt-live-chat-text-message-renderer>
  `;
}
