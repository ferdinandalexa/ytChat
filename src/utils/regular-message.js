/** @typedef {("owner" | "moderator" | "member") | null } AuthorType */

/** @param {AuthorType} authorType */
export function RegularMessage (authorType = '') {
  return `
  <yt-live-chat-text-message-renderer author-type=${authorType}>
    
    <yt-img-shadow id="author-photo">
      <img style="display: inline-block; background-color: red; width: 20px; height: 20px; border-radius: 20px" />
    </yt-img-shadow>

    <div id="content">
      <span id="timestamp">12:00</span>

      <yt-live-chat-author-chip>
        <span id="author-badges">
          <yt-live-chat-author-badge-renderer type=${authorType}>
            <img style="display: inline-block; background-color: red; width: 16px; height: 16px; border-radius: 16px"/>
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
