import { createHtmlPreview } from './src/createHtmlPreview';
import { generateChatStyles } from './src/generateChatStyles';

/** @type {HTMLIFrameElement} */
const $ChatPreview = document.querySelector('#chat-preview');

const chatStyles = generateChatStyles();

const chatHtmlPreview = createHtmlPreview(chatStyles);
const srcBlob = new window.Blob([chatHtmlPreview], { type: 'text/html' });
const previewUrl = URL.createObjectURL(srcBlob);

$ChatPreview.setAttribute('src', previewUrl);
