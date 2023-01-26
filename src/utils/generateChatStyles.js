export function generateChatStyles ({ chat }) {
  return `
  /* ********************** */
  /* *** Chat Container *** */
  /* ********************** */
  
  * {
    box-sizing: border-box;
  }
  
  html {
    height: 100%;
    font-size: 10px !important;
  }
  
  body {
    display: grid;
    overflow: hidden;
    margin: 0;
    font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    letter-spacing: 0.1ch;
    place-content: center;
  }
  
  body{
    height: 100%;
    background-color: transparent !important;
  }
  
  yt-live-chat-renderer {
    display: block !important;
    height: 100%;
    background-color: ${chat['background-color']} !important;
  }
  
  /* *** Adjust height container *** */
  yt-live-chat-item-list-renderer#item-offset {
    display: block !important;
    height: 100% !important; 
    padding-top: ${chat['padding-block']}px;
    padding-bottom: ${chat['padding-block']}px;
    padding-right: ${chat['padding-inline']}px;
    padding-left: ${chat['padding-inline']}px;
  }
  
  /* ********************* */
  /* *** Chat messages *** */
  /* ********************* */
  
  /* *** Box appearence *** */
  yt-live-chat-text-message-renderer,
  yt-live-chat-text-message-renderer[is-highlighted],
  yt-live-chat-paid-message-renderer,
  yt-live-chat-legacy-paid-message-renderer {
    display: block !important;
    overflow: hidden;
    max-width: 640px !important;
    height: max-content !important;
    border-radius: 8px !important;
    font-size: 1.8rem !important;
    line-height: 1.25 !important;
  }
  
  yt-live-chat-text-message-renderer,
  yt-live-chat-text-message-renderer[is-highlighted],
  yt-live-chat-legacy-paid-message-renderer {
    padding: 1.75rem !important;
    padding-bottom: 1.75rem !important;
  }
  
  /** *** Spacing between messages *** */
  yt-live-chat-text-message-renderer,
  yt-live-chat-text-message-renderer[is-highlighted],
  yt-live-chat-paid-message-renderer,
  yt-live-chat-legacy-paid-message-renderer {
    margin-bottom: ${chat['margin-bottom']}px !important;
  }

  yt-live-chat-text-message-renderer:last-child,
  yt-live-chat-text-message-renderer[is-highlighted]:last-child,
  yt-live-chat-paid-message-renderer:last-child,
  yt-live-chat-legacy-paid-message-renderer:last-child {
    margin-bottom: 0 !important;
  }
  
  /* *** Hide some elements *** */
  yt-live-chat-text-message-renderer #author-photo,
  yt-live-chat-text-message-renderer[is-highlighted] #author-photo,
  yt-live-chat-paid-message-renderer #author-photo,
  yt-live-chat-legacy-paid-message-renderer #author-photo {
    display: none !important;
  }
  
  yt-live-chat-text-message-renderer #author-photo,
  yt-live-chat-text-message-renderer[is-highlighted] #author-photo,
  yt-live-chat-paid-message-renderer #author-photo,
  yt-live-chat-legacy-paid-message-renderer #author-photo {
    display: none !important;
  }
  
  yt-live-chat-text-message-renderer #timestamp,
  yt-live-chat-text-message-renderer[is-highlighted] #timestamp {
    display: none !important;
    vertical-align: middle !important;
  }
  
  /* *** Hide deleted messages *** */
  yt-live-chat-text-message-renderer[is-deleted],
  yt-live-chat-legacy-paid-message-renderer[is-deleted] {
    display: none !important;
  }
  
  /* *********************** */
  /* *** Regular Message *** */
  /* *********************** */
  
  /* *** Background color *** */
  yt-live-chat-text-message-renderer,
  yt-live-chat-text-message-renderer[author-type],
  yt-live-chat-text-message-renderer[is-highlighted],
  yt-live-chat-text-message-renderer[author-type][is-highlighted] {
    background-color: hsl(240deg 5% 10%) !important;
  }
  
  /* yt-live-chat-text-message-renderer #content,
    yt-live-chat-text-message-renderer[is-highlighted] #content {} */
  
  /* *** Content layout *** */
  yt-live-chat-author-chip {
    display: inline-block !important;
  
    /* Gap between author-name and menssage in oneline layout */
    margin-right: 4px !important;
  
    /* Gap between author-name and menssage in breakline layout */
    margin-bottom: 8px !important;
  }
  
  yt-live-chat-text-message-renderer #author-badges,
  yt-live-chat-text-message-renderer[is-highlighted] #author-badges {
    display: none !important;
  }
  
  yt-live-chat-text-message-renderer #author-name,
  yt-live-chat-text-message-renderer[is-highlighted] #author-name,
  yt-live-chat-text-message-renderer[author-type] #author-name,
  yt-live-chat-text-message-renderer[author-type][is-highlighted] #author-name {
    color: #DFDFDF !important;
    font-weight: 700 !important;
  }
  
  yt-live-chat-text-message-renderer[author-type="owner"] #author-name,
  yt-live-chat-text-message-renderer[author-type="owner"][is-highlighted] #author-name {
    padding: 0 !important;
    background-color: transparent !important;
    color: hsl(50deg 100% 50%) !important;
    vertical-align: middle !important;
  }
  
  yt-live-chat-text-message-renderer[author-type="moderator"] #author-name,
  yt-live-chat-text-message-renderer[author-type="moderator"][is-highlighted] #author-name {
    color: hsl(225deg 85% 65%) !important;
  }
  
  yt-live-chat-text-message-renderer[author-type="member"] #author-name,
  yt-live-chat-text-message-renderer[author-type="member"][is-highlighted] #author-name {
    color: hsl(150deg 82% 35%) !important;
  }
  
  yt-live-chat-text-message-renderer #author-name::after,
  yt-live-chat-text-message-renderer[is-highlighted] #author-name::after {
    margin-left: 2px !important;
    content: ":" !important;
  }
  
  yt-live-chat-text-message-renderer #message,
  yt-live-chat-text-message-renderer[is-highlighted] #message {
    /* Oneline -> inline-block | Breakline -> block */
    display: block !important;
    color: #fff;
  
    /* vertical-align: middle !important; */
  }
  
  /* ********************* */
  /* *** Paid Messages *** */
  /* ********************* */
  
  yt-live-chat-paid-message-renderer #header,
  yt-live-chat-paid-message-renderer #content {
    padding: 1.25rem !important;
    color: #fff;
  }
  
  yt-live-chat-paid-message-renderer #author-name {
    font-weight: 700 !important;
  }
  
  yt-live-chat-paid-message-renderer #purchase-amount {
    font-size: 1.6rem !important;
  }
  
  yt-live-chat-legacy-paid-message-renderer {
    width: initial !important;
    background-color: hsl(150deg 82% 35%) !important;
    color: white !important;
  }
  
  yt-live-chat-legacy-paid-message-renderer #event-text {
    font-weight: 700 !important;
  }
  
  yt-live-chat-paid-message-renderer #purchase-amount,
  yt-live-chat-legacy-paid-message-renderer #detail-text {
    margin-top: 4px !important;
  }
  
  /* ****************** */
  /* *** Animations *** */
  /* ****************** */
  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateX(16px);
    }
  
    100% {
      opacity: 1;
      transform: none;
    }
  }
  
  yt-live-chat-text-message-renderer,
  yt-live-chat-text-message-renderer[is-highlighted],
  yt-live-chat-paid-message-renderer,
  yt-live-chat-legacy-paid-message-renderer {
    animation-direction: alternate;
    animation-duration: 0.25s;
    animation-fill-mode: forwards;
    animation-name: slide-in;
    animation-timing-function: ease-in;
  }
  
  /* *********************** */
  /* *** General adjusts *** */
  /* *********************** */
  
  /* *** Hidde YT Chat interface *** */
  yt-live-chat-header-renderer,
  yt-live-chat-message-input-renderer {
    display: none !important;
  }
  
  yt-live-chat-mode-change-message-renderer,
  yt-live-chat-viewer-engagement-message-renderer,
  yt-live-chat-restricted-participation-renderer {
    display: none !important;
  }
  
  yt-live-chat-banner-manager {
    display: none !important;
  }
  
  yt-live-chat-action-panel-renderer,
  yt-live-chat-renderer #action-panel {
    display: none !important;
  }
  
  /* *** Hide scrollbar *** */
  yt-live-chat-item-list-renderer #items {
    overflow: hidden !important;
  }
  
  yt-live-chat-item-list-renderer #item-scroller {
    overflow: hidden !important;
  }
  `;
}
