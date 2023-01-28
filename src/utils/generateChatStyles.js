export function generateChatStyles ({ chat, messages, sponsors, superchat, animation }) {
  return `
  /* ********************** */
  /* *** Chat Container *** */
  /* ********************** */
  
  ${chat['font-title'] === chat['font-body']
    ? `@import url('https://fonts.googleapis.com/css2?family=${chat['font-title'].split(' ').join('+')}:wght@400;700&display=swap');`
    : `@import url('https://fonts.googleapis.com/css2?family=${chat['font-title'].split(' ').join('+')}:wght@400;700&family=${chat['font-body'].split(' ').join('+')}:wght@400;700&display=swap');`
  }

  * {
    box-sizing: border-box;
  }
  
  html {
    height: 100%;
    font-size: 10px !important;
  }
  
  body {
    overflow: hidden;
    margin: 0;
    font-family: system-ui, sans-serif;
    letter-spacing: 0.1ch;
  }
  
  body,
  yt-live-chat-renderer {
    height: 100%;
    background-color: ${chat['background-color']} !important;
  }
  
  /* *** Adjust height container *** */
  yt-live-chat-item-list-renderer #item-offset {
    --offset-inline: ${chat['padding-block']}px;
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
    overflow: hidden !important;
    max-width: 640px !important;
    height: max-content !important;
    border-radius: 8px !important;
    font-size: 1.8rem !important;
    line-height: 1.25 !important;
  }

  yt-live-chat-text-message-renderer #content,
  yt-live-chat-text-message-renderer[is-highlighted] #content,
  yt-live-chat-legacy-paid-message-renderer #content{
    display: inline !important;
  }

  /** *** Spacing between messages *** */
  yt-live-chat-text-message-renderer,
  yt-live-chat-text-message-renderer[is-highlighted],
  yt-live-chat-paid-message-renderer,
  yt-live-chat-legacy-paid-message-renderer {
    margin-bottom: ${chat['margin-bottom']}px !important;
  }

  /*
  yt-live-chat-text-message-renderer:has(+ yt-live-chat-viewer-engagement-message-renderer),
  yt-live-chat-text-message-renderer[is-highlighted]:has(+ yt-live-chat-viewer-engagement-message-renderer),
  yt-live-chat-paid-message-renderer:has(+ yt-live-chat-viewer-engagement-message-renderer),
  yt-live-chat-legacy-paid-message-renderer:has(+ yt-live-chat-viewer-engagement-message-renderer) {
    margin-bottom: 0 !important;
  }
  */
  
  /* *** Hide some elements *** */  
  yt-live-chat-text-message-renderer #author-photo,
  yt-live-chat-text-message-renderer[is-highlighted] #author-photo {
    overflow: hidden !important;
    display: ${chat['show-avatar'] === 'true' ? 'inline-block' : 'none'} !important;
    width: ${messages.default['avatar-size']}px !important; 
    height: ${messages.default['avatar-size']}px !important; 
    margin-bottom: 6px !important;
    border-radius: ${messages.default.rounded}px !important;
    vertical-align: middle !important;
  }
  
  yt-live-chat-legacy-paid-message-renderer #author-photo {
    overflow: hidden !important;
    display: ${chat['show-avatar'] === 'true' ? 'inline-block' : 'none'} !important;
    width: ${sponsors['avatar-size']}px !important; 
    height: ${sponsors['avatar-size']}px !important; 
    margin-bottom: 6px !important;
    border-radius: ${sponsors.rounded}px !important;
    vertical-align: middle !important;
  }

  yt-live-chat-paid-message-renderer #author-photo{
    display: none !important;
  }
  
  yt-live-chat-text-message-renderer #timestamp,
  yt-live-chat-text-message-renderer[is-highlighted] #timestamp {
    display: none !important;
    font-family: ${chat['font-body']};
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
    padding-inline: ${messages.default['padding-inline']}px !important;
    padding-block: ${messages.default['padding-block']}px !important;
    background-color: ${messages.default['background-color']} !important;
  }
  
  /* *** Content layout *** */
  yt-live-chat-author-chip {
    display: inline-block !important;
  
    /* Gap between author-name and menssage in oneline layout */
    margin-right: 4px !important;
  
    /* Gap between author-name and menssage in breakline layout */
    margin-bottom: ${messages.default.spacing}px !important;
  }
  
  yt-live-chat-text-message-renderer #author-badges,
  yt-live-chat-text-message-renderer[is-highlighted] #author-badges {
    display: none !important;
  }
  
  yt-live-chat-text-message-renderer #author-name,
  yt-live-chat-text-message-renderer[is-highlighted] #author-name,
  yt-live-chat-text-message-renderer[author-type] #author-name,
  yt-live-chat-text-message-renderer[author-type][is-highlighted] #author-name {
    color: ${messages.default['name-color']} !important;
    font-family: ${chat['font-title']};
    font-weight: 700 !important;
  }
  
  yt-live-chat-text-message-renderer[author-type="owner"] #author-name,
  yt-live-chat-text-message-renderer[author-type="owner"][is-highlighted] #author-name {
    padding: 0 !important;
    background-color: transparent !important;
    color: ${messages.owner['name-color']} !important;
    vertical-align: middle !important;
  }
  
  yt-live-chat-text-message-renderer[author-type="moderator"] #author-name,
  yt-live-chat-text-message-renderer[author-type="moderator"][is-highlighted] #author-name {
    color: ${messages.moderator['name-color']} !important;
  }
  
  yt-live-chat-text-message-renderer[author-type="member"] #author-name,
  yt-live-chat-text-message-renderer[author-type="member"][is-highlighted] #author-name {
    color: ${messages.member['name-color']} !important;
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
    color: ${messages.default['message-color']} !important;
    font-family: ${chat['font-body']};
    /* vertical-align: middle !important; */
  }
  
  /* ********************* */
  /* *** Paid Messages *** */
  /* ********************* */
  
  yt-live-chat-paid-message-renderer #header {
    padding-inline: ${superchat['header-padding-inline']}px !important;
    padding-block: ${superchat['header-padding-block']}px !important;
  }
  yt-live-chat-paid-message-renderer #content {
    padding-inline: ${superchat['content-padding-inline']}px !important;
    padding-block: ${superchat['content-padding-block']}px !important;
  }
  
  yt-live-chat-paid-message-renderer #author-name {
    margin-bottom: ${superchat.spacing}px !important; 
    font-family: ${chat['font-title']};
    font-weight: 700 !important;
  }
  
  yt-live-chat-paid-message-renderer #purchase-amount {
    font-family: ${chat['font-body']};
    font-size: 1.6rem !important;
  }
  
  yt-live-chat-legacy-paid-message-renderer {
    width: initial !important;
    padding-inline: ${sponsors['padding-inline']}px !important;
    padding-block: ${sponsors['padding-block']}px !important;
    background-color: ${sponsors['background-color']} !important;
  }
  
  yt-live-chat-legacy-paid-message-renderer #event-text {
    display: inline-block !important;
    margin-bottom: ${sponsors.spacing}px !important; 
    color: ${sponsors['event-color']} !important;
    font-family: ${chat['font-title']};
    font-weight: 700 !important;
  }

  yt-live-chat-legacy-paid-message-renderer #detail-text {
    font-family: ${chat['font-body']};
    color: ${sponsors['detail-color']} !important;
  }

  
  /* ****************** */
  /* *** Animations *** */
  /* ****************** */
  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateX(${animation.in.direction === 'left' ? '16' : '-16'}px);
    }
  
    100% {
      opacity: 1;
      transform: none;
    }
  }
  
  @keyframes slide-out {
    0% {
      opacity: 1;
      transform: none;
    }
  
    100% {
      opacity: 0;
      transform: translateX(16px);
    }
  }
  
  yt-live-chat-text-message-renderer,
  yt-live-chat-text-message-renderer[is-highlighted],
  yt-live-chat-paid-message-renderer,
  yt-live-chat-legacy-paid-message-renderer {
    animation-direction: alternate;
    animation-duration: ${animation.in['animation-duration']}s;
    animation-fill-mode: both;
    animation-name: slide-in;
    animation-timing-function: ease-in;
  }
  
  /* *********************** */
  /* *** General adjusts *** */
  /* *********************** */
  
  /* *** Hidde and Normalize YT Chat interface *** */
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
  
  yt-live-chat-item-list-renderer #items {
    bottom: ${parseInt(chat['padding-block']) - parseInt(chat['margin-bottom'])}px !important;
    left: var(--offset-inline) !important;
    right: var(--offset-inline) !important;
    overflow: hidden !important;
    padding: 0 !important;
  }
  
  yt-live-chat-item-list-renderer #item-scroller {
    overflow: hidden !important;
  }
  `;
}
